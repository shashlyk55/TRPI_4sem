/*
1.	Хранилище всего имеющегося товара в интернет-магазине представляет собой объект products.  Весь товар разделен на категории, одна из них «Обувь», которая в свою очередь делится на виды «Ботинки», «Кроссовки», «Сандалии». О каждой паре обуви хранится следующая информация: уникальный номер товара, размер обуви, цвет, цена.
2.	Реализуйте итератор для объекта products для доступа к каждому товару.
3.	Реализуйте фильтр обуви по цене в заданном диапазоне, по заданному размеру, по заданному цвету. Выведите номера товаров, соответствующих заданному условию (фильтру).
4.	Каждый товар (пара обуви) из предыдущей задачи представляет собой однотипные объекты. Учитывая это, каким образом мы можем оптимизировать создание нового товара в хранилище?
5.	Добавьте в описание товара новые свойства: «скидка» и «конечная стоимость» (стоимость с учетом скидки). Добавьте геттер и сеттер для свойства «конечная стоимость», учитывая то, что свойства «скидка» и «конечная стоимость» взаимозависимые.
 */

// task 1
abstract class Product{
    protected _id:number
    protected _cost:number
    protected _color:String
    protected _size:number

    protected static _discount: number = 0
    static get discount(): number{
        return this._discount
    }
    static set discount(value: number) {
        this._discount = value;
    }
    get id(): number {
        return this._id;
    }
    get size(): number {
        return this._size;
    }
    get color(): String {
        return this._color;
    }
    get cost(): number {
        return this._cost;
    }
    get finalCost(): number {
        return this._cost - Product._discount;
    }
    protected constructor(id:number,cost:number,size:number,color:String){
        this._id = id
        this._cost = cost
        this._color = color
        this._size = size
    }

}

class Boots extends Product {
    constructor(id:number,cost:number,size:number,color:String){
        super(id,cost, size, color)
    }

}
class Shoes extends Product {
    constructor(id:number,cost:number,size:number,color:String){
        super(id,cost, size, color)
    }

}
class Sandals extends Product{
    constructor(id:number,cost:number,size:number,color:String){
        super(id,cost, size, color)
    }

}



class ProductStorage{
    private _products : Product[] = []
    get products(): Product[] {
        return this._products;
    }
    public ProductStorage(){}
    public Add(item : Product){
        this._products.push(item)
    }
    // task 2
    [Symbol.iterator](){
        let index = 0
        return {
            next: () => {
                if(index < this._products.length){
                    return {value: this._products[index++], done: false};
                }
                else{
                    return {done: true}
                }
            }
        }
    }

    // task 3
    public CostFilter(min:number, max:number){
        return (this._products
            .filter(x=> x.cost >= min && x.cost <= max))
            .map(x=>x.id)
    }
    public SizeFilter(min:number, max:number){
        return (this._products
            .filter(x=> x.size >= min && x.size <= max))
            .map(x=>x.id)
    }
    public ColorFilter(color:String){
        return this._products
            .filter(x=>x.color == color)
            .map(x=>x.id)
    }

}


let storage = new ProductStorage()
let boots1:Product = new Boots(1,150, 40, "red")
console.log(boots1.finalCost)
Product.discount = 100

let boots2:Product = new Boots(2,100, 40, "yellow")
let shoes1:Product = new Shoes(3,120, 40, "blue")
console.log(shoes1.finalCost);
storage.Add(boots1)
storage.Add(shoes1)
storage.Add(boots2)

for(let item of storage){
    console.log(item)
}

for(let item of storage.CostFilter(110, 160)){
    console.log(item)
}
for(let item of storage.ColorFilter("blue")){
    console.log(item)
}
