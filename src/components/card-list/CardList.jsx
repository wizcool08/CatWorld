import React from 'react';
import Card from '../card/Card'
import './card-list.styles.css';

const CardList = ({cats}) => {
    return (
        <div className='card-list'>
            {cats.map((cat => {
                return <Card key={cat.id} id={cat.id} name={cat.name} email={cat.email}/>
            }))}        
        </div>
    );
};

export default CardList;