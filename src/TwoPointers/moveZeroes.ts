/**
  283. Move Zeroes

  Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Note that you must do this in-place without making a copy of the array.
 */
function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log('nums', nums);
  console.log('count', nonZeroIndex);
}

// const nums = [0, 1, 0, 3, 12];
// const nums = [0, 0, 1];
// moveZeroes(nums);
