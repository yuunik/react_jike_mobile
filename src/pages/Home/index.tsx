import { Tabs } from 'antd-mobile'

// 引入样式
import './index.scss'
import useTab from "@/hook/useTab.ts";

const Home = () => {
    // 使用标签页钩子
    const { articleChannelList } = useTab()

    return (
        <div className="home">
            <div className="tab-container">
                {/* tab 区域 */}
                <nav className="tab-list">
                    {
                        articleChannelList
                        &&
                        <Tabs className="list">
                            {
                                articleChannelList.map(channel => (
                                    <Tabs.Tab title={channel.name} key={channel.id}>
                                        {channel.id}
                                    </Tabs.Tab>
                                ))
                            }
                        </Tabs>
                    }
                </nav>
            </div>
            <div className="list-container">

            </div>
        </div>
    )
}

export default Home
