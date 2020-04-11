import React from 'react';

const ChampionSearch = props => {
    return (
        <div className="search">
            <input onChange={props.search} placeholder="Find your Champion" type="text"></input>
        </div>
    );
}

export default ChampionSearch;