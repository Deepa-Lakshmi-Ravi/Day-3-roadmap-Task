//Anonymous

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const removeduplicates = function(array){
const uniqueArray = [];
for (const item of originalArray) {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
}
};
console.log(uniqueArray); 

//IIFE

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const removeduplicates = (function(array){
    const uniqueArray = [];
    for (const item of originalArray) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    })(originalArray);
    console.log(uniqueArray); 
