// Recurrsive function

function RecurrsiveFun(num){
    // Base case
    if(num == 5) return true;
    // Processing
    console.log(num);
    // Recurrsive call
    return RecurrsiveFun(num + 1);
}
//RecurrsiveFun(1);

// Loop Vs Recurrsion

function multiply(arr){
    let prod = 1;
    for(let i=0; i<arr.length; i++)
    {
        prod = prod*arr[i];
    }
    return prod;
}
//console.log(multiply([1,2,3,4]));

function multiplyWithRecurr(arr){
    if(arr.length <= 0){
        return 1;
    }
    else{
        return arr[arr.length - 1] * multiplyWithRecurr(arr.slice(0,arr.length-1));
    }
}
//console.log(multiplyWithRecurr([1,2,3,4]));
