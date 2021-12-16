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
// computing area of triangle
let areaTriangle = (height , weight) => (height*weight)/2
// console.log(areaTriangle(50,20));
//a function to show sum of two numbers is less than 100 or not
function isLessThan100(a , b){
    let sum = a + b ;
    if(sum <100){
        return true;
    }else{
        return false;
    }
}
const result = isLessThan100(60,70);
// console.log(result);