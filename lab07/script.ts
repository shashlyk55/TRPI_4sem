
// task 02
let myPromise = new Promise(function(res,err){
    setTimeout(() => res(Math.floor(Math.random() * 11)), 300)
}).then( result => console.log(result),
         error => console.log("error"));


// task 03
function func(delay: number){
    return new Promise(function(res,err){
        setTimeout(() => res(Math.floor(Math.random() * 11)), delay)
    })
}
let arr = [func(1000),func(6000),func(3000)];
Promise.all(arr)
    .then(res => console.log(res))

// task 04
let pr = new Promise((res,rej) => {
    rej('ku')
})
pr.then(()=>console.log(1))
    .catch(()=>console.log(2))
    .catch(()=>console.log(3))
    .then(()=>console.log(4))
    .then(()=>console.log(5))

// task 05
new Promise<number>(function(resolve){
    setTimeout(() => resolve(21),500)
}).then(function(result){
    console.log(result);
    return result * 2
}).then(function(result){
    console.log(result);
    return result * 2
}).then(function(result){
    console.log(result);
    return result * 2
})

// task 06
async function task05(){
    let result = await new Promise<number>(function(resolve){
        setTimeout(() => resolve(21),500)
    })
    console.log(result)
    result*=2
    console.log(result)
    result*=2
    console.log(result)
}
task05().then(r => r);


