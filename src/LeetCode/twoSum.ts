/**
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.
 */

function twoSum(nums: number[], target: number): number[] {
  let results: number[] = [];

  nums.forEach((num1, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (num1 + nums[j] === target) {
        results = [i, j];
      }
    }
  });

  console.log('results', results);
  return results;
}

/**
 * Best Solution
 */
// const twoSum = function (nums: number[], target: number) {
//   let tmp = new Map();
//   for (let i = 0; i < nums.length; ++i) {
//     console.log('tmp', tmp);
//     if (tmp.has(target - nums[i])) {
//       return [tmp.get(target - nums[i]), i];
//     }
//     tmp.set(nums[i], i);
//   }
//   return [-1, -1];
// };

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
