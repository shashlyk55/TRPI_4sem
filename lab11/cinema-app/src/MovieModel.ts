export class MovieModel{
    static id: number
    name: string;
    rate: string;
    isAvalaible: boolean

    constructor(name: string, rate: string, avalaible: boolean) {
        this.name = name
        this.rate = rate
        this.isAvalaible = avalaible
        MovieModel.id++;
    }

}