import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
// 一级路由
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'

// 创建路由
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    }
])

export default router