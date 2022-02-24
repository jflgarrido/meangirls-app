import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import CharacterList from "./CharacterList"
import NewCharacter from "./NewCharacter"

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/characters">
                    <CharacterList />
                </Route>
                <Route exact path="/characters/new">
                    <NewCharacter />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                    <h1>Babe, you're lost!</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default App;