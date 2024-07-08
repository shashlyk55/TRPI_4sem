import './srcString.css'
import React from "react";

function SrcString(props:{value: string,onChangeValue: (val: string)=>void, avalaible: boolean, onChangeCheckbox: (val:boolean)=>void}): JSX.Element{
    return(
        <div>
            <input type="text"
                   placeholder="Поиск"
                   value={props.value}
                   onChange={(e)=>props.onChangeValue(e.target.value)}/>
            <div>
                <input type="checkbox"
                       checked={props.avalaible}
                       onChange={(e) => props.onChangeCheckbox(e.target.checked)}/>
                <p>isAvalaible</p>
            </div>

        </div>
    );
}

export default SrcString