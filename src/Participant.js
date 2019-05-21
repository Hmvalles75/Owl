import React from 'react';

export default function(props){
    if (props.onStage === true){
        return(
            <div className='Participant'>
                <h3>{props.name}</h3>
                <img src={props.avatar} alt='user avatar'/>
                <p className='active'>onStage</p>
            </div>
        )
    }
    else if (props.onStage === false && props.inSession === true){
        return (
            <div className='Participant'>
                <h3>{props.name}</h3>
                <img src={props.avatar} alt='user avatar'/>
                <p className='active'>inSession</p>
            </div>
        )
    }
    else{
        return(
            <div className='Participant'>
                <h3>{props.name}</h3>
                <img src={props.avatar} alt='user avatar' />
                <p className='Left_Session'>Left Session</p>
            </div>
        )
    }
}