// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(arr[9]);
//
// let obj = {
//     username: 'JOHN',
//     followers: [
//         {
//             username: "alex"
//         },
//         {
//             username: "John",
//             followers: [
//                 {
//                     username: "jack"
//                 },
//                 {
//                     username: "jack2"
//                 },
//                 {
//                     username: "jack"
//                 }
//             ]
//         }
//     ]
// }
//
// console.log(obj.followers[1].followers[1].username);



const array = [
    {
        user: 'jack',
        full_name: 'jack barbaro'
    } ,
    {
        user: 'jack',
        full_name: 'jack barbaro'
    } ,
    {
        user: 'jack',
        full_name: 'jack barbaro'
    } ,
    {
        user: 'jack',
        full_name: 'jack barbaro'
    } ,
    {
        user: 'jack',
        full_name: 'jack barbaro'
    }
];


// let i = 0;
// i++;
// console.log(i);

// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// };

// for (let user of array) { // dlya massivov
//     console.log(user)
// };

// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
//     key8: 'b8',
//     key9: 'b9',
//     key10: 'b10',
// };
// for(let key in obj){
//     console.log(obj);
//     // console.log(obj[key]);// po klyuchu
// }
//
// let i = 5;
// while (i<5){
//     console.log('hello')// beskonechno budet rabotat poka ne doydet do otveta
// };

// const users = [
//     {
//         username: 'jack',
//         salary: 500
//     },
//     {
//         username: 'john',
//         salary: 5000
//     },
//     {
//         username: 'beka',
//         salary: 10000
//     },
// ]
//
// let filteruser = users.filter(user => user.salary > 500);
// console.log(filteruser);
//
// const robot_users = [
//     {
//         robot: 'betman',
//         force: 100,
//         speed: 200
//
//     },
//     {
//         robot: 'amerika',
//         force: 200,
//         speed: 300
//     },
//     {
//         robot: 'tanka',
//         force: 300,
//         speed: 400
//     },
//     {
//         robot: 'betman',
//         force: 400,
//         speed: 500
//     }
// ]
//
// let robots = robot_users.filter(user => user.force > 200);
// console.log(robots);

const input = 8;
for (let i = 1; i < 8; i++) {
  console.log('# '.repeat(i).trim());
};


const i = 101;
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0){
       console.log( 'FizzBuzz' );
    }else if ( i % 3 === 0){
       console.log( 'Fizz' );
    }else if ( i % 5 === 0){
       console.log( 'Buzz' );
    }else{
       console.log(i);
    };
};