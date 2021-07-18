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
            <p><small>ID:{id}</small></p>
            <br />
            <h3 className="PLAYER-NAME">{name}</h3>
            <br />
           
            <p><small>club:{club}</small></p>
            <p><small>gender:{gender}</small></p>
            <p><small>club:{club}</small></p>
            <p><small>salary: {salary} </small></p>
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