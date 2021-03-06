import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink className="NavLink" exact to="/">Home</NavLink>
            <NavLink className="NavLink" exact to="/characters">The Burn Book</NavLink>
            <NavLink className="NavLink" exact to="/characters/new">New Entry</NavLink>
        </nav>
    );
}
export default NavBar;