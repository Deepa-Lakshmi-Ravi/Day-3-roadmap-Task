//Anonymous
const array = ['racecar','america','amma'];
const isPalindrome = function(array){
for(let i=0; i<array.length/2; i++){
if(array[i]!=array[array.length-1-i]){
              return false;
          }
          return true;
       }
 };
 const Palindrome = array.filter(isPalindrome);
 console.log("Palindrome in the array:",Palindrome);

 //IIFE

 const array = ['racecar','america','amma'];
 const isPalindrome = (function(array){
    for(let i=0; i<array.length/2; i++){
        if(array[i]!=array[array.length-1-i]){
                      return false;
                  }
                  return true;
               };
               return array.filter(isPalindrome);
 })(array);
 console.log("Palindrome in the array:",Palindrome);
