import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function NewCharacter(){
    const [name, setName] = useState("")
    const [image, setImage] = useState(false)
    const [quote, setQuote] = useState("")

    const history = useHistory();
    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            character: { name, image, quote}
        }
        fetch("http://localhost:3001/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data.project)
        })
    }
    return (
        <section>
            <h3>Create Your Mean Girls Character!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="quote">Quote</label>
                <input type="text" id="quote" value={quote} onChange={e => setQuote(e.target.value)} />
            </form>
        </section>
    )
}

export default NewCharacter;