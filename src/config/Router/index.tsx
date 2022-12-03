import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "../../pages/Main";
import About from "../../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

const AppRouter = () => <RouterProvider router={router} />
export default AppRouter
