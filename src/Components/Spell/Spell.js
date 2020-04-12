import React from 'react';

const Spell = ({spell, passive}) => {

    const src = passive ? `http://ddragon.leagueoflegends.com/cdn/10.7.1/img/passive/${spell.image.full}` : `http://ddragon.leagueoflegends.com/cdn/10.7.1/img/spell/${spell.image.full}`;

    return (
        <div className="spell">
        <img src={src}></img>
        <div className="spell-text">
            <div className="spell-name">{spell.name}</div>
            <div dangerouslySetInnerHTML={{__html: spell.description}} className="spell-desc"></div>
        </div>
        </div>
    );
}

export default Spell;