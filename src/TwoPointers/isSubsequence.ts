/*
  392. Is Subsequence

  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

  A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] === t[i]) {
      sIndex++;
    }
  }

  return sIndex === s.length;
}

// const s = 'abc';
// const s = 'abc';
// const s = 'acb';
// const t = 'ahbgdc';
// console.log(isSubsequence(s, t));
