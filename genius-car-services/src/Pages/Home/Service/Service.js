import React from 'react';
import './Service.css';

const Service = ({service}) => {
    // store ace amn data onno page take call kora anner jonno (distracture) korlam
    const {name, img, description, price} = service;
    return (
        <div className='service'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book: {name}</button> 
        </div>
    );
};

export default Service;