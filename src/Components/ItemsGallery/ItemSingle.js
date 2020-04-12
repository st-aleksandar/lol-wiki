import React from 'react';

const ItemSingle = ({name, image, desc }) => {

    return (
        <div className="c-item">
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.7.1/img/item/${image}`} alt={name} />
            <div className="c-item__desc">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );

};

export default ItemSingle;