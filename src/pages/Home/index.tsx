import {useEffect, useState} from "react";
import { Tabs } from 'antd-mobile'

import { getArticleChannelListAPI } from '@/apis/article.ts'
import type { ChannelItem } from '@/types/channel'

// 引入样式
import './index.scss'

const Home = () => {
    // 文章频道列表
    const [articleChannelList, setArticleChannelList] = useState<ChannelItem[]>([])

    useEffect(() => {
        const getArticleChannelList = async () => {
            const result = await getArticleChannelListAPI()
            // 获取文章频道列表
            setArticleChannelList(result.data.data.channels)
        }

        getArticleChannelList()
    }, [])
    return (
        <div className="home">
            <div className="tab-container">
                {/* tab 区域 */}
                <nav className="tab-list">
                    <Tabs className="list">
                        {
                            articleChannelList?.map(channel => (
                                <Tabs.Tab title={channel.name} key={channel.id}>
                                    {channel.id}
                                </Tabs.Tab>
                            ))
                        }
                    </Tabs>
                </nav>
            </div>
            <div className="list-container">

            </div>
        </div>
    )
}

export default Home
