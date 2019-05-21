import React from 'react';
import Chat from './Chat';

export default function(props) {
  return (
    <div className='ChatList'>
            {props.chatEvents.map(item => (
            <Chat key={item.participantId} type={item.type} message={item.message} time={item.time} />))}
    </div>
  )
}