// 标签页钩子
import { useEffect, useState } from "react";

import { getArticleChannelListAPI } from '@/apis/article.ts'
import type { ChannelItem } from '@/types/channel'

const useTab = () => {
    // 文章频道列表
    const [articleChannelList, setArticleChannelList] = useState<ChannelItem[]>([])

    // 组件挂载时调用, 仅执行一次
    useEffect(() => {
        const getArticleChannelList = async () => {
            const result = await getArticleChannelListAPI()
            // 获取文章频道列表
            setArticleChannelList(result.data.data.channels)
        }
        getArticleChannelList()
    }, [])

    return {
        articleChannelList
    }
}

export default useTab