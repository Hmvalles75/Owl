import React from 'react';
import StageParticipants from './StageParticipants';

export default function(props){
  return (
      <div className='stageList'>
          {props.participants.map(item => (
          <StageParticipant key={item.id} name={item.name} avatar={item.avatar} 
          inSession={item.inSession} onStage={item.onStage} />))}
      </div>
  );
}
