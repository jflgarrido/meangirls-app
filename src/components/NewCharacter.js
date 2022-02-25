import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function NewCharacter({characters, setCharacters}){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [quote, setQuote] = useState("")

    function addCharacter(){

    }

    const history = useHistory();
    function handleSubmit(e){
        e.preventDefault()
        
        
        fetch("http://localhost:3001/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                image: image,
                quote: quote,
            })
        })
        .then(r => r.json())
        .then(data => setCharacters(data))
    
    }
    return (
        <section>
            <h3>Create Your Mean Girls Character!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="name">Image URL</label>
                <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
                <label htmlFor="quote">Quote</label>
                <input type="text" id="quote" value={quote} onChange={e => setQuote(e.target.value)} />
                <button type="submit">Add me!</button>
            </form>
        </section>
    )
}

export default NewCharacter;