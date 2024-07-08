export type Action = {
    type: string;
    row? : number;
    column? : number;
    value? : number;
    num? : number;
}

export function input(row : number, column : number, value : number) : Action {
    return {
        type: "INPUT",
        row: row,
        column: column,
        value: value
    }
}

export function solve() : Action {
    return {
        type: "SOLVE"
    }
}

export function reset() : Action {
    return {
        type: "RESET"
    }
}

export function help() : Action {
    return {
        type: "HELP"
    }
}

export function up(row : number, column : number) : Action {
    return {
        type: "ARROWUP",
        row: row,
        column: column,
    }
}

export function down(row : number, column : number) : Action {
    return {
        type: "ARROWDOWN",
        row: row,
        column: column,
    }
}

export function left(row : number, column : number) : Action {
    return {
        type: "ARROWLEFT",
        row: row,
        column: column,
    }
}

export function right(row : number, column : number) : Action {
    return {
        type: "ARROWRIGHT",
        row: row,
        column: column,
    }
}
