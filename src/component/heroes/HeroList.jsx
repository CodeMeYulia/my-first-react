import React from "react";
import heroes from './heroes.json'
import Hero from "./Hero";

function HeroList() {

    console.log(heroes, typeof heroes);
    let vDom = null;
    if (heroes) {
        vDom = heroes.map((item) => {
            return (
                <Hero key={item.id} name={item.name} universe={item.universe} alterego={item.alterego} occupation={item.occupation} friends={item.friends} superpowers={item.superpowers} url={item.url} info={item.info} />
            )
        })
    }

    return (
        <div className="cards">
            {vDom}
        </div>
    )
}
export default HeroList;