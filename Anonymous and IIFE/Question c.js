//Anonymous

const sumofallnumbers = function(Numberarray){
    let sum = 0;
    for(let i=0; i<Numberarray.length; i++){
        sum += Numberarray[i];
    }
    return sum;
};
sumofallnumbers([1,2,3,4,5,6,7,8]);

//IIFE

(function(Numberarray){
    let sum = 0;
    for(let i=0; i<Numberarray.length; i++){
        sum += Numberarray[i];
    }
    return sum;
})([1,2,3,4,5,6,7,8]);