import React from "react";

function CharacterCard({id, name, image, quote, onRemoveCard}) {
    function handleDeleteClick(){
        fetch(`http://localhost:3001/characters/${id}`, {
            method: "DELETE",
        })
        .then(() => onRemoveCard(id))
    }
    return(
        <div className="character-card">
            <h3>{name}</h3>
            <img src={image} alt={name} className="cardImage" />
            <h3>{quote}</h3>
            <button className="primary" onClick={handleDeleteClick}>DELETE</button>
        </div>
    )
}
export default CharacterCard;