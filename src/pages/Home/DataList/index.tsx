import { Image, List } from 'antd-mobile'
// mock数据
import { users } from './user'
import {useEffect, useState} from "react";
import { getArticleListByIdAPI } from "@/apis/article.ts";
import {ArticleItem} from "@/types/article";

// interface Props {
//     channel_id: string
// }

const HomeList = () => {
    // 文章列表
    const [articleList, setArticleList] = useState<ArticleItem[]>([])

    // 组件时执行
    useEffect(() => {
        const getArticleList = async () => {
            const result = await getArticleListByIdAPI({
                channel_id: '1',
                timestamp: ""+Date.now()
            })
            // 获取文章列表
            setArticleList(result.data.data.results)
        }
        // 调用接口, 获取文章列表
        getArticleList()
    }, [])

    return (
        <>
            <List>
                {users.map((item) => (
                    <List.Item
                        key={item.id}
                        prefix={
                            <Image
                                src={item.avatar}
                                style={{ borderRadius: 20 }}
                                fit="cover"
                                width={40}
                                height={40}
                            />
                        }
                        description={item.description}
                    >
                        {item.name}
                    </List.Item>
                ))}
            </List>
        </>
    )
}

export default HomeList