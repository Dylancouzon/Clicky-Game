import React from 'react';

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid" style={{marginTop:50}}>
            <div className="container">
                <h1 className="display-4">Flag Game</h1>
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Header;