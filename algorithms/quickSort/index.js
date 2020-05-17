let arr = [4, 6, 2, 5, 1, 8, 9, 3];

let quickSort = (array) => {
    if(array.length <= 1){
        return array;
    }

    let leftArray = [];
    let rightArray = [];
    let baseDigit = array[0];

    // let baseDigit = array[Math.floor(array.length / 2)];

    let i = 0;
    for(; i < array.length; i++){
        if(array[i] < baseDigit){
            leftArray.push(array[i]);
        }else if(array[i] > baseDigit){
            rightArray.push(array[i]);
        }
    }

    return quickSort(leftArray).concat(baseDigit, quickSort(rightArray));

}


console.log(quickSort(arr));




let quickSort2 = (array) => {
    if(array.length < 2) return array;

    const baseDigit = array[0];
    const leftArray = [];
    const rightArray = [];
    let i = 0;
    
    for(; i < array.length; i++){
        if(array[i] < baseDigit){
            leftArray.push(array[i]);
        }else if(array[i] > baseDigit){
            rightArray.push(array[i]);
        }
    }
    
    return quickSort(leftArray).concat(baseDigit, quickSort(rightArray));
}


console.log(quickSort2(arr));