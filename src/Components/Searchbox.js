import React from "react";

const Searchbox = ({onsearch}) => {
    return (
        <div className="tc pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type='search' 
                placeholder="Enter Name"
                onChange={onsearch}
            />
        </div>
    );
}

export default Searchbox;