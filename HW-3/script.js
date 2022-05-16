const arr = [1, 2, 3, 4, 5, 90]
function arrayLenght (arr) {
    console.log(arr.length);
}

arrayLenght(arr);


function numbers(number1, number2) {
    if (number1 < number2) {
        console.log(number1);
    }else if (number1 > number2) {
        console.log(number2)
    }else{
        console.log("===")
    }
}
numbers(10, 7);



const number = (a, b) => (num) => num % a === 0 ? b : '';
const fizz = number(3, 'Fizz');
const buzz = number(5, 'Buzz');

[...Array(100).keys()].map(i => i + 1).forEach(i => console.log(fizz(i) + buzz(i) || i))