/* 其他接口相关返回类型 */
// 文章频道返回类型
export type ChannelRes = {
    // 文章频道列表
    channels: ChannelItem[]
}

// 文章频道信息
export type ChannelItem = {
    // 文章频道 id
    id: number,
    // 文章频道名字
    name: string
}

