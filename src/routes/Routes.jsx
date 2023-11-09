import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import CreateAssignment from "../pages/assignment/CreateAssignment";
import UpdateAssignment from "../pages/assignment/UpdateAssignment";
import DetailAssignment from "../pages/assignment/DetailAssignment";
import PrivateRoutes from "./PrivateRoutes";
import MyAssignment from "../pages/assignment/MyAssignment";
import SubmittedAssignment from "../pages/assignment/SubmittedAssignment";
import AllAssignment from "../pages/assignment/AllAssignment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/allassignment',
                element: <AllAssignment></AllAssignment>,
                loader: () => fetch('http://localhost:5000/assignment')
            },
            {
                path: "createassignment",
                element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>,
            },
            {
                path: "updateassignment/:id",
                element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: "updatetaken/:id",
                // element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/taken/${params.id}`)
            },
            {
                path: "assignment/:id",
                element: <PrivateRoutes><DetailAssignment></DetailAssignment></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
            },
            // {
            //     path: '/taken',
            //     element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
            //     loader: () => fetch('https://m10a-brand-shop-server-283gyzcf7-dipuhaiders-projects.vercel.app/cart'),
            // },
            {
                path: '/myassignment',
                element: <PrivateRoutes><MyAssignment></MyAssignment></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/assignment'),
            },
            {
                path: '/submittedassignment',
                element: <PrivateRoutes><SubmittedAssignment></SubmittedAssignment></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/taken'),
            },
        ]
    }
]);

export default router;