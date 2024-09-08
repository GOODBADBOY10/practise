// Problems to solve
// 1. Cartesian Product
// Give two finite empty sets, fimd their cartesian products
// Cartesian product of two sets is the sets of all other pairs
// e.g const A = [1,2] and const B = [3,4] A x B = [[1,3], [1,4], [2,3], [2,4]]

// function catesianProduct(arr1, arr2) {
//     let result = []

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++){
//             result.push([arr1[i], arr2[j]]);
//         }
//     }

//     return result;
// }
// const arr1 = [1,2,3]  
// const arr2 = [3,4,5] 
// console.log(catesianProduct(arr1, arr2));
// the Big 0 complexity is 0 of m x n


// 2. Climbing a staircase
// Given a staircase of n steps, count the number of distinct ways you can climb to the top. you can either climb 1 step
// or 2 steps at a time

// function climbStairCase(n) {
//     const noOfWays = [1, 2]
//     for (let i = 2; i <= n; i++) {
//         noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
        
//     }
//     return noOfWays[n - 1]
// }
// console.log(climbStairCase(7))
// The Big O is linear time complexity



// 3. Tower of Hanoi
// Moving of disk. Only one can be moved at a time
function towerHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move the disk from ${fromRod} to ${toRod}`);
        return;
    }
    towerHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Moving disk from ${n} from ${fromRod} to ${toRod}`);
    towerHanoi(n-1, usingRod, toRod, fromRod)
    console.log(`MOving disk from ${usingRod}, to ${toRod}`)
}
towerHanoi(5, "A", "C", "B")
// the time complexity is 2power of n

// LEETCODE QUSTIONS
// 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
// function leetCode1(num, target) {
//     // store the num and its index in an array
//     const emptyArray = []
//     for (let i = 0; i < num.length; i++) {
//         // calculating the complement
//         const output = target - num[i]
//         if (emptyArray[output] !== undefined) {
//             return [emptyArray[output], i]
//         }
//         emptyArray[num[i]] = i
        
//     }
//     return []
// }
// const num = [2, 7, 11, 15]
// const target = 26;
// console.log(leetCode1(num, target))


// another approach
// function solution1(num, target) {
//     for (let i = 0; i < num.length; i++) {
//         for (let j = i + 1; j < num.length; j++) {
//             if (num[j] == target - num[i]) {
//                 return [j, i];
//             }
            
//         }

//     }
//     return null;
// }
// const num = [2, 7, 11, 15]
// const target = 26;
// console.log(solution1(num, target))


// 2. You are given two non-empty linked lists representing two non-negative integers. 
// the digits are stored in reverse order, and each of their nodes contains a single digit. 
// add the two numbers and return the sum as a linked list
function leetCode2(arr1, arr2) {}
const arr1 = [2, 4, 3]
const arr2 = [5, 6, 4]
// result = [7, 0, 8]
// i.e 342 + 465 = 807
console.log(leetCode2(arr1, arr2))