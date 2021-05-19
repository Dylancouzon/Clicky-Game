import React from 'react';
import Card from "./Card";
function CardDeck({order, flagClick}) {
    return (
        <div className="card-deck" >
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