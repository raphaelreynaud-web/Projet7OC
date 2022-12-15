import About from "./pages/About";
import App from "./App";
import Buildings from "./pages/Buildings";
import Home from "./pages/Home";
import Tag from "./components/TAG";
import { createBrowserRouter } from "react-router-dom";

var router = createBrowserRouter([
    {
        // Home
        path: "/",
        element : <Home />
    },
    {
        // Logement
        path: "/logement/:id",
        loader : ({params}) => {
            return params.id
        },
        action : ({params}) => {
            return params.id
        },
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
        element : <Tag />
    }
])

export default router;