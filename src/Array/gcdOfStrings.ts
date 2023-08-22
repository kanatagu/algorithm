/*
1071. Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

const gcdOfStrings = function (str1: string, str2: string) {
  const [smallerString, largerString] = [str1, str2].sort(
    (a, b) => a.length - b.length
  );
  for (let i = smallerString.length; i > 0; i--) {
    const testString = smallerString.slice(0, i);
    const correctSmaller = smallerString.split(testString).join('').length;
    const correctLarger = largerString.split(testString).join('').length;
    if (correctSmaller && correctLarger) return testString;
  }
  return '';
};

/*
  Best Solution
 */
// const gcdOfStrings = (str1: string, str2: string) => {
//   if (str1 + str2 !== str2 + str1) return '';
//   const gcd = (a: number, b: number): number => (0 === b ? a : gcd(b, a % b));
//   return str1.substring(0, gcd(str1.length, str2.length));
// };

// const str1 = 'ABABAB';
// const str2 = 'ABAB';

// console.log(gcdOfStrings(str1, str2));
