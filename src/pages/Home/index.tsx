import { Tabs } from 'antd-mobile'

// 引入样式
import './index.scss'
import useTab from "@/hook/useTab.ts";
import DataList from "@/pages/Home/DataList";

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
                        <Tabs className="list" defaultActiveKey={"0"}>
                            {
                                articleChannelList.map(channel => (
                                    <Tabs.Tab title={channel.name} key={channel.id}>
                                        {/* 数据列表 */}
                                        <div className="list-container">
                                            <DataList channelId={"" + channel.id} />
                                        </div>
                                    </Tabs.Tab>
                                ))
                            }
                        </Tabs>
                    }
                </nav>
            </div>
        </div>
    )
}

export default Home
