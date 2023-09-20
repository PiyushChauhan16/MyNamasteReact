import React, { useState } from 'react'
import ResturantCard from './ResturantCard'
import Search from './Search'
import resData from "./Data"

/**
 * 
 * Hooks are JS utility functions. 
 * 
 */
const Body = () => {
    let [resList, setResList] = useState (resData);
    let [flag, setFlag] = useState (0);

    function clickHandler (){
        let topRated = resData.filter((data)=>{
            return (data.info.avgRating >= 4.3);
        })

        if (!flag){
            setFlag (1);
            setResList (topRated);
        }
        else{
            setFlag (0);
            setResList (resData);
        }
        
    }

    return (
        <div className="body">
            <div className="search">
                <Search />
            </div>
            
            <div className="main-res-container">
                <div>
                    <button 
                    className={'topRated-btn ' + ((flag === 0) ? "unselect" : "select")} 
                    onClick={clickHandler}>
                    TOP RATED</button>
                </div>
                <div className="res-container">
                     {resList.map (data => {
                        return (
                            <ResturantCard key = {data.info.id} resData = {data}/>
                        )
                     })}
                </div>
            </div>
            
        </div>
    )
}

export default Body