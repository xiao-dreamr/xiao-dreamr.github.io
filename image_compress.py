#!/usr/bin/env python3
"""
使用 Pillow 批量压缩图片为 WebP（保留透明度，原地替换，自动跳过备份文件）
- 原地替换：原文件备份为 <filename>-old.<ext>，生成 <filename>.webp
- 自动检测 Alpha 通道，有透明则保存为 RGBA WebP，无透明则 RGB
- 已有 .webp 默认跳过（会输出跳过信息）
- 备份文件（-old）不会被处理，也不会产生输出
- 若指定 -o 输出目录，则直接输出到该目录（不修改原文件）
"""

import argparse
from pathlib import Path
from PIL import Image

INPUT_EXTS = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.webp'}


def prepare_image(img):
    """智能转换为 RGB 或 RGBA，保留透明度"""
    mode = img.mode
    if mode in ('RGBA', 'LA'):
        return img
    if mode == 'P':
        if 'transparency' in img.info:
            return img.convert('RGBA')
        else:
            return img.convert('RGB')
    return img.convert('RGB')


def compress_images(input_dir, output_dir=None, quality=85, backup_suffix='-old', skip_webp=True):
    input_path = Path(input_dir).resolve()
    if not input_path.is_dir():
        print(f"错误：{input_dir} 不是有效目录")
        return

    # ----- 收集所有需要处理的文件（排除备份文件） -----
    all_files = []
    for f in input_path.rglob('*'):
        if not f.is_file():
            continue
        if f.suffix.lower() not in INPUT_EXTS:
            continue
        # 跳过备份文件（文件名以 backup_suffix 结尾）
        if f.stem.endswith(backup_suffix):
            continue
        all_files.append(f)

    total = len(all_files)
    processed = 0
    failed = 0
    skipped = 0

    for file_path in all_files:
        ext = file_path.suffix.lower()

        # 如果是 webp 且需要跳过
        if skip_webp and ext == '.webp':
            print(f"⏭️  跳过 (已是webp): {file_path}")
            skipped += 1
            continue

        # ---------- 模式1：指定输出目录（不修改原文件） ----------
        if output_dir:
            rel_path = file_path.relative_to(input_path)
            out_path = Path(output_dir) / rel_path.parent / (rel_path.stem + '.webp')
            out_path.parent.mkdir(parents=True, exist_ok=True)
            try:
                print(f"📤 输出: {file_path} -> {out_path}")
                img = Image.open(file_path)
                img = prepare_image(img)
                img.save(out_path, format='WEBP', quality=quality, optimize=True)
                processed += 1
            except Exception as e:
                print(f"   ❌ 错误: {e}")
                failed += 1
            continue

        # ---------- 模式2：原地替换（备份 -> 生成 .webp） ----------
        backup_path = file_path.with_stem(file_path.stem + backup_suffix)

        # 1. 备份原文件
        try:
            if backup_path.exists():
                backup_path.unlink()   # 删除旧备份
            file_path.rename(backup_path)
        except Exception as e:
            print(f"   ❌ 备份失败 ({file_path}): {e}")
            failed += 1
            continue

        # 2. 压缩为 WebP，保存为原文件名但扩展名为 .webp
        webp_path = file_path.with_suffix('.webp')
        try:
            print(f"🔄 压缩: {backup_path} -> {webp_path}")
            img = Image.open(backup_path)
            img = prepare_image(img)
            img.save(webp_path, format='WEBP', quality=quality, optimize=True)
            processed += 1
        except Exception as e:
            print(f"   ❌ 压缩失败: {e}")
            # 恢复原文件
            try:
                backup_path.rename(file_path)
                print(f"   ↩️  已恢复原文件")
            except:
                pass
            failed += 1

    print(f"\n✅ 完成！共 {total} 张图片，成功压缩 {processed} 张，跳过 {skipped} 张，失败 {failed} 张。")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='批量压缩图片为 WebP（原地替换，保留透明度，自动跳过备份文件）'
    )
    parser.add_argument('input_dir', help='源目录（递归处理）')
    parser.add_argument('-o', '--output-dir', help='输出目录（指定后不修改原文件）')
    parser.add_argument('-q', '--quality', type=int, default=85,
                        help='压缩质量 (1-100)，默认 85')
    parser.add_argument('-b', '--backup-suffix', default='-origin',
                        help='备份原文件的后缀，默认 "-origin"')
    parser.add_argument('--no-skip-webp', action='store_true',
                        help='不跳过已有的 WebP 文件（也会尝试压缩）')
    args = parser.parse_args()

    compress_images(
        args.input_dir,
        args.output_dir,
        args.quality,
        args.backup_suffix,
        skip_webp=not args.no_skip_webp
    )
