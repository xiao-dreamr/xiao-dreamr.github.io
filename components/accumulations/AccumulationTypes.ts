export interface AccumulationItem{
    /**
     * route路径
     */
    path:string
    /**
     * 收集内容
     */
    content: string;
    /**
     * 精华句
     */
    essence?: string[];
    /**
     * 作者
     */
    author ?: string;
    /**
     * 来源
     */
    source ?: string;
    /**
     * 作者所处时代
     */
    period ?: string;
    /**
     * 作者所处地区/国家
     */
    region ?: string;
    /**
     * 文字排列方向（纵向/横向）
     */
    align ?: "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
    /**
     * 一行/列文字数目限制
     */
    limit ?: number;
    /**
     * 显示顺序（未指定默认随机）
     */
    index ?: number;
    /**
     * 标签
     */
    tags ?: string[];
}

