import {useEffect} from "react";
import {getArticleChannelListAPI} from "@/apis/article.ts";

const Home = () => {
    useEffect(() => {
        const getArticleChannleList = async () => {
            const result = await getArticleChannelListAPI()
            console.log(result.data.data.channels)
        }

        getArticleChannleList()
    }, [])
    return (
        <div className="home">
            Home
        </div>
    )
}

export default Home
