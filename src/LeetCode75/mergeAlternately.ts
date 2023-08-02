/*
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

function mergeAlternately(word1: string, word2: string): string {
  const array1 = word1.split('');
  const array2 = word2.split('');
  let mergedWords: string[] = [];
  let finalMergedWords: string[] = [];

  if (array1.length <= array2.length) {
    array1.forEach((str, idx) => {
      mergedWords.push(str);
      mergedWords.push(word2[idx]);
    });

    const rest = array2.slice(array1.length, array2.length + 1);
    finalMergedWords = [...mergedWords, ...rest];
  }

  if (array2.length < array1.length) {
    array2.forEach((str, idx) => {
      mergedWords.push(word1[idx]);
      mergedWords.push(str);
    });

    const rest = array1.slice(array2.length, array1.length + 1);
    finalMergedWords = [...mergedWords, ...rest];
  }

  return finalMergedWords.join('');
}

// Sample Solution
// function mergeAlternately(word1: string, word2: string): string {
//   let response = '';

//   for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
//     if (i < word1.length) response += word1[i];
//     if (i < word2.length) response += word2[i];
//   }

//   return response;
// }

const word1 = 'abcd';
const word2 = 'pq';
console.log(mergeAlternately(word1, word2));
