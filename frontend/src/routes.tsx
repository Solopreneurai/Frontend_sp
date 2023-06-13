import { lazy } from 'react';
import { RouteObject, useRoutes } from "react-router-dom"

const Portal = lazy(() => import('./pages/Portal'))
const Home = lazy(() => import('./pages/Home'))

const routes : RouteObject[] = [
    {
        path: "/",
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: "portal",
        children: [
            {
                index: true,
                element: <Portal />
            }
        ]
    }
]
export default function Router() {
    return useRoutes(routes)
}