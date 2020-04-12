import React from 'react';


const Skin = ({id, skin}) => {
    const skinUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${skin.num}.jpg`;
    return (
        <div className="champion-skin">
            <img src={skinUrl} alt={id} title={skin.name} />
            <div className="champion-skin__name">{skin.name}</div>
        </div>
    );
};

export default Skin;