// function sayHello() {
//     console.log("Hello")
// }
// sayHello();

// function getFullName (user, age, user2) {
//     // console.log(user.first, user.last, age)// peredaem vse chto hotim
//     if (age < 18) {
//         console.log("close");
//     }else {
//         console.log(user.last, user2.last + " " + "open")
//     }
// }

//
// const blabla = {
//     first: 'john',
//     last: 'beka'
// }
// const user = {
//     first: 'maruf',
//     last: 'beka'
// }

// getFullName(blabla, 12, user2);

// const anonym = function (users) {
//     console.log(user.first, user.last);
// }
//
// anonym();

// function numbers (number1, number2) {
//     if (number1 > number2) {
//         console.log("pervoe chislo bolshe!");
//     }else if (number1 < number2) {
//         console.log("vtoroe chislo bolshe");
//     }else {
//         console.log("ravni")
//     }
// }
// numbers(6, 9)// mojno srazu peredat ili sozdavat peremennuyu

// function twoMass (arr1, arr2) {
//     console.log(arr1, arr2)
//     if (arr1.length > arr2.length) {
//         alert("arr1 > arr2");
//     }else if (arr1.length < arr2.length) {
//         alert("arr1 < arr2");
//     }else {
//         alert("===")
//     }
// }
//
// const arr1 = [16272, 1738, 378, 2783];
// const arr2 = [16272, 1738, 378, 2783, 8990];
//
// twoMass(arr1, arr2);

// function tr () {
//     let line = "*"
//     while (line.length < 7){
//         console.log(line)
//         line = line + '*'
//     }
// }
// tr()

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


//
// let count = 10;
// function countChar() {
//   return function() {
//     return count++;
//   }
// }
//
// let counter = countChar();
// console.log(counter());

const arr = [1, 2, 3, 4, 5, 90]
function arrayLenght (arr) {
    console.log(arr.length);
}

arrayLenght(arr);