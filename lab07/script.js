"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// task 02
let myPromise = new Promise(function (res, err) {
    setTimeout(() => res(Math.floor(Math.random() * 11)), 300);
}).then(result => console.log(result), error => console.log("error"));
// task 03
function func(delay) {
    return new Promise(function (res, err) {
        setTimeout(() => res(Math.floor(Math.random() * 11)), delay);
    });
}
let arr = [func(1000), func(6000), func(3000)];
Promise.all(arr)
    .then(res => console.log(res));
// task 04
let pr = new Promise((res, rej) => {
    rej('ku');
});
pr.then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5));
// task 05
new Promise(function (resolve) {
    setTimeout(() => resolve(21), 500);
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
});
// task 06
function task05() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield new Promise(function (resolve) {
            setTimeout(() => resolve(21), 500);
        });
        console.log(result);
        result *= 2;
        console.log(result);
        result *= 2;
        console.log(result);
    });
}
task05().then(r => r);
