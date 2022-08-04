// var farn = parseFloat(prompt('Enter value: '));
// // var farn = (cels*(9/5))+32; //convert   = 75=167
// // // document.write("Farenhight = "+farn);
// // var cels = (farn-32) * (5/9);//convert   =167=75
// // document.write("celcius = "+cels);

var value = prompt('enter a value: ');
if(value>100 &&  value<0){
      document.write('invalid value');
}

else if(value>=80 && value<=100){
      document.write('A+');
}
else if(value>=70 && value<=79){
      document.write('A');
}
else if(value>=60 && value<=69){
      document.write('A-');
}
else if(value>=50 && value<=59){
      document.write('B');
}
else if(value>=40 && value<=49){
      document.write('C');
}
else if(value>=30 && value<=39){
      document.write('D');
}
else{
      document.write('Fail');
}