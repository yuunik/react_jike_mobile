// 文章相关接口
import { http } from '@/utils'
import type { ResType } from '@/types/basic'
import type { ChannelRes } from '@/types/channel'
import {ArticleListQuery, ArticleListRes} from "@/types/article";

// 获取文章频道
export const getArticleChannelListAPI = () => {
    return http<ResType<ChannelRes>>({
        url: '/channels',
        method: 'get'
    })
}

/**
 * 根据文章id获取文章列表
 * @param params
 */
export const getArticleListByIdAPI = (params: ArticleListQuery) => {
    return http<ResType<ArticleListRes>>({
        url: '/articles',
        method: 'get',
        params
    })
}