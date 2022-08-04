// var num =[1,2,3,4,5,6,7,8];
// var sum=0;
// for(var i=0;i<5;i++){
//       console.log(num[i]);
//       sum+=num[i];
// }
// console.log('sum='+sum);

// var names = ['anis', 'rabbi', 'alom'];
// names.sort();
// console.log(names);

var num =[5,6,7,8,1,2,3,4];
num.sort(function(a,b){
      return a-b;
})
console.log(num);