import React from "react";

function CharacterCard({id, name, image, quote, onRemoveCard}) {
    function handleDeleteClick(){
        fetch(`http://localhost:3001/characters/${id}`, {
            method: "DELETE",
        });
        onRemoveCard(id)
    }
    return(
        <div className="centered-text">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <h3>{quote}</h3>
            <button className="primary" onClick={handleDeleteClick}>DELETE</button>
        </div>
    )
}
export default CharacterCard;