//Arrow

const titlecasestring = (arr) => {
        let newarr = [];
    for(let i=0; i<arr.length; i++){
        newarr.push((arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase()));
       }
       return newarr;
};
titlecasestring(['i','am','developer']);