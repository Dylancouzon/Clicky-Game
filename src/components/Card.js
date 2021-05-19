import React from 'react';

function Card({image, flagClick}) {
    //Todo: Add key && Unique ID, bootstrap styling
    return (
        <div className="card" >
            <img className="card-img-top" src={"./images/flags/"+image+".gif"} onClick={() => flagClick(image)} alt="Flag Card" />
        </div>
    )
}

export default Card;