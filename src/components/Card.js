import React from 'react';

function Card({image, flagClick}) {
    //Todo: Add key && Unique ID, bootstrap styling
    return (
      
            <img className="max-vh-10 card" src={"./images/flags/"+image+".gif"} style={{maxWidth: 300} }onClick={() => flagClick(image)} alt={"Flag Card "+ image} key={image} />
      
    )
}

export default Card;