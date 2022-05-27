//es5 and es6


//es6
// console.log(a)// oshibka
// const a = 'hello'
// let b = 10;
//
// //es5
// console.log(c)// undefined
// var c = "akdjmfj"
// c = "hi"
// console.log(c);

//es6// string expression
// const first = "jack";
// const last = "barbaro";
// console.log(first + " " + last);
// console.log(`Full Name: ${first} ${last}`);
//
// const getFullname = (user) => {
//     // return "first name: " + user.first +  "\n"  + "last name: " + user.last
//     return `first: ${user.first}\nlast: ${user.last}`
// }
//
// const user = {
//     first: "Atai",
//     last: "zaplach"
// }
//
// console.log(getFullname(user))

// const array = [1, 2, 3, 4, 5];
// const array2 = [...array];// operator spread
//
// // for (let i = 0; i < array.length; i++){
// //     array2.push(array[i])
// // }
//
// console.log(array2)

// const obj = {
//     username: "beks",
//     age: 15,
//     last: "bekmamatov",
//     full: "beks mamat"
// }
//
// const  obj2 = [{...obj}];
// console.log(obj2)// massiv universalniy
// // object individualniy



//destrukturizaziya==========================

const props = {
    onSubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key2: 'value2'
        },
        {
            key3: 'value3'
        }
    ]
}
const {data, onSubmit} = props
console.log(data)
onSubmit()// poluchenie slovo Submit
console.log(props.data[1].key2)// poluchinie value2


