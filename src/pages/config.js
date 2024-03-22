import Home from "./Home";
import Todo from "./Todo";
import AuthLayout from "../layouts/AuthLayout";

export const config = [
    {
        element: <Home />,
        path: '/',
        Layout: AuthLayout
    },
    {
        element: <Todo />,
        path: '/todo',
        Layout: AuthLayout
    }
]