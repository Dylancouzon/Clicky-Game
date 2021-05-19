import React from 'react';
import Card from "./Card";
function CardDeck({order}) {
    return (
        <div className="card-deck" >
            {order.map(flag => (
                <Card
                    image={flag}
                />
            ))}
        </div>
    )
}

export default CardDeck;