import React from 'react';
import './cardList.css';

export const CardList = props => {
    return (
        <div className='card-list'>
            {props.children}
        </div>
    )
}