import React from 'react';
import style from './Form.module.css';

function Form() {

    const [state, setState] = React.useState({
        firstName: "",
        lastName: ""
    });

    const handleChange = (e) => {
        let value = e.target.value.toUpperCase();
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    return (
        <>
            <form>
                <label>
                    First name
                    <input
                        type="text"
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last name
                    <input
                        type="text"
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
                <p>
                    {state.firstName} {state.lastName}
                </p>
            </form>

        </>
    )
}
export default Form;