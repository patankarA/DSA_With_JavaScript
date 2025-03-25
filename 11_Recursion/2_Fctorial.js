// Ques 1 : Factorial of n
// Input:  n = 5  ----->>>>>  Output: 120

function nFactorial(n)
{
    if(n==0)
        return 1;

    return n * nFactorial(n-1);
}
console.log(nFactorial(5));
