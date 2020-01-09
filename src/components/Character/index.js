import React from 'react';

function Character (props) {
    return (
        <div className="card">
            <img 
                className="card-img-top"
                src= {props.image}
                alt= {props.key}                
                id= {props.key}
                onClick= {() => props.clicked(props.key)}
            />
        </div>
    )
}

export default Character;