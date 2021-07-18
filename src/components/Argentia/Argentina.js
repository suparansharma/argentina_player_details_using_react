import React from 'react';
import { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Player from '../Player/Player';
import './Argentina.css'
const Argentina = () => {
    const [players,setPlayer]=useState([]);
    const [detail,setDetail] = useState([]);

    const handleAddPlayer = (player)=>{
        
        const newDetail = [...detail,player];
        setDetail(newDetail);

    }
    useEffect(()=>{
        fetch('https://mocki.io/v1/afb1df7f-718e-42f5-aae9-56ae04adf8d4')
        .then(res=>res.json())
        .then(data=>setPlayer(data))
        .catch(error=>console.log(error))
      },[])
  
    return (
        <div className= "Team-Container">
        <div className="Player-Container">

        

            {

                
                players.map(pd=>
                     <Player
                     handleAddPlayer = { handleAddPlayer}
                     player={pd}>

                     </Player>)
            }
        

        </div>
        <div className="Details-Container">
            {<Detail detail={detail}></Detail>}
        
        </div>
        
        
       
        
    </div>
    );
};

export default Argentina;