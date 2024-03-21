import React from "react";

const Hero = ({ name, universe, alterego, occupation, friends, superpowers, url, info }) => {
    return (
        <div className="item">
            <div className="img__block">
                <h2 className="card-title">{name}</h2>
                <img src={url} alt={name} />
            </div>
            <div className="info__block">
                <div className="character">
                    <p className="universe"> <span className="h3">Universe:</span> {universe}</p>
                    <p className="alterego"><span className="h3">Alterego:</span>  {alterego}</p>
                    <p className="occupation"><span className="h3"> Occupation:</span> {occupation}</p>
                    <p className="friends"><span className="h3">Friends:</span>  {friends}</p>
                    <p className="superpowers"><span className="h3">Superpowers:</span>  {superpowers}</p>
                </div>
                <p className="info">{info}</p>
            </div>
        </div>
    );
}

export default Hero;