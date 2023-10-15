import React, { useState } from 'react'

const Search = ({resList, setResList, setNoResult}) => {
    
    let [input, setInput] = useState ("");
    
    return (
        <div className="search-bar">
            <div className="search-bar-main-div">
                <input className="search-input"
                type = "text" 
                value = {input} 
                onChange={(e)=>{
                    let newResList = resList.filter ((data)=>{
                        let resName = data.info.name;
                        let substr = e.target.value;

                        return resName.toLowerCase().includes (substr.toLowerCase());
                    })
                    if (newResList.length === 0) setNoResult (1);
                    else setNoResult (0);

                    setResList (newResList);
                    setInput (e.target.value)
                }}
                placeholder="search for resturants, food ..."></input>
                <span className="material-symbols-outlined search-btn">search</span>

            </div>
        </div>
    )

}
export default Search