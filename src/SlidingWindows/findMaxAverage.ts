/*
  643. Maximum Average Subarray I

  You are given an integer array nums consisting of n elements, and an integer k.

  Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/

function findMaxAverage(nums: number[], k: number): number {
  let maxAverage = -Infinity; // 初期値を最小に設定
  let currentSum = 0;

  // 最初のk個の要素の合計を計算
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  // サブアレイの最大平均を求める
  for (let i = k; i <= nums.length; i++) {
    maxAverage = Math.max(maxAverage, currentSum / k);

    if (i < nums.length) {
      currentSum += nums[i] - nums[i - k];
    }
  }

  // 最大平均を小数点第五位まで丸めて返す
  return parseFloat(maxAverage.toFixed(5));
}

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
findMaxAverage(nums, k);
