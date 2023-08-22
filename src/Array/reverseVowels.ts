/*
  345. Reverse Vowels of a String

  Given a string s, reverse only all the vowels in the string and return it.
  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

/**
 * Simple solution
 */

function reverseVowels(s: string): string {
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      stack.push(s[i]);
    }
  }
  let ans: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      const str = stack.pop();
      ans.push(String(str));
    } else {
      ans.push(s[i]);
    }
  }
  return ans.join('');
}

const s = 'hello';
reverseVowels(s);
