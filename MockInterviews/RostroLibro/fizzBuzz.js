/*
Print numbers 1 - 100

If the number is divisable by 3 print 'Fizz'
If the number is divisable by 5 print 'Buzz'
If the number is divisable by 3 & 5 print 'FizzBuzz'
If none of those are true, print the number
*/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}