/*

  217. Contains Duplicate

  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// Sample Solution
function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

/**
 * Best Solution
 */
// function containsDuplicate(nums: number[]): boolean {
//   const s = new Set(nums);
//   return s.size !== nums.length;
// }

// const arg = [1, 2, 3, 1];
// console.log('func', containsDuplicate(arg));
