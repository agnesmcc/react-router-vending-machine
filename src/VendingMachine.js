import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
    <div>
        <h1>Vending Machine</h1>

        <div><Link to="/soda">Soda</Link></div>
        <div><Link to="/chips">Chips</Link></div>
        <div><Link to="/icecream">Ice Cream</Link></div>
    </div>

    );
};

export default VendingMachine;
