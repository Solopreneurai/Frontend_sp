import { lazy } from 'react';
import { RouteObject, useRoutes } from "react-router-dom"

const Portal = lazy(() => import('./pages/Portal'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import("./pages/Login"))

const routes : RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/portal",
        element: <Portal />
    }
]
export default function Router() {
    return useRoutes(routes)
}