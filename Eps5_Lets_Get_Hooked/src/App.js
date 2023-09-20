import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

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
            <Body />

            
        </div>
    );
}


const root = ReactDOM.createRoot (document.getElementById("root"));
root.render (<AppLayout></AppLayout>)