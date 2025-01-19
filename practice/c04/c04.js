var num1 = 5;
var num2 = 10;

document.write('<h4> num1 :  ' + num1 + '</h4>');
document.write('<h4> num2 :  ' + num2 + '</h4>');
if( num1 == num2){
    document.write('<h4> num1 is equal to num2 </h4>');
}else{
    document.write('<h4> num1 is not equal to num2 </h4>');
}

document.write('<hr/>');

num2 = 5;

document.write('<h4> num1 :  ' + num1 + '</h4>');
document.write('<h4> num2 :  ' + num2 + '</h4>');
if( num1 == num2){
    document.write('<h4> num1 is equal to num2 </h4>');
}else{
    document.write('<h4> num1 is not equal to num2 </h4>');
}
document.write('<hr/>');

num2 = '5';

document.write('<h4> num1 :  ' + num1 + '</h4>');
document.write('<h4> num2 :  ' + num2 + ' as string </h4>');
if( num1 == num2){
    document.write('<h4> num1 is equal to num2 </h4>');
}else{
    document.write('<h4> num1 is not equal to num2 </h4>');
}
document.write('<hr/>');

document.write('<h4> using strict operator === </h4>');
document.write('<h4> num1 :  ' + num1 + '</h4>');
document.write('<h4> num2 :  ' + num2 + ' as string </h4>');
if( num1 === num2){
    document.write('<h4> num1 is equal to num2 </h4>');
}else{
    document.write('<h4> num1 is not equal to num2 </h4>');
}
document.write('<hr/>');

document.write('<h4> False values are </h4>');

var a = false;
if(!a){
    document.write('<h4> a is false:  ' + a + '</h4>');
}

var b = 0;
if(!b){
    document.write('<h4> b is false:  ' + b + '</h4>');
}

var c ;
if(!c){
    document.write('<h4> c is false:  ' + c + '</h4>');
}

var d = '';
if(!d){
    document.write('<h4> d is false:  ' + d + '</h4>');
}

var e = null;
if(!e){
    document.write('<h4> e is false:  ' + e + '</h4>');
}


var f = 'abc';

if(isNaN(f)){
    document.write('<h4> f is NaN:  ' + f + '</h4>');
}


