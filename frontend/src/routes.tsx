import { lazy } from 'react';
import { useRoutes } from "react-router-dom"

const Portal = lazy(() => import('./pages/Portal'))
const Home = lazy(() => import('./pages/Home'))

export default function Router() {
    return useRoutes([
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
    ])
   
}