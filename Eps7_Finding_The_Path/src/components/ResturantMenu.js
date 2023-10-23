import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utilis/constants.js';

const ResturantMenu = () => {
    const {resId} = useParams ();
    const [resData, setResData] = useState ({});
    const [menuData, setMenuData] = useState ([]);
    async function fetchData (){
        const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7461247&lng=77.1160886&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await data.json ();

        console.log (jsonData);
        const reqResData = jsonData?.data?.cards[0].card.card.info;
        const reqMenuData = jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        console.log (reqMenuData);
        console.log (reqResData);
        setMenuData (reqMenuData);
        setResData (reqResData);
    }
    useEffect (()=>{
        fetchData ();
    }, [])

    if (resData !== undefined && resData.length != 0 && menuData !== undefined && menuData.length != 0){
        let {name, cuisines, areaName, sla, avgRating, totalRatingsString, costForTwoMessage}= resData;
        
        // console.log ("menu:",menuData);

        return (
            <div className='res-menu'>
                <div className='outer-div'>
                        <div className="res-menu-arrangement">
                            <div className='dish-detail'>
                                <h1 className='res-name'>{name}</h1>
                                <div className='description'>{cuisines.join (", ")}</div>
                                <div className='description'>{areaName + ", "+sla.lastMileTravelString}</div>
                        
                            </div>
                            <div className = "res-rating">
                                <div 
                                    style={
                                        {display:"flex", 
                                        fontSize:"18px",
                                        justifyContent:"center", 
                                        color:"green", 
                                        fontWeight:"bold"}
                                    }>
                                    <div>&#9733;{" "+avgRating}</div>
                                </div>
                                <div className="line" style={{margin:"5px"}}></div>
                                <div style={{fontSize:"13px", fontWeight:"500"}}>{totalRatingsString}</div>
                            </div>

                        </div>

                        <div className='dash-line'></div>

                        <div className='sla-arrangment'>
                            <div>
                                <span class="material-symbols-outlined">timelapse</span>
                            </div>
                            <div>
                                <span>{sla.slaString}</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined" style={{marginLeft: "10px"}}>currency_rupee</span>
                            </div>
                            <div>
                                <span>{costForTwoMessage.substring (1)}</span>
                            </div>
                        </div>

                        
                        
                        <div>
                            {
                            
                                menuData.map ((data)=>{
                                    const {name,price, description, imageId, defaultPrice} = data.card.info; 
                                    return (
                                        <div>
                                            <div className='res-menu-arrangement'>
                                                <div>
                                                    <div className='dish-heading'>{name}</div>
                                                    <div className='dish-price'>{price === undefined ? "Rs. "+defaultPrice/100 : "Rs. "+price/100}</div>
                                                    <div ><p className='description add-top-margin'>{description}</p></div>
                                        
                                                </div>
                                                <div style={{paddingLeft: "100px", position:"relative"}}>
                                                    <img src={MENU_URL+imageId} className="dish-img" ></img>
                                                    <button className='add-btn'>ADD</button>
                                                </div>
                                            </div>

                                            <div className='line'></div>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                            
                        
                    </div>
                </div>
                
        )
    }
    else{
        return (
            <>
            <div
            style={
                {
                    display:"flex",
                    justifyContent:"center",
                    alignContent: "center"
                }
            }
            >
                <div class="menu-loader"></div>
            </div>
                
            </>
            
        )
    }
    
}

export default ResturantMenu;