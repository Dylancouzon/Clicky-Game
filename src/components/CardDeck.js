import React from 'react';
import Card from "./Card";
function CardDeck({order, flagClick, style}) {
    return (
        <div className={"card-deck animate__animated " + style} >
            {order.map(flag => (
                <Card
                    image={flag}
                    flagClick={flagClick}
                />
            ))}
        </div>
    )
}

export default CardDeck;