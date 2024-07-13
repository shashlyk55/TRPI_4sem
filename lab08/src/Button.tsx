import React, {useState} from 'react';
import './App.css';

function Button(props: {title:string, callBackfunc:any, isDisabled?:boolean}) {
    return <button id='btn'
                   onClick={props.callBackfunc}
                   disabled={props.isDisabled}>{props.title}</button>
}

export default Button