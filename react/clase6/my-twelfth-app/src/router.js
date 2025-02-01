import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./routes/PublicLayout";
import Clock from "./routes/Clock";
import TableUsers from "./routes/TableUsers";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/clock",
                element: <Clock />,
            },
            {
                path: "/people",    
                element: <TableUsers />,
            },
        ],
    },
]);

/*  // OPCION 1
const router = createBrowserRouter([

    {
        path: "/",
        element: <div>Hello world</div>,
    },
]);

*/
/*
// OPCION 2

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
        path="/" 
        element={<div>Hello world</div>} 
        />
    )

);
*/
/*
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {index: true, element: <index />},
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                        errorElement: <div>¡Ooops! There was an error. </div>,
                    },
                ],
            },
        ],
    },
]);
*/

export default router;