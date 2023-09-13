import React from "react"
import ReactDOM from "react-dom/client"
import resData from "./Data"

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

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src = "https://cdn.logojoy.com/wp-content/uploads/2018/05/01105727/8_big33-768x591.png"></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li className="list-item">Home</li>
                    <li className="list-item">About Us</li>
                    <li className="list-item">Contact Us</li>
                    <li className="list-item">Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div className="search-bar">
            <div className="search-bar-main-div">
                <input className="search-input"
                type = "text" placeholder="search for resturants, food ..."></input>
                <span className="material-symbols-outlined search-btn">search</span>

            </div>
        </div>
    )

}

const ResturantCard = (props) => {
    let {name, cloudinaryImageId, cuisines, avgRating, areaName} = props.resData.info;

    let cuisineArr = [];
    for (let i = 0; i < cuisines.length; i++){
        if (i <= 3)cuisineArr.push (cuisines[i]);
        else{
            cuisineArr.push ("...");
            break;
        }
    }

    return (
        <div className="card" style={{width: "18rem", display: "block", border: "none"}}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} 
            className="card-img-top" alt="..." style={{height: "200px", width: "300px", borderRadius: "20px", objectFit: "cover"}} />
            <div className="card-body" style={{paddingLeft: "0px"}}>
                <h5 className="card-title">{name}</h5>
                <span className="rating">	&#9733;</span>
                <span className="card-text" >{avgRating}</span>
                <p className="card-text" style={{color: "grey", marginTop: "2px", marginBottom: "0px", fontWeight: "400"}}>{cuisineArr.join (", ")}</p>
                <p className="card-text" style={{color: "grey", fontWeight: "400"}}>{areaName}</p>
          
            </div>
        </div>
    );
}



const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <Search />
            </div>
            <div className="main-res-container">
                <div className="res-container">
                     {resData.map (data => {
                        return (
                            <ResturantCard key = {data.info.id} resData = {data}/>
                        )
                     })}
                </div>
            </div>
            
        </div>
    )
}


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