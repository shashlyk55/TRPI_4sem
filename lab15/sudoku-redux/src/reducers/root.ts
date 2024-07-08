import { Action } from "../actions/index";
import { GridGenerator } from "../utils/GridGenerator";
import insertInField from "../utils/insertInField";
import copy from "../utils/copy";
import check from "../utils/checkers";
import { help } from "../utils/insertInField";

export type Field = number[][]

export type State = {
    field : number[][],
    fieldConst : number[][],
    fielfilled : number[][],
    isSolved : boolean,
    errsI : number[],
    errsJ : number[],
    errsS : number[],
    currow : number,
    curcol : number,
}

let Sudoku : GridGenerator = new GridGenerator();
let FieldFilled : number[][] = Sudoku.getfieldfilled();
let FieldConst : number[][] = Sudoku.getfield();

const initialState : State = {
    field : FieldConst,
    fieldConst : FieldConst,
    fielfilled : FieldFilled,
    isSolved : false,
    errsI : [],
    errsJ : [],
    errsS : [],
    currow : 0,
    curcol : 0,
}

export default function root(state : State = initialState, action : Action) : State {
    switch (action.type) {
        case "INPUT":
            return {
                ...state,
                field : insertInField(state.field, action.row, action.column, action.value),
            }
        case "SOLVE":
            let {errs, isFull}  = check(state.field);
            if (errs[0].length == 0 && errs[1].length == 0 && errs[2].length == 0) {
                return {
                   ...state,
                   errsI : [],
                   errsJ : [],
                   errsS : [],
                   isSolved : isFull,
                }
            }
            return {
                ...state,
                errsI : errs[0],
                errsJ : errs[1],
                errsS : errs[2],
                isSolved : false,
            }
        case "RESET":
            Sudoku = new GridGenerator();
            let listNew : number[][] = Sudoku.getfield();
            let listNewFirst : number[][] = Sudoku.getfieldfilled();
            return {
               ...state,
                field : copy(listNew),
                fieldConst : copy(listNew),
                fielfilled : copy(listNewFirst),
                isSolved : false,
                errsI : [],
                errsJ : [],
                errsS : [],
            }
        case "HELP":
            let listWithTip = help(state.field, state.fielfilled);
            return {
                ...state,
                field : listWithTip,
            }
        case "ARROWUP":
            {
            const crow = action.row;
            const ccol = action.column;
      
            if (crow  !== undefined && ccol!== undefined && ccol>=0 && crow >= 0) {
              let newRow;
              let newcol;
              if(crow== 0 && ccol == 0){
                newcol= 8;
                newRow= 8;
              }
              else if(crow== 0){
                newcol= ccol-1;
                newRow=8;
              }
              else{
               newRow = crow - 1;
               newcol = ccol;
              }
      
              return {
                ...state,
                currow : newRow,
                curcol : newcol
              };
            }
            else{
                return state;         
            }
        }
        case "ARROWDOWN":
            {
            const crow = action.row;
            const ccol = action.column;
      
            if (crow  !== undefined && ccol!== undefined && ccol<9 && crow < 9) {
                let newRow
                let newcol
              if(crow== 8 && ccol == 8){
                newcol= 0;
                newRow= 0;
              }
              else if(crow== 8){
                newcol= ccol+1;
                newRow=0;
              }
              else{
               newRow = crow + 1;
               newcol = ccol;
              }
      
              return {
                ...state,
                currow : newRow,
                curcol : newcol
              };
            }
            else{
                return state;         
            }
        }
        case "ARROWLEFT":
            {
            const crow = action.row;
            const ccol = action.column;
      
            if (crow  !== undefined && ccol!== undefined && ccol<9 && crow < 9) {
                let newRow
                let newcol
              if(crow== 0 && ccol == 0){
                newcol= 8;
                newRow= 8;
              }
              else if(ccol== 0){
                newcol= 8;
                newRow=crow - 1;
              }
              else{
               newRow = crow;
               newcol = ccol - 1;
              }
      
              return {
                ...state,
                currow : newRow,
                curcol : newcol
              };
            }
            else{
                return state;         
            }
        }
        case "ARROWRIGHT":
            {
            const crow = action.row;
            const ccol = action.column;
      
            if (crow  !== undefined && ccol!== undefined && ccol<9 && crow < 9) {
                let newRow
                let newcol
              if(crow== 8 && ccol == 8){
                newcol= 0;
                newRow= 0;
              }
              else if(ccol== 8){
                newcol= 0;
                newRow=crow + 1;
              }
              else{
               newRow = crow;
               newcol = ccol + 1;
              }
      
              return {
                ...state,
                currow : newRow,
                curcol : newcol
              };
            }
            else{
                return state;         
            }
        }
        
        default:
            return state;
    }
}