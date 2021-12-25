"use strict";
//********************************************functions
//a function to show firstName with alert
function userName (firstName , func){
    func(firstName);
}
// userName('fateme' , alert);
//an arrow function for sum two numbers
let sumNumbers =(num1 , num2) => num1 + num2;
// console.log(sumNumbers(2,6));
//convert minutes to seconds
let convertToMinutes = (minutes)=> minutes*60;
// console.log(convertToMinutes(1));
// computing area of triangle
let areaTriangle = (height , weight) => (height*weight)/2
// console.log(areaTriangle(50,20));
//a function to show sum of two numbers is less than 100 or not
// function isLessThan100(a , b){
//     let sum = a + b ;
//     if(sum <100){
//         return true;
//     }else{
//         return false;
//     }
// }
// const result = isLessThan100(60,70);
// console.log(result);
//make befor conditional function with ? and : and arrow function
let isLessThan100 = (a , b) => (a + b >100) ? false : true;
const result = isLessThan100(60,70);
// console.log(result);
//**************************************************object
let user ={
    firstName : "fateme",
    lastName : "kaspour",
    age : "22"
};
// console.log(`${user.firstName} ${user.lastName} is ${user.age} years old`);
//****************************************************var , let & const
//-----var
carName = "Benz";
var carName;
// console.log(carName);//Benz
//-----let
// carName2 = "Volvo";
// let carName2;
// console.log(carName2);//ReferenceError
//-----const
// carName3 = "BMW";
// const carName3;
// console.log(carName3);//SyntaxError
//************************************************copy by value
let aliAge = 27;
let zahraAge = aliAge;
aliAge = 28;
// console.log(aliAge);//28
// console.log(zahraAge);//27
//************************************************copy by Reference
let user1 ={
    name :"fateme",
}
let admin = user1;
user1.name = "mostafa"
// console.log(user1.name);//mostafa
// console.log(admin.name);//mostafa
//************************************************Are two object by different name same or not?
let user2 ={
    name : "hasan",
}
let admin2 ={
    name : "hasan",
}
// console.log(user2 === admin2);//false
// ************************************************copy properties of object to another object 1
let user3 ={
    name:"sanaz",
}
let admin3 = new Object;

for (let key in user3){
    admin3[key] = user3[key];
}
// console.log(admin3);//Object { name: "sanaz" }
// ************************************************copy properties of object to another object 2
let user4 ={
    name:"sanaz",
}
let adminPremission ={
    canDelete : true,
}
let admin4 = {};
Object.assign(admin4,user4,adminPremission,{canView : true});

// console.log(admin4);//Object { name: "sanaz", canDelete: true }
// ***********************************************add function as properties to object
let user5 = {
    firstName:"ali",
    age:22,
    nationality : "iran",
    speak :function (message){
        alert(`${this.firstName} said :${message}`);
    },
}
// user5.speak("hello world");
// ************************************************function constructor
function User (firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age ;
    this.speak = function(message){
        alert(`${this.firstName} said : ${message}`);
    }
}
let admin6 = new User('fateme' , 'kaspour' , 22);
// console.log(admin6);
//************************************************** a function to sum soccerPoints
//wins : 3
//draw : 1
//lose : 0
const soccerPOints =(wins , draws) => (wins * 3) + draws;
// console.log(soccerPOints(5,3));
//**************************************************use arrow function in function constructor
function Person (){
    this.name = "fateme kaspour";
    setTimeout(()=>{
        console.log(this.name)
    },1000);
};
//wrong way for above function
// function Person (){
//     this.name = "fateme kaspour";
//     setTimeout(function(){
//         console.log(this.name)
//     },1000);//undefind ->because this object is in a function so can't access to initial value

// };
//*************************************************default params
const functionWithDefaultparams = function(parametrs = "defaul value"){
    return parametrs;
}
functionWithDefaultparams();//default value
functionWithDefaultparams("new value");//new value
//**************************************************spread operator
//-1-copying an array
const array1 = [1,2,3,4];
const array2 = [...array1];//[1,2,3,4]
//-2-Inserting the elements of one array into another
let bakedDesserts = ['cake' , 'cookie' , 'donut'];
let desserts = ['ice cream' , 'flan' , 'frezen yoghurt' , ...bakedDesserts];//['ice cream' , 'flan' , 'frezen yoghurt' , 'cake' , 'cookie' , 'donut'];
//*************************************************rest parameters
//when you don't know the parameters of function we use rest parameters
const funcSample = (a,b,...rest) =>{
 console.log(...rest);
}
