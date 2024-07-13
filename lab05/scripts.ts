// ====types====
const str:string = 'Hello'
console.log(str)

const arr: number[] = [1,2,3,1]
const arr2: Array<number> = [2,3,4,3]

// tuple
const contact: [string,number] = ['Max', 1234]

// Any
let variable: any = 42
variable = 'Hello'
variable = []

// functions
function SayMyName(name: string): void{
    console.log(name)
}

// never
function throwError(message: string): never{
    throw new Error(message)
}
function infinte(): never{
    while(true){

    }
}

// Type
type Login = string
const login: Login = 'admin'

type ID = number | string
const id1: ID = 123
const id2: ID = 'hehfj'

type SomeType = string | null | undefined


// ==== Interfaces ====
interface IRect{
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}
const rect1: IRect = {
    id: '123',
    size: {
        width: 111,
        height: 333
    },
    color: '#ccc'
}

const rect2: IRect = {
    id: 'qwe',
    size: {
        width: 49,
        height: 8493
    }
}
rect2.color = 'red'

const rect3 = {} as IRect
const rect4 = <IRect>{}

interface IRectWithArea extends IRect {
    getArea: () => number
}
const rect5: IRectWithArea = {
    id: 'eowir',
    size: {
        width: 1,
        height: 5
    },
    getArea(): number {
        return this.size.height * this.size.height
    }
}



interface IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date()
    setTime(date:Date): void{
        this.time = date
    }
}

interface Styles{
    [key: string]: string
}
const css: Styles = {
    border: '2px solid red',
    marginTop: '2px',
    borderRadius: '20px'
}



// ==== Enum ====
enum Membership{
    Simple,
    Standard,
    Premium
}

const membership1 = Membership.Standard
console.log(membership1)
const membership2 = Membership[2]
console.log(membership2)

 enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTA'
 }
 const social = SocialMedia.INSTAGRAM
console.log(social)



// ==== functions ====
function add(a: number, b: number): number{
    return a + b
}

function toUpperCase(str: string): string{
    return str.toUpperCase()
}

interface MyPosition{
    x: number | undefined
    y: number | undefined
}
interface MyPositionWithDefault extends MyPosition{
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition
function position(a?:number, b?: number): MyPosition | MyPositionWithDefault{
    if(!a && !b){
        return {x: undefined, y: undefined}
    }
    if(a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log('Empty', position())
console.log('1 param', position(42))
console.log('2 params', position(10, 15))



// ==== Clases ====
class Typescript{
    version: string
    constructor(version: string){
        this.version = version
    }

    info(name: string){
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

/*class Car{
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}*/
class Car{
    readonly numberOfWheels: number = 4
    constructor(readonly  model: string) {}
}

class Animal {
    protected voice: string = ''
    public color: string = '#black'

    constructor() {
        this.go()
    }
    private go(){
        console.log('Go')
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()

// abstract
abstract class Component{
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component{
    render() {
        console.log('Component on render')
    }
    info(): string{
        return 'This is info'
    }
}



// ==== Guards ====
function strip(x: string | number) {
    if(typeof x === 'number')
        return x.toFixed(2)

    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError{
    header = 'error header'
    message = 'error message'
}

function handle( res: MyResponse | MyError){
    if(res instanceof MyResponse)
        return {info: res.header + res.result}
    else
        return {info: res.header + res.message}
}

type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType){

}
setAlertType('success')
setAlertType('danger')
//setAlertType('qwe')


//==== Generics ====
const arrayOfNumbers: Array<number> = [1,4,5,2]
const arrayOfStrings: Array<string> = ['asd', 'zxc', 'qwe']

function reverse<T> (array: T[]): T[]{
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)


// ==== Operators ====
interface Person{
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    createdAt: Date
    email: string
}
let w: User

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // name | email

/*let u1: UserKeysNoMeta1 = 'name';
u1 = 'email';*/
let u1: UserKeysNoMeta1 = 'name'
u1 = 'email'

//u1 = '_id'

let u2: UserKeysNoMeta2 = {name: 'dwj',email: 'jdh'}



















