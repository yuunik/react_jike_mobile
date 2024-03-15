// 文章接口相关类型

// 文章列表请求参数类型
export type ArticleListQuery = {
    // 频道 id
    channel_id: string,
    // 时间戳
    timestamp: string
}

// 文章列表响应参数类型
export type ArticleListRes = {
    // 响应数组
    results: ArticleItem[],
    // 请求下一页数据的时间戳
    pre_timestamp: string
}

// 响应结果类型
export type ArticleItem = {
    // 文章id
    art_id: string,
    // 文章标题
    title: string,
    // 文章作者id
    aut_id: string,
    // 文章评论数量
    comm_count: number,
    // 文章发布时间
    pubdate: string,
    // 文章作者名字
    aut_name: string,
    // 文章是否置顶 (0未置顶 1置顶)
    is_top: number,
    // 文章封面
    cover: CoverItem
}

// 文章封面类型
export type CoverItem = {
    // 文章封面类型 (0是无封面, 1是1张封面, 3是3张封面)
    type: number,
    // 文章封面图片地址数组
    images?: string[]
}