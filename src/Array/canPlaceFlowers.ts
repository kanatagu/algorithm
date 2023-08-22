/*
  605. Can Place Flowers
  You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

  Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

/**
 * Sample solution
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let noAdjacent = 0;

  flowerbed.forEach((_, index) => {
    const prev = index - 1;
    const next = index + 1;

    if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
      noAdjacent++;
      flowerbed[index] = 1;
    }
  });

  return noAdjacent >= n;
}

/**
 * Best solution
 */
// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   let current = 0;
//   const size = flowerbed.length;
//   for (var i = 0; i <= size; i++) {
//     if (i < size && flowerbed[i] == 0) {
//       current++;
//       if (i == 0) current++;
//       if (i == size - 1) current++;
//     } else {
//       n -= Math.trunc((current - 1) / 2);
//       if (n <= 0) return true;
//       current = 0;
//     }
//   }
//   return false;
// }

// const flowerbed = [1, 0, 0, 0, 1];
// const n = 1;
// canPlaceFlowers(flowerbed, n);
