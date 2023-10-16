//Anonymous

const findMedian = function(arr1, arr2) {
    const combined = [...arr1, ...arr2].sort((a, b) => a - b);
    const middle = Math.floor(combined.length / 2);
  
    if (combined.length % 2 === 0) {
      const median1 = combined[middle - 1];
      const median2 = combined[middle];
      return (median1 + median2) / 2;
    } else {
      return combined[middle];
    }
  };
  
  const array1 = [1, 3, 5];
  const array2 = [2, 4, 6];
  
  const median = findMedian(array1, array2);
  console.log("Median:", median);

  
  //IIFE

  const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const median = (function(arr1, arr2) {
  const combined = [...arr1, ...arr2].sort((a, b) => a - b);
  const middle = Math.floor(combined.length / 2);

  if (combined.length % 2 === 0) {
    const median1 = combined[middle - 1];
    const median2 = combined[middle];
    return (median1 + median2) / 2;
  } else {
    return combined[middle];
  }
})(array1, array2);

console.log("Median:", median);
