//Arrow

const array = ['racecar','america','amma'];
const isPalindrome = (array) =>{
for(let i=0; i<array.length/2; i++){
if(array[i]!=array[array.length-1-i]){
              return false;
          }
          return true;
       }
 };
 const Palindrome = array.filter(isPalindrome);
 console.log("Palindrome in the array:",Palindrome);