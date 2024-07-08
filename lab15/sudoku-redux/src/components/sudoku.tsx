import Cell from '../containers/CellR';
import { Field } from '../reducers/root';
import sudokuContainer from '../css/sudoku_container.module.css'
import buttonstyle from '../css/button.module.css'
import {useHotkeys} from "react-hotkeys-hook";
import rowstyle from '../css/row.module.css';

export default function Sudoku(props : 
{ 
    field : Field, 
    fieldConst : Field, 
    help : () => void, 
    new : () => void, 
    solve : () => void,  
}) 
{
    const renderCell = ( val : number, i : number, j : number) : JSX.Element => {
        let squareY = Math.floor(i / 3);
        let squareX = Math.floor(j / 3);
        let square : number = squareY * 3 + squareX;
            return (
            <Cell val={val} i={i} j={j} s={square} isClickable={props.fieldConst[i][j] === -1 ? true : false}/>
        )
    }
    const renderRow = ( row : number[], ip : number) : JSX.Element => {
        let rows : JSX.Element[] = [];
        for (let i = 0; i < 9; i++) {
            rows.push(renderCell(row[i], ip, i ));
        };
        return <tr 
        className={rowstyle.row}>
            {rows}
        </tr>;
    }
    const renderGrid = ( field : Field) : JSX.Element[] => {
        let buff : JSX.Element[] = [];
        for (let i = 0; i < 9; i++) {
            buff.push(renderRow(field[i], i));
        }
        return buff;
    }
    useHotkeys('n', () => props.new());
    useHotkeys('h', () => props.help());
    useHotkeys('c', () => props.solve());

    return (
    <>
        <table className={sudokuContainer.grid}>
            {renderGrid(props.field)}
        </table>
        <div className={buttonstyle.btns}>
            <button className={buttonstyle.btn} onClick={props.new}>Новая игра</button>
            <button className={buttonstyle.btn} onClick={props.help}>Подсказка</button>
            <button className={buttonstyle.btn} onClick={props.solve}>Проверить</button>
        </div>
    </>
    )
}