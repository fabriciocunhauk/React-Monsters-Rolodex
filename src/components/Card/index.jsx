import React from 'react';
import './styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`http://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}