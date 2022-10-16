import React, { useState } from 'react'

function Form() {
    const [state, setState] = useState({
        mycar: 'Volvo'
    })
    return (
        <form>
            <select value={state.mycar}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    );
}
export default Form;