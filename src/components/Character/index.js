import React from 'react';

function Character (props) {
    return (
        <div className="card">
            <img 
                className="card-img-top"
                src= {props.image}
                alt= {props.key}
                key= {props.key}
                onClick= {() => props.clicked(props.name)}
                // id= {props.id}
                // key= {props.id}
            />
        </div>
    )
}

export default Character;