import React from "react";

export default function Theme(props) {
    const theme = props.theme;
    return (
        <div className={theme.outher}>
            <div className={theme.inner}>
                <h3>Заголовок</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint aperiam iure! Consequatur sed vero repudiandae veritatis nemo. Voluptates veniam odio quam non aliquid consequuntur aliquam? Asperiores perspiciatis molestiae tempora!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo obcaecati quaerat fuga explicabo ab id cum at expedita corrupti in, mollitia magnam quisquam blanditiis eligendi odit quae, deleniti animi!</p>
            </div>
        </div>
    )
}