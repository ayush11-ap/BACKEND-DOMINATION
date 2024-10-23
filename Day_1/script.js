// in refernce when you do changes in d it will get reflect in b also
var b = [1,2,3];
var d = b;

d.pop();
console.log(d, b);
