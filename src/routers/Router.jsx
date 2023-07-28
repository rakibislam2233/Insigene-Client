import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Pages/Home/Home";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import BaaS from "../components/Pages/BaaS/BaaS";
import Decipher from "../components/Pages/Decipher/Decipher";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Blogs from "../components/Pages/Blogs/Blogs";
import AddBlogs from "../layouts/Dashboard/Admin/AddBlogs/AddBlogs";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Admin from "../layouts/Dashboard/Admin/Admin";
import ManagBlogs from "../layouts/Dashboard/Admin/ManagBlogs/ManagBlogs";
import SingleBlog from "../components/Pages/Blogs/SingleBlog";
import Faq from "../components/Pages/Faq/Faq";

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
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/SingleBlog/:id',
        element:<SingleBlog></SingleBlog>
      }
    ],
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<Admin></Admin>
      },
      {
        path:'/dashboard/addBlogs',
        element:<AddBlogs></AddBlogs>
      }
      ,
      {
        path:'managBlogs',
        element:<ManagBlogs/>
      }
    ]
  }
]);

export default router;
