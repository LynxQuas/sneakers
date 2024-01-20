import Product from "./components/Product/Product";

import AppLayout from "./pages/AppLayout";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                { index: true, element: <Product /> },
                { path: "/men", element: <h1>Men</h1> },
                { path: "/women", element: <h1>Women</h1> },
                { path: "/about", element: <h1>About</h1> },
                { path: "/contact", element: <h1>Contact</h1> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
