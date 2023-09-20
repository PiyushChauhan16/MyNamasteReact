import React from 'react'

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
export default Search