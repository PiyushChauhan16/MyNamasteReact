import React from 'react'
import {CDN_URL } from '../utilis/constants';
import { Link } from 'react-router-dom';

const ResturantCard = (props) => {
    let {name, cloudinaryImageId, cuisines, avgRating, areaName, id} = props.resData.info;

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
            <Link className = "link-style res-card-link" to = {"/restaurants/"+id}>
                <img src={CDN_URL+cloudinaryImageId} 
                    className="card-img-top" alt="..." style={{height: "200px", width: "300px", borderRadius: "20px", objectFit: "cover"}} />
                    <div className="card-body" style={{paddingLeft: "0px"}}>
                        <h5 className="card-title">{name}</h5>
                        <span className="rating">	&#9733;</span>
                        <span className="card-text" >{avgRating}</span>
                        <p className="card-text" style={{color: "grey", marginTop: "2px", marginBottom: "0px", fontWeight: "400"}}>{cuisineArr.join (", ")}</p>
                        <p className="card-text" style={{color: "grey", fontWeight: "400"}}>{areaName}</p>
                
                </div>
            </Link>
            
        </div>
        
    );
}


export default ResturantCard