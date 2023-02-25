import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import {loader as rootLoader, Root} from "./pages/root";
import reportWebVitals from './reportWebVitals';
import Contact from "./pages/contact"
import {ErrorPage} from "./error-page";


const router = createBrowserRouter([
    //이하의 객체는 개별의 Route임
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact/>,
            },
        ]
    },
    {
        path: "/App",
        element: <App/>,
        errorElement: <ErrorPage/>,
    }
    //<Route path="/" element={<Home />} />

]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
