
// task 1
/*
Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и
возвращает строку этих чисел в виде номера телефона.
Формат номера телефона должен соответствовать "(xxx) xxx-xxxx".
Пример:
 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// => returns "(123) 456-7890"
 */
console.log("task 1")
let createPhoneNumber = (arr:number[]):String => {
    if(arr.length != 10){
        console.log("Массив не содержит 10 элементов!");
        return "";
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
/*
Если перечислить все натуральные числа до 10, кратные 3 или 5,
то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
Завершите метод так, чтобы он возвращал сумму всех чисел, кратных 3 или 5,
меньше переданного числа. Кроме того, если число отрицательное, верните 0.
Примечание. Если число кратно и 3, и 5, считайте его только один раз.
 class Challenge {
 static solution(number: number) {
    //...
   }
 }
 */
console.log("task 2")
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
/*
Дан целочисленный массив nums, поверните массив вправо на k шагов, где k неотрицательно.
 Пример:
 Ввод: nums = [1,2,3,4,5,6,7], k = 3
 Вывод: [5,6,7,1,2,3,4]
 Объяснение:
 повернуть на 1 шаг вправо: [7,1,2,3,4,5,6]
 повернуть на 2 шага вправо: [6,7,1,2,3,4,5]
 повернуть на 3 шага вправо: [5,6,7,1,2,3,4]
 */
let arr:number[] = [1,2,3,4,5,6,7];
let k:number = 3;
let sliced = arr.splice(arr.length - k, arr.length)
let res = [...sliced,...arr]
console.log(res + "")

// task 4
/*
Есть два отсортированных массива nums1 и nums2 размера m и n соответственно,
вернуть медиану двух отсортированных массивов. Медиана число (два числа) находящееся в середине массива.
 Пример 1:
 Ввод: nums1 = [1,3], nums2 = [2]
 Вывод: 2.00000
 Объяснение:
 объединение массивов = [1,2,3], медиана - 2.
 Пример 2:
 Ввод: nums1 = [1,2], nums2 = [3,4]
 Вывод: 2.50000
 Объяснение: объединение массивов = [1,2,3,4], медиана (2 + 3) / 2 = 2.5.
 */
let nums1:number[] = [1,2]
let nums2:number[] = [3,4]

let nums: number[] = [...nums1,...nums2]
let mediana : number

if(nums.length % 2 == 0)
    mediana = (nums[nums.length / 2] + nums[(nums.length / 2) - 1]) / 2
else
    mediana = nums[nums.length / 2]

console.log(mediana)







