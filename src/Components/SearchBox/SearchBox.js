import React from 'react';

const SearchBox = ({search, placeholder}) => {
    return (
        <div className="search">
            <input onChange={search} placeholder={placeholder} type="text"></input>
        </div>
    );
}

export default SearchBox;