import { Image, InfiniteScroll, List } from 'antd-mobile'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArticleListByIdAPI } from "@/apis/article.ts";
import { ArticleItem } from "@/types/article";
import './index.scss'

interface Props {
    channelId: string
}

const DataList = ({ channelId }: Props) => {
    // 文章列表
    const [articleList, setArticleList] = useState<ArticleItem[]>([])
    // 请求下一页数据的时间戳
    const [timestamp, setTimestamp] = useState<string>(`${new Date().getTime()}`)

    // 组件时执行
    useEffect(() => {
        const getArticleList = async () => {
            const result = await getArticleListByIdAPI({
                channel_id: channelId,
                timestamp: ""+ new Date().getTime()
            })
            // 获取文章列表
            setArticleList(result.data.data.results)
            // 获取请求下一页数据的时间戳
            setTimestamp(result.data.data.pre_timestamp)
        }
        // 调用接口, 获取文章列表
        getArticleList()
    }, [channelId])

    // 是否加载所有数据的标记
    const [isHasMore, setIsHasMore] = useState<boolean>(true)

    // 加载更多数据
    const loadMore = async () => {
        // 调用接口, 刷新下一页数据
        const result = await getArticleListByIdAPI({
            channel_id: channelId,
            timestamp
        })
        // 获取文章列表, 拼接旧数据
        setArticleList([...articleList, ...result.data.data.results])
        // 获取请求下一页数据的时间戳
        setTimestamp(result.data.data.pre_timestamp)
        // 当没有下一页数据时, 停止无限滚动
        if (result.data.data.results.length === 0) {
            // 修改是否加载所有数据的标记
            setIsHasMore(false)
        }
    }

    const navigate = useNavigate()

    return (
        <>
            <List>
                {
                    articleList.map((article) => (
                        <List.Item
                            key={article.art_id}
                            prefix={
                                <Image
                                    src={article.cover.images?.[0]}
                                    style={{ borderRadius: 20 }}
                                    fit="cover"
                                    width={40}
                                    height={40}
                                />
                            }
                            description={article.pubdate}
                            onClick={ () => navigate(`/detail?id=${article.art_id}`) }
                        >
                            {article.title}
                        </List.Item>
                    ))
                }
            </List>
            {/* 上滑触底事件 */}
            <InfiniteScroll loadMore={loadMore} hasMore={isHasMore} />
        </>
    )
}

export default DataList
