import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Error from "../components/Error";
import CatagoryNews from "../components/CatagoryNews";




const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:"/category/:id",
                element:<CatagoryNews></CatagoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
               
            },
        ],
      },
])

export default Router;