import About from "./pages/About";
import App from "./App";
import Buildings from "./pages/Buildings";
import Error from "./components/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { createBrowserRouter } from "react-router-dom";

var router = createBrowserRouter([
    {
        // Home
        path: "/",
        element : <Layout />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                // Logement
                path: "/logement/:id",
                element : <Buildings />,
            },
            {
                path : "/apropos",
                element : <About />
            },
            {
                path : "/test",
                element : <App />
            },
            {
                // 404
                path: "*",
                element : <div className="container">
                    <Error />
                </div>
            }
        ]
    },
])

export default router;