import copy from "./copy";

export class GridGenerator {
    fielddilled: number[][];
    grid: number[][];
    n: number;

    getfieldfilled(): number[][] {
        return this.fielddilled;
    }

    getfield(): number[][] {
        return this.grid;
    }
    get corr(){
        return Math.floor(Math.random() * 3);
    }

    constructor() {
        this.n = 9;
        this.grid = Array(this.n).fill(null).map(() => Array(this.n).fill(0));
        this.initGrid();
        this.shuffle();
        this.fielddilled = copy(this.grid);
        this.removeCells(40);//64-одно решение
    }

    initGrid() {
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                this.grid[i][j] = (3 * i + Math.floor(i / 3) + j) % 9 + 1;
            }
        }
    }

    removeCells(emptycnt: number): void {
        let removed = 0;
        while (removed < emptycnt) {
            let i = Math.floor(Math.random() * 9);
            let j = Math.floor(Math.random() * 9);
            if(this.grid[i][j] !== -1){
            this.grid[i][j] = -1;
            removed++;
            }
        }
    }


    shuffle(): void {
        this.transpos();
        for (let it = 0; it < 40; it++) {
            let idx = Math.floor(Math.random() * 4);
            for (let rep = 0; rep < 4; rep++) {
                if (idx === 0) {
                    this.swapRows();
                } else if (idx === 1) {
                    this.swapCols();
                } else if (idx === 2) {
                    this.swapBoxH();
                } else {
                    this.swapBoxV();
                }
            }
        }
        for (let it = 0; it < 6; it++) {
            this.swapRows();
        }
    }

    transpos(): void {
        for (let i = 0; i < this.n; i++) {
            for (let j = i + 1; j < this.n; j++) {
                [this.grid[i][j], this.grid[j][i]] = [this.grid[j][i], this.grid[i][j]];
            }
        }
    }

    swapRows(): void {
        let d = this.corr;
        let x = 3 * d + this.corr;
        let y = 3 * d + this.corr;
        while (x === y) {
            y = 3 * d + this.corr;
        }
        [this.grid[x], this.grid[y]] = [this.grid[y], this.grid[x]];
    }

    swapCols(): void {
        this.transpos();
        this.swapRows();
        this.transpos();
    }

    swapBoxH(): void {
        let x = 3 * this.corr;
        let y = 3 * this.corr;
        while (x === y) {
            y = 3 * this.corr;
        }
        for (let i = 0; i < 3; i++) {
            [this.grid[x + i], this.grid[y + i]] = [this.grid[y + i], this.grid[x + i]];
        }
    }

    swapBoxV(): void {
        this.transpos();
        this.swapBoxH();
        this.transpos();
    }
}