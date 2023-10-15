import React, { useEffect, useState } from 'react'
import ResturantCard from './ResturantCard'
import Search from './Search'
import resData from "./Data"
import Shimmer from './shimmer'
/**
 * 
 * Hooks are JS utility functions. 
 * 
 */
let resApiData = [];

function buildShimmerArray (limit){
    let res = [];

    for (let i = 0; i < limit; i++){
        res.push (<Shimmer></Shimmer>)
    }

    return res;
}

const Body = () => {
    let [resList, setResList] = useState ([]);
    let [flag, setFlag] = useState (0);
    let [noResult, setNoResult] = useState (0);
    
    const shimmerArr = buildShimmerArray (10);


    async function fetchData (){
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7461247&lng=77.1160886&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json ();

        resApiData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList (resApiData);
        return resApiData;
    }

    useEffect (()=>{
        fetchData ();
    }, []);

    function clickHandler (){
        let topRated = resList.filter((data)=>{
            return (data.info.avgRating >= 4.3);
        })

        if (!flag){
            setFlag (1);
            if (topRated.length === 0) setNoResult (1);
            setResList (topRated);
        }
        else{
            setFlag (0);
            if (noResult === 1) setNoResult (0);
            console.log (resApiData);
            setResList (resApiData);
        }
        
    }

    
    if ((resList === undefined || resList.length === 0) && noResult === 0){
       return (
        <>
        <div className="shimmer-arrangment">
            <div>
                {shimmerArr}
            </div>
            
        </div>
        </>
        
       );
    }
    else{
        return (
            <>
            
            <div className="body">
                <div className="search">
                    <Search resList = {resApiData} setResList = {setResList} setNoResult = {setNoResult}/>
                </div>
                <div className="main-res-container">
                    <div>
                        <button 
                        className={'topRated-btn ' + ((flag === 0) ? "unselect" : "select")} 
                        onClick={clickHandler}>
                        TOP RATED</button>
                    </div>
                {
                    noResult === 1 ?<>
                        <div>NO RESULT FOUND</div>
                    </>:(<div className="res-container">
                                {resList.map (data => {
                                    return (
                                        <ResturantCard key = {data.info.id} resData = {data}/>
                                    )
                                })}
                            </div>
                        
                        )
                
                }
                </div>
            </div>
             
        </>
        )
        
    }

    
}

export default Body