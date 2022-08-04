// 
// even odd programm
// ........................................................
// var num = prompt('Enter a value:');
// if(num%2==0){
//       document.write('even');
// }
// else{
//       document.write('odd');
// }
// ...............................................................
//  number programm
// ........................................................

// var num = prompt('Enter a value:');
// if(num>0){
// 
// ...............................................................
//  grade  programm
// ........................................................
// var value = prompt('enter a value: ');
// if(value>100 ||  value<0){
//       document.write('invalid value');
// }

// else if(value>=80 && value<=100){
//       document.write('A+');
// }
// else if(value>=70 && value<=79){
//       document.write('A');
// }
// else if(value>=60 && value<=69){
//       document.write('A-');
// }
// else if(value>=50 && value<=59){
//       document.write('B');
// }
// else if(value>=40 && value<=49){
//       document.write('C');
// }
// else if(value>=30 && value<=39){
//       document.write('D');
// }
// else{
//       document.write('Fail');
// }

// ...............................................................
//  loop programm
// ........................................................

//       var i=1, sum = 0;
//       while(i<=100){
//             if(i%3==0 && i%5==0){
//                   document.write(" "+ i+ " ");
//                   sum = sum + i;

//             }
//             i++;   
// }
// document.write("add :" +sum);
var number = prompt("enter a number: ");
var result = number > 0? "Positive" :number < 0 ?"Negative": "zero";
document.write(result);