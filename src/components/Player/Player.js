import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    
        const {id,name,club,Position,gender,salary,image}=props.player;
    return (
        <div className="PRODUCT">
            <div>
            <img src={image} alt="" />
            </div>

            <div>
            <h3 className="PRODUCT-NAME">{name}</h3>
            <br />
            <p><small>BY:{seller}</small></p>
            <br />
            <p><small>${price}</small></p>
            <p><small>Available {stock} Pice - Order soon</small></p>
            <button
             className="main-button"
             onClick={()=>props.handleAddPlayer(props.player)}
             >
             <FontAwesomeIcon icon={faUserPlus} />Add people</button>
            </div>
           
        </div>
    );
};

export default Player;