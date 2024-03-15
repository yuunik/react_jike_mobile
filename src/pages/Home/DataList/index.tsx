import { Image, List } from 'antd-mobile'
import { useEffect, useState } from "react";
import { getArticleListByIdAPI } from "@/apis/article.ts";
import { ArticleItem } from "@/types/article";

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
            console.log(result.data)
            // 获取文章列表
            setArticleList(result.data.data.results)
            // 获取请求下一页数据的时间戳
            setTimestamp(result.data.data.pre_timestamp)
        }
        // 调用接口, 获取文章列表
        getArticleList()
    }, [])

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
                        >
                            {article.title}
                        </List.Item>
                    ))
                }
            </List>
        </>
    )
}

export default DataList
