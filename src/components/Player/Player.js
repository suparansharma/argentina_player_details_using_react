import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    
        const {id,name,club,Position,gender,salary,image}=props.player;
        const addMember = props.addMember;
        const [clubName,setClubName]= useState();
        const showClubName =() =>setClubName(club);
    return (
        <div className="PLAYER">
            <div className="PLAYER-IMG">
            <img src={image} alt="" />
            </div>

            <div>
            <p><small>ID:{id}</small></p>
            <h3 className="PLAYER-NAME">{name}</h3>
            <p><small>Position:{Position}</small></p>
            <p><small>gender:{gender}</small></p>
            {/* <p><small>club:{club}</small></p> */}
            <p><small>salary: {salary} </small></p>
            <p><small>club:{clubName}</small></p>
            <button
             className="main-button"
             onClick={()=>props.handleAddPlayer(props.player)}
             >
            Show</button>

             <button onClick={showClubName}> Show</button>

             <button onClick={()=>addMember(name)} > <FontAwesomeIcon icon={faUserPlus} /> Add member</button>

            </div>
           
        </div>
    );
};

export default Player;