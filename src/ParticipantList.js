import React from 'react';
import Participant from './Participant'

export default function(props){
    return (
        <div className='ParticipantList'>
            {props.participants.map(item => (
            <Participant key={item.id} name={item.name} avatar={item.avatar} 
            inSession={item.inSession} onStage={item.onStage} />))}
        </div>
    );
}

