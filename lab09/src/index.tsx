import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SudokuBoard from "./SudokuBoard";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let startField: (number|'')[][] = [
    /*[1,2,'',4,'',6,'',8,''],
    [4,'',6,'',8,'',1,'',3],
    ['',8,'',1,'',3,'',5,''],
    [2,'',4,'',6,'',8,'',1],
    ['',6,'',8,'',1,'',3,''],
    [8,'',1,'',3,'',5,'',7],
    ['',4,'',6,'',8,'',1,''],
    [6,'',8,'',1,'',3,'',5],
    ['',1,'',3,'',5,'',7,'']*/
    [1,2,3,4,5,6,7,8,9],
    ['',5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8]
]

let field: (number|'')[][] = [
    [1,2,3,4,5,6,7,8,9],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8]
]

root.render(
  <React.StrictMode>
    <SudokuBoard  fullBoard={field} initialBoard={startField}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
