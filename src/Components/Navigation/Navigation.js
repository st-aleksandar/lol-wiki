import React from 'react';
import { Link } from 'react-router-dom';


const Navigation  = () => {

    return (
        <ul className="navigation">
            <li><Link to="/">Champions</Link></li>
            <li><Link to="/items">Items</Link></li>
        </ul>
    );
};

export default Navigation;