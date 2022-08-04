function foo(){
      console.log("foo");
}
foo();
function bar(){
      console.log("bar");
}
bar();
function average(num1,num2,num3){
      var sum= num1+num2+num3;
      var avg = sum/3;
      console.log("average: ", avg);
}
average(10,20,30);

const grades = [80, 77, 88, 95, 68];


function getAvg(grades) {
      var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;
}
console.log(getAvg([10,10]));

 