import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/characters">Characters</NavLink>
            <NavLink exact to="/characters/new">Create New Character!</NavLink>
        </nav>
    );
}
export default NavBar;