import React, { useState } from "react";

function MyForm() {
    const [username, setUsername] = useState("");
    const handleChange = event => {
        console.log(event.target);
        setUsername(event.target.value);
    }
    console.log(handleChange)
    let header;
    if (username) {
        header = <h1>Hello {username}</h1>;
    } else header = "";
    return (
        <div>
            <form>
                {header}
                <p>Enter your name:</p>
                <input type="text" value={username} onChange={handleChange} />
            </form>
        </div>
    );
}

export default MyForm;