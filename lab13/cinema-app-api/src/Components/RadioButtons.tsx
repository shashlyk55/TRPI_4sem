import React from "react";
import './RadioButton.module.css'
export function RadioButtons(props:{selectedValue:string, handleChange:(e:any)=>void}) {
    return (
        <form>
            <label>All<input type="radio" value="all" checked={props.selectedValue === "all"} onChange={props.handleChange}/></label>
            <label>Movies<input type="radio" value="movies" checked={props.selectedValue === "movies"} onChange={props.handleChange}/></label>
            <label>Series<input type="radio" value="series" checked={props.selectedValue === "series"} onChange={props.handleChange}/></label>
        </form>
    );
}