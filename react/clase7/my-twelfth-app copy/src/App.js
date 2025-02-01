import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";  

/*
const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world</div>
    }
]);
*/

const App = () => {
    return <RouterProvider router={router}/>;
}

export default App;