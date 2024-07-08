import { useEffect } from 'react';
import { useRef } from 'react';
import cell from '../css/cell.module.css'

export default function Cell(props : 
	{
		val : number,
		fnc : (r : number, c : number, v : number) => void,
		upAr:(r : number, c : number) => void,
		downAr:(r : number, c : number) => void,
		leftAr:(r : number, c : number) => void,
		rightAr:(r : number, c : number) => void,
		i : number, 
		j : number, 
		s : number, 
		errsI : number[],
		errsJ : number[], 
		errsS : number[], 
		isClickable : boolean, 
		isSolved : boolean,
		currow : number,
		curcol : number
	}) : JSX.Element 
{
	let isBad : boolean = false;
	if (props.errsI.indexOf(props.i) !== -1) {
		isBad = true;
	}
	if (props.errsJ.indexOf(props.j) !== -1) {
		isBad = true;
	}
	if (props.errsS.indexOf(props.s) !== -1) {
		isBad = true;
	}
	const onKeyPressHandler = (event : any) => {
		if (/[1-9]/.test(event.key)) {
			let val: number = parseInt(event.key)
			props.fnc(props.i, props.j, val)
        }
		else if (event.key === 'Backspace') {
			props.fnc(props.i, props.j, -1)
		}
		else if (event.key === 'ArrowUp') {
			props.upAr(props.i,props.j)
		} 
		else if (event.key === 'ArrowDown') {
			props.downAr(props.i,props.j)
		}
		else if (event.key === 'ArrowLeft') {
			props.leftAr(props.i,props.j)
		} 
		else if (event.key === 'ArrowRight') {
			props.rightAr(props.i,props.j)
		}
	}
	const onKeyPressHandler2 = (event : any) => {
		if (event.key === 'ArrowUp') {
			props.upAr(props.i,props.j)
		} 
		else if (event.key === 'ArrowDown') {
			props.downAr(props.i,props.j)
		}
		else if (event.key === 'ArrowLeft') {
			props.leftAr(props.i,props.j)
		} 
		else if (event.key === 'ArrowRight') {
			props.rightAr(props.i,props.j)
		}
	}
	const div = useRef<HTMLDivElement>(null);
	const divTag = 
	<div
		ref={div}
		onKeyDown={props.isClickable ? onKeyPressHandler: onKeyPressHandler2} 
		tabIndex={0}
		className={ cell.cell + " " + `${
					props.isSolved ? cell.squareSolved : 
				 	!props.isClickable && isBad ? cell.squareGoodBut : 
					!props.isClickable && !isBad ? cell.squareGood : 
					!isBad ? cell.default : cell.squareBad}`}>
					{props.val !== -1 ? `${props.val}` : ""}
	</div>
	useEffect(()=>{
		if (props.i == props.currow && props.j == props.curcol) {
			div?.current?.focus();
		}		
	},
	[props.currow, props.curcol])
	return (
		divTag
	)

}