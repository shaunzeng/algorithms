false == 'false';  // false

false == '0';   // true

'' == '0';    // false

0 == '0' ;  // true

0 == '' ;   //true, empty string gets converted to 0;

false == undefined ;    // false

null == undefined ;  // true

'\r\n'  == 0 ; // true





var obj1 = {};
var obj2 = {};
obj1 == obj2;    // false
obj1 === obj2   // false

obj1 == null   // false

doh.assertEqual(obj1, obj2)   // true , dojo;







function myFn(){
	console.log(x);
	if (true){
		var x = 4;
	}
	console.log(x);
}

myFn();

/*
undefined
4
*/







function myFn1(){
	console.log(x);
	if (false){
		var x = 4;
	}
	console.log(x);
}

myFn1();

/*
undefined
undefined
*/








this.id = "global";

obj = {
	id:'my obj',
	myMeth: function(){return this.id}
}

obj.myMeth(); // 'my obj'

var myVar = obj.myMeth;
myVar() ;  // 'global', myVar is pointer to the obj , which is the function, function gets called in glabal scope







function myFn2(){
	return {
		a:3
	}
}

myFn2();  // Object {a=3}

function myFn3(){
	return 
	{
		a:3
	}
}

myFn3(); // undefined







//var extends = 3;  // SyntaxError: extends is a reserved word (maybe in the future)





typeof 3 ;   // 'number'
typeof 1.4 ;   // 'number'
typeof NaN;  // 'number'
typeof {};   //'object'
typeof [];   //'object'
typeof undefined ;  //'undefined'
typeof null ; // 'object'





0.1 + 0.2;  // 0.300000000000000004
parseInt('15');   //15
parseInt('15 and a half');    //15
parseInt('twice 32');    // NaN
parseInt('015');           // 13





for (var i in [21,22,23]){console.log(i)} ;  // 0,1,2




var myArr = [21,22,23];
myArr.foo = 3;
myArr; // [21,22,23]
myArr.foo ; //3
myArr.length = 5;
myArr;  //[21,22,23,undefined,undefined]

var myArr2 = [3,2,1,33,22,11];
myArr2.sort();  // [1,11,2,22,3,33];
typeof myArr2[0]; //'number'
11 < 2;   // false





Number.MAX_VALUE > 0;   // true
Number.MIN_VALUE < 0;    // false, the smallest positive number you can get in JS



1<2<3; // true
3>2>1; // false



//42.toFixed(2);   // syntax error
//42. toFixed(2);   // syntax error
//42 .toFixed(2);    // '42.00'
42 . toFixed(2);    // "42.00"
42.0.toFixed(2);    //"42.00"
42..toFixed(2);    //"42.00"



[] == ![];    //true, empty array converted to 0 and false converted to 0 
[] + {};      // "[object Object]"
{} + [] ;     // 0   


Number("");  // 0
Number(" ");  //0
Number("\r\n\t");   //0

Number("0");    //0
Number("-0");   // -0
JSON.parse("-0");   // -0

- 0;    //-0
Number("- 0"); //NaN

JSON.stringify(-0); //"0"
String(-0);  //"0"
-0 + "";   //"0"

Number("0.");    //0
Number(".0");    // 0
Number(".");    // NaN
Number(undefined);   //NaN
Number(null);   // 0
Number({});   //NaN
Number([]);   // 0
String({});   //"[object Object]"
String([]);   //""
String(null);    // "null"
String([null]);     // ""
String(undefined);     //"undefined"
String([undefined]);    // ""
String([null,null,]);    //","
String([undefined,undefined,]);     // ","
String([,,]);       //","



o1 = {hello:'world'};

o2 = Object.create(null);
o2.hello = 'world';

o1 + '';   // "[object Object]"
o2 + '';    //TypeError






s = Symbol("that's cool!");
s; // Symbol(that's cool)
String(s);   // "Symbol(that's cool)"
s + "";    // TypeError!


Array(3);
//chrome: [undefined x 3]
//firefox: [<3 empty slots>]

[,,,];
// chrome: [undefined x 3]
// firefox: [<3 empty slots>]

[undefined,undefined,undefined];
//chrome: [undefined, undefined, undefined]
//firefox: [undefined, undefined, undefined]


a = [];
a.length = 3;
a;
//chrome: [undefined x 3]
//firefox: [<3 empty slots>]




[undefined,undefined,undefined,].join("+");   // "++"
[undefined,undefined,undefined,].map(x => "+"); // ["+","+","+"]
[,,,].join("+");   //"++"
[,,,].map(x => "+");  // firefox: [<a empty slots>];




Array.apply(null, Array(3));   //[undefined,undefined,undefined]
Array.apply(null,[,,,]);   // [undefined,undefined,undefined];
Array.apply(null, {length:3});   // [undefined,undefined,undefined]
Array.apply(null,(a,b,c) => {});  // [undefined,undefined,undefined]



switch(42){
	default:
		console.log("yep");
	case 10:
	case 20:
		console.log("opps");
		break;
	case 30:
		console.log("nope");
		break;
}

//"yep"
//"oops"




function foo(){
	try{
		return 2;
	}
	finally{
		return 3;
	}
}

foo();   // 3


function foo2(){
	try{
		return 2;
	}
	finally{
		//return 3;
	}
}

foo2();   // 2



function foo3(){
	bar:{
		try{
			return 2;
		}
		finally {
			break bar;
		}
	}

	console.log("oops");
}

foo3(); 
// "oops"    finally + break canceled the return






function foo(x,y = 10){
	console.log(x,y);
}

foo(5);  // 5 10
foo(5,undefined);   // 5 10
foo(5,null);   // 5 null
foo(5,25);   // 5 25


