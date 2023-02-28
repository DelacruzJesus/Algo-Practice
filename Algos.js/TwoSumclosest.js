/*

Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.

Example:

Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).

Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).

Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).

Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time.

*/

const { CallTracker } = require("assert");

const twoSumClosest = (nums, target) => {
  //create a returng value called indeces sum
  let indecesSum;
  // declare a variable for largest differnece and set it as infinity
  let smallestDifference = Infinity;
  //create an object called tracker 
  const tracker = {};
  //loop through nums with nested loop and put indeces sum as key and put their difference from target as value
 //console.log(nums)
  for (let i = 0 ; i < nums.length; i++){
    //set k to wher it is always the index ahead of i so its not repeating
    for (let k = i+1; k < nums.length; k++){
       // console.log(nums[i],nums[k])
      indecesSum = nums[i] + nums[k]
     if (indecesSum === target){
        return indecesSum
    }
    if (target > indecesSum){
     tracker[indecesSum] = target - indecesSum
    } else if (indecesSum > target){
        tracker[indecesSum] = indecesSum - target
    }
    // those ifs are just to make sure the difference is always positive
    // console.log(tracker)
    }
    
  }
 // console.log(target)
  for (let key in tracker){
    if (tracker[key] < smallestDifference){
        smallestDifference = tracker[key]
    }
  }
  //loop through target if a value is less than  largest difference reset largest difference value
  //console.log(tracker)
  //console.log(smallestDifference)
  for (let key in tracker){
    if (tracker[key] === smallestDifference){
        return key
    }
  }
  //if tracker has indecessum as a key for the value of largest differnece we are going to return that indeces sum key
};
console.log(twoSumClosest([3, 1, 4, 3],6))
console.log(twoSumClosest( [2, -3, -6, 7, 4],3))
console.log(twoSumClosest([2, -2, 1],4))
// Naive solution
/*
const twoSumClosest = (nums, target) => {
  let closest = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (Math.abs(sum - target) < Math.abs(closest - target))
        closest = sum; 4,
        -1,4/-4,7/9,6/6,3/-9,12/4,1/1,2/-2,5/11,8
    }
  }
  
  return closest;
};
*/
module.exports = {twoSumClosest};