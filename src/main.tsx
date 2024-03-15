import ReactDOM from 'react-dom/client'
// 导入 Provider
import { RouterProvider } from 'react-router-dom'

// 导入 router 实例
import router from './router'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
