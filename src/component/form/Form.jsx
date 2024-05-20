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
                <label className={style.name}>
                    First name
                    <input className={style.name}
                        type="text"
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label className={style.name}>
                    Last name
                    <input className={style.name}
                        type="text"
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
                <p className={style.username}>
                    {state.firstName} {state.lastName}
                </p>
            </form>

        </>
    )
}
export default Form;