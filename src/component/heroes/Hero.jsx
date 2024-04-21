import React from "react";
import style from './Hero.module.css';

const Hero = (props) => {
    const { name, universe, alterego, occupation, friends, superpowers, url, info } = props;

    return (
        <div className={style.item}>
            <div>
                <h2 className={style.card__title}>{name}</h2>
                <img src={url} alt={name} />
            </div>
            <div className={style.info__block}>
                <div className={style.character}>
                    <p className={style.universe}> <span className="h3">Universe:</span> {universe}</p>
                    <p className={style.alterego}><span className="h3">Alterego:</span>  {alterego}</p>
                    <p className={style.occupation}><span className="h3"> Occupation:</span> {occupation}</p>
                    <p className={style.friends}><span className="h3">Friends:</span>  {friends}</p>
                    <p className={style.superpowers}><span className="h3">Superpowers:</span>  {superpowers}</p>
                </div>
                <p className={style.info}>{info}</p>
            </div>
        </div>
    );
}

export default Hero;