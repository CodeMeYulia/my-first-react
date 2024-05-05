import React from "react";

function Button(props) {
    const { sayHi } = props;

    return (
        <button type="button" onClick={sayHi}>
            sayHi
        </button>
    )
}
export default Button;