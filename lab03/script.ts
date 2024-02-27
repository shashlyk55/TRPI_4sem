
// task 1
console.log("task 1")

let createPhoneNumber = (arr:number[]):String|number => {
    if(arr.length != 10){
        console.log("Массив не содержит 10 элементов!");
        return 0;
    }
    let str:String = "(";
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0 || arr[i] > 9){
            console.log("Массив должен содержать только целые числа!")
            return "";
        }
        str += arr[i].toString();
        if (i == 2) str += ')';
        if (i == 5) str += '-';
    }
    return str;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

// task 2
console.log("\ntask 2")

class Challenge {
    static solution(number: number) : number {
        let sum:number = 0;
        if(number <= 0) return sum;
        for(let i = 1; i < number; i++){
            if(i % 3 == 0 || i % 5 == 0){
                sum += i;
            }
        }
        return sum;
    }
}
console.log(Challenge.solution(16));

// task 3
console.log("\ntask 3")

let arr:number[] = [1,2,3,4,5,6,7];
let k:number = 3;
let sliced = arr.splice(arr.length - k, arr.length)
let res = [...sliced,...arr]
console.log(res + "")

// task 4
console.log("\ntask 4")

let nums1:number[] = [1,2]
let nums2:number[] = [3,4]

let nums: number[] = [...nums1,...nums2]
let mediana : number

if(nums.length % 2 == 0)
    mediana = (nums[nums.length / 2] + nums[(nums.length / 2) - 1]) / 2
else
    mediana = nums[--nums.length / 2]

console.log(mediana)
