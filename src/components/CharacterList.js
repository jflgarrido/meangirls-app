import React, {useEffect, useState} from "react"
import CharacterCard from "./CharacterCard"

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/characters")
        .then(r => r.json())
        .then(data => setCharacters(data))
    }, [])

    const characterCards = characters.map((character) => {
        console.log(character)
        return <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            quote={character.quote}
        />
        
    });
    
    return (
        <section>
            <h2>Characters</h2>
            <div>{characterCards}</div>
        </section>
    )
    
}
export default CharacterList;