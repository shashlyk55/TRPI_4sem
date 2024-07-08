export class Movie{
    name: string
    year: number
    category: string
    path: string

    constructor(name: string, year: number, category: string, path: string) {
        this.name = name
        this.year = year
        this.category = category
        this.path = path
    }
}