import React, { useEffect, useState } from 'react';
import ChampionSearch from './../SearchBox/SearchBox';
import ItemSingle from './ItemSingle';
import SearchBox from './../SearchBox/SearchBox';

const ItemsGallery = props => {

    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([]);


    useEffect(() => {
        
        async function getItems() {
            try {
                const response = await fetch('https://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/item.json');
                const json = await response.json();
                const items = Object.values(json.data);
                setItems(items);
                setDefaultItems(items);
            } catch (error) {
                console.log(error);
            }
        }
        
        getItems();

    }, []);


    function searchHandler(e) {
        const value = e.target.value;
        if (value === ''){
            setItems(defaultItems);
        }

        let filteredItems = defaultItems.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        setItems(filteredItems);
    }



    return (
        <div className="items-gallery">
            <h2>Items Gallery</h2>
            <SearchBox placeholder="Search Items" search={searchHandler} />
            { items.map( item => {
                return (<ItemSingle name={item.name} image={item.image.full} key={item.image.full} desc={item.plaintext}/>)
            })
            }
        </div>
    );

}

export default ItemsGallery;
