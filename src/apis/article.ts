// 文章相关接口
import { http } from '@/utils'
import type { ResType } from '@/types/basic'
import type { ChannelRes } from '@/types/channel'

// 获取文章频道
export const getArticleChannelListAPI = () => {
    return http<ResType<ChannelRes>>({
        url: '/channels',
        method: 'get'
    })
}