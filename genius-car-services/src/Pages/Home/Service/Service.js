import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    // store ace amn data onno page take call kora anner jonno (distracture) korlam
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        // console.log('click');
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button> 
        </div>
    );
};

export default Service;