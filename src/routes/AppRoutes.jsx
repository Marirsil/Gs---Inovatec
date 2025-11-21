import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Perfis from "../pages/Perfis/Perfis.jsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/perfis",
    element: <Perfis />,
  },
]);