"use strict";
// ====types====
const str = 'Hello';
console.log(str);
const arr = [1, 2, 3, 1];
const arr2 = [2, 3, 4, 3];
// tuple
const contact = ['Max', 1234];
// Any
let variable = 42;
variable = 'Hello';
variable = [];
// functions
function SayMyName(name) {
    console.log(name);
}
// never
function throwError(message) {
    throw new Error(message);
}
function infinte() {
    while (true) {
    }
}
const login = 'admin';
const id1 = 123;
const id2 = 'hehfj';
const rect1 = {
    id: '123',
    size: {
        width: 111,
        height: 333
    },
    color: '#ccc'
};
const rect2 = {
    id: 'qwe',
    size: {
        width: 49,
        height: 8493
    }
};
rect2.color = 'red';
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: 'eowir',
    size: {
        width: 1,
        height: 5
    },
    getArea() {
        return this.size.height * this.size.height;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '2px solid red',
    marginTop: '2px',
    borderRadius: '20px'
};
// ==== Enum ====
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership1 = Membership.Standard;
console.log(membership1);
const membership2 = Membership[2];
console.log(membership2);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTA";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.INSTAGRAM;
console.log(social);
// ==== functions ====
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty', position());
console.log('1 param', position(42));
console.log('2 params', position(10, 15));
// ==== Clases ====
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: TypeScript version is ${this.version}`;
    }
}
/*class Car{
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}*/
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
}
class Animal {
    constructor() {
        this.voice = '';
        this.color = '#black';
        this.go();
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
// abstract
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info';
    }
}
// ==== Guards ====
function strip(x) {
    if (typeof x === 'number')
        return x.toFixed(2);
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'response result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.message = 'error message';
    }
}
function handle(res) {
    if (res instanceof MyResponse)
        return { info: res.header + res.result };
    else
        return { info: res.header + res.message };
}
function setAlertType(type) {
}
setAlertType('success');
setAlertType('danger');
//setAlertType('qwe')
//==== Generics ====
const arrayOfNumbers = [1, 4, 5, 2];
const arrayOfStrings = ['asd', 'zxc', 'qwe'];
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
let key = 'name';
key = 'age';
let w;
let u1 = 'name';
u1 = 'email';
let u2 = { name: 'dwj', email: 'jdh' };
u2.name = 'dhhd';
//u1 = '_id'
