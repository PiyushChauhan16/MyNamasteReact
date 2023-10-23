import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider, Outlet, useParams} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import ResturantMenu from "./components/ResturantMenu"
/**
 * Header
 *   Logo
 *   NavItems
 * Body
 *   SearchBar
 *   CardContainer
 *      Resturant Card
 *          img
 *          anme of Res,Rating, cuisine, delievery Time
 * Footer
 *   Container
 *   Links
 *   Address
 *   Contact 
 */

const AppLayout = ()=>{

    return  (
        <div className = "app">
            <Header />
            <Outlet />
            

            
        </div>
    );
}
 
const appRouter  = createBrowserRouter (
    [
        {
            path: "/",
            element: <AppLayout />,
            children:[
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path:"/contact",
                    element: <Contact/>,
                    
        
                },
                {
                    path: "/restaurants/:resId",
                    element: <ResturantMenu  />
                  }
                  
            ],
            errorElement:<Error />
        },
        
    ]
)

const root = ReactDOM.createRoot (document.getElementById("root"));
root.render (<RouterProvider router = {appRouter}></RouterProvider>)