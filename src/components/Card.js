import React from 'react';

function Card({image}) {
    return (
        <div className="card" >
            <img className="card-img-top" src={"./images/flags/"+image+".gif"} alt="Flag Card" />
        </div>
    )
}

export default Card;