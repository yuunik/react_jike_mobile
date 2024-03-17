import { useEffect, useState } from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import { NavBar } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";
import { getArticleInfoAPI } from "@/apis/article.ts";
import type { ArticleInfo } from "@/types/article";

const Detail = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    // 获取 id
    const id = searchParams.get("id")

    // 文章详情
    const [articleInfo, setArticleInfo] = useState<ArticleInfo>()
    // 获取文章详情
    const getArticleInfo = async () => {
        const result = await getArticleInfoAPI(id!)
        setArticleInfo(result.data.data)
    }

    // 组件加载完成执行
    useEffect(() => {
        // 获取文章详情
        getArticleInfo()
    }, [id])

    // 当文章内容尚未加载完成时
    if (!articleInfo) {
        return <div>文章正在加载中......</div>
    }

    return (
        <div className="detail">
            <NavBar back='返回' backArrow={<CloseOutline />} onBack={() => navigate(-1)}>
                { articleInfo?.title }
            </NavBar>
            {/* 文章内容 */}
            <div dangerouslySetInnerHTML={{ __html: articleInfo?.content }}></div>
        </div>
    )
}

export default Detail
