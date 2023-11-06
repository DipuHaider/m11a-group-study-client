import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                //loader: () => fetch('https://m10a-brand-shop-server-283gyzcf7-dipuhaiders-projects.vercel.app/brand'),
            },
        ]
    }
]);

export default router;