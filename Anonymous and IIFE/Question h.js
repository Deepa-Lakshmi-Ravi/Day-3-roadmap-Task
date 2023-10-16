//Anonymous

const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
const rotateArray = function(arr, k) {
    const n = arr.length;
    k = k % n;
    if (k < 0) {
      k = n + k;
    }
  
    const rotated = arr.splice(n - k).concat(arr);
    return rotated;
  };
  const rotatedArray = rotateArray(originalArray, k);
  console.log(rotatedArray);
  

  //IIFE
  (function() {
    const originalArray = [1, 2, 3, 4, 5];
    const k = 2;
  
    const rotateArray = function(arr, k) {
      const n = arr.length;
      k = k % n;
      if (k < 0) {
        k = n + k;
      }
  
      const rotated = arr.splice(n - k).concat(arr);
      return rotated;
    };
  
    const rotatedArray = rotateArray(originalArray, k);
    console.log(rotatedArray);
  })();
  
  