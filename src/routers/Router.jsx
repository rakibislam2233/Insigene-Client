import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Pages/Home/Home";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import BaaS from "../components/Pages/BaaS/BaaS";
import Decipher from "../components/Pages/Decipher/Decipher";
import Faq from "../components/Pages/FAQ/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div> 404 error page</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/baas",
        element: <BaaS></BaaS>,
      },
      {
        path: "/decipher",
        element: <Decipher></Decipher>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);

export default router;
