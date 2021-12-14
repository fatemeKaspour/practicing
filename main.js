//afunction to show firstName with alert
function UserName (firstName , func){
    func(firstName);
}
UserName('fateme' , alert);
//an arrow function
let SumNumbers =(num1 , num2) => num1 + num2;
console.log(SumNumbers(2,6));