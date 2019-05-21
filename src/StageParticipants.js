import React from 'react';

export default function(props){
    if (props.onStage === true){
        return(
            <div className='stageParticipant'>
                <h3>{props.name}</h3>
                <img src={props.avatar} alt='user avatar'/>
            </div>
        )
    }
}