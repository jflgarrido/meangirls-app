import React from "react";

function CharacterCard({id, name, image, quote}) {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <h3>{quote}</h3>
        </div>
    )
}
export default CharacterCard;