import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink className="NavLink" exact to="/">Home</NavLink>
            <NavLink className="NavLink" exact to="/characters">Characters</NavLink>
            <NavLink className="NavLink" exact to="/characters/new">Create New Character!</NavLink>
        </nav>
    );
}
export default NavBar;