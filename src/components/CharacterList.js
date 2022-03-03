import React, {useEffect} from "react"
import CharacterCard from "./CharacterCard"

function CharacterList({characters, setCharacters}) {
    
    useEffect(() => {
        fetch("http://localhost:3001/characters")
        .then(r => r.json())
        .then(data => setCharacters(data))
    }, [])

    function handleRemoveCard(id){
        const newList = characters.filter((card) => card.id !== id);
        setCharacters(newList);
    }

    const characterCards = characters.map((character) => {
        console.log(character)
        return <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            quote={character.quote}
            onRemoveCard={handleRemoveCard}
        />
        
    });
    
    return (
        <>
            <h1 className="centered-text">🔥 🔥 🔥 🔥 🔥</h1>
            <div className="character-div" >{characterCards}</div>
        </>
    )
    
}
export default CharacterList;