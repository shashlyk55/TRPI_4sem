import { Field } from "../reducers/root"
import copy from "./copy";

export  default function insertInField(field : Field, row? : number, column? : number, value? : number) : Field {
    if (row !== undefined && column !== undefined && value !== undefined) {
        let fieldCopy = copy(field);
        fieldCopy[row][column] = value;
        return fieldCopy;
    }
    throw new Error("капец");
}

export  function help(field : Field, fielfilled : Field) : Field {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (field[i][j] !== fielfilled[i][j]) {
                return insertInField(field, i, j, fielfilled[i][j])
            }
        }
    }
    return field;
}