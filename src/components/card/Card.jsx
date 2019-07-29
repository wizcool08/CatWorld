import React from 'react';
import './card.styles.css';

const Card = ({id,name,email}) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set4&size=150x200`} alt='kittens'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;