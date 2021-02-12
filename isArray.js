var s=Array.isArray([1,2,3]);
var a=[2,3,4,9];
console.log(a.join("*"));
a.pop();
console.log(a[a.length-1]);//array values removed by using pop
a.push('fareed');
console.log(a[a.length-1]);//adding element using pop
a.unshift('lemon');
console.log(a[0]);


