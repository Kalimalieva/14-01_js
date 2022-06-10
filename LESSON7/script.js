// OOP
// class Dog {
//     constructor(weight, height, color) {
//         this.weight =weight;
//         this.height = height;
//         this.color = color;
//     }
// }
// const rex = new Dog (
//     10,
//     50,
//     "black"
// )
// console.log(rex);
//
// const sharik = new Dog (
//     5,
//     50,
//     "pink"
// )
// console.log(sharik)

// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//     voice() {
//         console.log(this.voiceText)
//     }
// }
// class bear extends Animal {
//     constructor(type, gender, color, voiceText, height, weight) {
//         super(type, gender, color, voiceText);
//         this.weight = weight;
//         this.height = height;
//     }
//     purpose(){
//         console.log(`bear height: ${this.height}\nbear weight: ${this.weight}`)
//     }
// }
//
// const Misha = new bear(
//     "wild",
//     "male",
//     "white",
//     "aaaa",
//     2,
//     500
// )
//
// const Beka = new bear(
//     "wild",
//     "male",
//     "pink",
//     "auf",
//     2,
//     80
// )
//
// Beka.purpose();
//
//
// // console.log(Misha);
// // Misha.purpose();
//
// class Cat extends Animal {
//     constructor(type, gender, color, voiceText, height, weight, earLength, speed) {
//         super(type, gender, color, voiceText);
//         this.height = height;
//         this.weight = weight;
//         this.earLength = earLength;
//         this.speed = speed;
//     }
// }
//
// const Tom = new Cat (
//     'pet',
//     "male",
//     "black",
//     "myauu",
//     20,
//     6,
//     5,
//     10
// )
// console.log(Tom);

//
// class House {
//     constructor(width, color, rooms, bedrooms, kitchen, bathroom, window, door, furniture, garden ) {
//         this.width = width;
//         this.color = color;
//         this.rooms = rooms;
//         this.bedrooms = bedrooms;
//         this.kitchen = kitchen;
//         this.bathroom = bathroom;
//         this.window = window;
//         this.door = door;
//         this.furniture = furniture;
//         this.garden = garden
//     }
// }
// const big_house = new House(
//     1200,
//     "white",
//     12,
//     8,
//     1,
//     3,
//     8,
//     10,
//     9,
//     1
// )
// console.log(big_house)
//
// class building extends House {
//     constructor(width, color, rooms, bedrooms, kitchen, bathroom, window, door, furniture, garden,  school, floor, children, teacher, time ) {
//         super(width, color, rooms, bedrooms, kitchen, bathroom, window, door, furniture, garden);
//         this.school = school;
//         this.floor = floor;
//         this.children = children;
//         this.teacher = teacher;
//         this.time = time
//     }
// }
//
// const build = new building(
//     1400,
//     "white",
//     17,
//     6,
//     1,
//     3,
//     10,
//     12,
//     100,
//     1,
//     "big",
//     3,
//     1000,
//     102,
//     45
// )
//
// console.log(build)
//
// let User = {
//     login: "user.com",
//     password: "*****"
// }
// console.log(typeof User)//
//
// let colors = ["red", "blue", "yelloy"]
// console.log(colors)

// function exes(string) {
//     console.log('hi')
// }
// exes()
//
// let obj = {
//     property: 'hi'
// }
// console.log(obj)
// delete obj.property
// console.log(obj)


// const name = "proghub";
// console.log(name.padStart(8));
// console.log(name.padStart(9));
