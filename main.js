"use strict";
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