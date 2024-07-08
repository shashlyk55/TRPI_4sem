import { Field } from "../reducers/root";

function checkRow(field : Field) : number[] {
    let errsI : number[] = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (field[i].indexOf(field[i][j]) !== field[i].lastIndexOf(field[i][j]) && field[i][j] !== -1) {
                errsI.push(i);
            }
        }
    }
    return errsI;
}
function checkCol(field : Field) : number[] {
    let errsJ : number[] = [];
    for (let i = 0; i < 9; i++) {
        let buff : number[] = [];
        for (let j = 0; j < 9; j++) {
            buff.push(field[j][i]);
        }
        for (let j = 0; j < buff.length; j++) {
            if (buff.indexOf(buff[j]) !== buff.lastIndexOf(buff[j]) && buff[j] !== -1) {
                errsJ.push(i);
            }
        }
    }
    return errsJ;
}
function checkSq(field : Field) : number[] {
    let errsS : number[] = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let buff : number[] = [];
            for (let k = i * 3; k < i * 3 + 3; k++) {
                buff.push(...field[k].slice(j * 3, j * 3 + 3));//квадрат 3+3+3
            }
            for (let k = 0; k < 9; k++) {
                if (buff.indexOf(buff[k]) !== buff.lastIndexOf(buff[k]) && buff[k] !== -1) {
                    errsS.push(i * 3 + j);
                }
            }
        }
    }
    return errsS;
}
export default function checkfield(field : Field) : {errs: number[][], isFull : boolean} {
    let errsI : number[] = [];
    let errsJ : number[] = [];
    let errsS : number[] = [];
    let isFull : boolean = true;
    errsI = checkRow(field);
    errsJ = checkCol(field);
    errsS = checkSq(field);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (field[i][j] === -1) {
                isFull = false;
                break;
            }
        }
    }
    return {errs: [errsI, errsJ, errsS], isFull};
}