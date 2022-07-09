// /* //CHAPTER  1: INTRO





// /*How WEBSITE FRONT-END WORKS (CLIENT-SIDE)

// HTML/HTML5

// CSS / CSS3

// JAVASCRIPT

// HTML stands for Hyper Text Markup Language .
// HTML is the standard markup language for creating Web
// HTML describes the structure
// eg.
// Header
// Menu
// Title
// Sub-title
// Article
// List
// Image
// Sidebar
// Paragraph
// Section
// Footer






// CS describes how HTML
// elements are to be displayed on
// screen, paper, or in other media.
// csS stands for Cascading Style sheets.
// With CSS, you can control thecolor, font, the size of text 



// JavaScript improves the user
// experience of the web page
// by converting it from a static
// page into an interactive one
// of a Web page
// JavaScript is a text-based
// programming language used
// both on the client-side and
// server-side that allows you to
// make web pages interactive.
// pages 


// */





// //  CHAPTER 2 : VARIABLES

// /*
// 1.JavaScript improves the user experience of the web page by converting it from a static
// page into an interactive one.
// 2.javascript adds behavior to web pages

// */


// console.log("hello world of js");


// // var varkaname ="value"
// var myName = "vish"
// var myAge = 18;
// var myPet = "lucy";
// console.log(myName)
// console.log(myAge)
// console.log(myPet)



// // NAMING VARIABLES: RULES AND BEST PRACTICES
// /* 1. The first character must be a letter or an underscore (-) or an
//  dollar($). You can't use a number as the first character.

//  2. The rest of the variable name can include any letter, any number, or
// the underscore. Can't use any other characters, including spaces.

//  3. Variable names are case sensitive.

// 4. No limit to the length of the variable name.

// 5. You can't use one of JavaScript's reserved words as a variable name.
// */



// /* 
//      TEST 1
//     var _myName = "vinod";        
//     var _1my__Name ="thapa technical";
//     var 1myName = "thapa";
//     var $myName="bahadur";


// */

// //  answer
// var _myName = "vinod";
// var _my_Name ="thapa technical";
// //var 1myName = "thapa";
// var $myName = "bahadur";
// console.log(_myName)
// console.log(_my_Name)
// // console.log(1myName)
// console.log(myName)



// // ********________CHAPTER 3:  DATA  TYPES IN JAVA SCRIPT

// /* 
//  DATA TYPES IN JAVASCRIPT

//  Six Data Types that are.primitives,

//  1. undefined : typeof instance === "undefined"
//  2.Boolean : typeof instance === "boolean"
//  3. Number : typeof instance === "number"
//  4.String : typeof instance === "string"
//  5.Biglnt : typeof instance === "bigint"
//  6.Symbol : typeof instance === "symbol“
 
 

//  */
// // STRING
// var myName2 = "vinod"
// console.log(myName2)
// console.log(typeof (myName2))

// var firstAlphabet = 'c';
// console.log(firstAlphabet)
// console.log(typeof (firstAlphabet))



// var y = null;
// console.log(y)
// console.log(typeof (y))
// /*
// console.log( y)=null
// console.log(typeof( y))=object
// but object is not a primitive data type in  js
// $$$$$----BUG(1)----$$$$$
// */



// //undefined
// var y1 =
//     console.log(y1)
// console.log(typeof (y1))
// // var ko nam diya but value nhi




// //NUMBER
// var myAge = 20;
// console.log(myAge)
// console.log(typeof (myAge))



// //BOOLEAN
// var iAmVish = true;
// console.log(iAmVish)
// console.log(typeof (iAmVish))
// var iAmViv = false;
// console.log(iAmViv)
// console.log(typeof (iAmViv))

// // TEST 2.0

// var x1 = 10 + "20";
// console.log(x1)
// console.log(typeof (x1))
// // 20 treated  as string


// var x2 = 9 - "5"
// console.log(x2)
// console.log(typeof (x2))
// //  5 treated as number

// /*console.log(x2)=4
// console.log(typeof(x2))=number
// $$$$$----BUG(2)----$$$$$
// subtraction can't applied  b/w 
// string and num
// */

// var x3 = "Java" + "Script"
// console.log(x3)
// console.log(typeof (x3))

// var x6 = "Java" - "Script"
// console.log(x6)
// console.log(typeof (x6))
// //in js you can not subtarct strings 
// //NaN= not a number
// //only numbers can be subtracted

// var x4 = " " + " "
// console.log(x4)
// console.log(typeof (x4))
// // " " it is known as empty string

// var x5 = " " + 0
// console.log(x5)










// //BOOLEAN

// var x7 = true + true
// console.log(x7)
// console.log(typeof (x7))

// var x8 = false + true
// console.log(x8)
// console.log(typeof (x8))

// var x10 = false - true
// console.log(x10)
// console.log(typeof (x10))

// var x9 = false + false
// console.log(x9)
// console.log(typeof (x9))
// // in js true=1   false=0




// // 1.INTERVIEW QUESTION
// /* what is differnce b/w null and undefined?
// ANS:
//     NULL=>     var y= null ;
//          null value is assigned to  var 
//          data type= object (in js)
//          which is a bug

//     UNDEFINED=> var y1= ;
//          no value is assigned to var
//           data type= undefined
//     */

// // 2.INTERVIEW QUESTION
// /*
// what is NaN?
// ans=> 
// NaN= not a number
// this is output iin js for string - string
// it is neither a no. nor a string
// it is just a propety of global object

// */

// // // use of NaN
// var myPhoneNumber = 9116018969;
// var myName3 = " vish";
// console.log(myPhoneNumber);
// console.log(isNaN(myPhoneNumber));

// console.log(myName3);
// console.log(isNaN(myName3));

// if (isNaN(myPhoneNumber)) {
//     console.log('plz enter valid  phone number ')
// }
// else {
//     console.log("your contact is saved")
// }


// var myPhoneNumber2 = '9116vadjv';
// console.log(myPhoneNumber2);
// console.log(isNaN(myPhoneNumber2));

// if (isNaN(myPhoneNumber2)) {
//     console.log('plz enter valid  phone number ')
// }
// else {
//     console.log("your contact is saved")
// }


// // // TEST.3

// NaN == NaN;
// console.log(NaN == NaN)

// Number.NaN == NaN;
// console.log(Number.NaN == NaN)

// isNaN(NaN);
// console.log(isNaN(NaN))            //####doubt###########

// isNaN(Number.NaN);
// console.log(isNaN(Number.NaN))

// Number.isNaN(NaN);
// console.log(Number.isNaN(NaN));



// //***********CHAPTER-4********************
// //EXPRESSION AND OPERATOR
// // 1.Assigņment operators
// // 2.Arithmetic operators
// // 3.Comparison operators/relational operator
// // 4.Logical operators
// // 5.String operators
// // 6.Conditional (ternary) operator


// //********-------1Assignment operators--------******
// // An assignment operator assigns a value to its left operand
// // based on the value of its right operand.
// // The simple assignment operator is equal (=)
// var x11 = 5;
// var y2 = 5;
// console.log(x11 == y2)
// console.log("Is both the x and y are equal" + x11 == y2);

// // I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x11 == y2}`);


// // 2 .Arithmetic operatorsfgh
// // An arithmetic operator takes numerical values
// // (either literals or variables) as their onerands-
// // returns a single numerical value.
// console.log(3 + 3);
// console.log(10 - 5);
// console.log(20 / 5);
// console.log(5 * 6);
// console.log("Remainder Operator " + 81 % 8);


// //3.Increment and Decrement operator
// // Operator: x++ or ++x or x-- or --x
// // If-used postfix, with operator after operand (for example, x++),
// // the increment operator increments and returns the value before incrementing.
// //
// // If used prefix, with operator before operand (for example, ++x),
// // the increment operator increments and returns the value after incrementing.
// //similar is for decrement operator


// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

// var num1 = 16;
// var newNum1 = ++num1;
// console.log(num1);
// console.log(newNum1);

// var num2 = 17;
// var newNum2 = num2--;
// console.log(num2);
// console.log(newNum2);

// var num3 = 16;
// var newNum3 = --num3;
// console.log(num3);
// console.log(newNum3);



// // 3. Comparison operators
// // A comparison operator compares its operands and
// // returns a logical value based on whether the comparison is true.
// var a = 30;
// var b = 10;
// // Equal (=)
// console.log(a == b);
// // Not equal (!=)
// console.log(a != b);
// //  Greater than (>)
// console.log(a > b);
// //  Greater than or equal (>=)
// console.log(a >= b);
// // Less than (<)
// console.log(a < b);
// // Less than (<=)
// console.log(a <= b);


// // 4. Logical operators
// // Logical operators are typically used with Boolean (logical) values;
// // when they are, they return a Boolean value.
// var a = 30;
// var b = -20;
// // Logical AND (&&)
// // The logical AND (&&) operator (logical conjunction) for a set of
// // operands is true if and only if all of its operands are true.
// console.log(a > b && a > 0 && b < 0)
// console.log(a > b && a < 0 && b < 0)
// // Logical OR (||)
// // The logical OR ( || ) operator (logical disjunction) for a set of
// // operands is true if and only if one or more of its operands is true.
// console.log(a > b || a > 0 || b < 0)
// console.log(a > b || a < b || b < 0)

// // Logical NOT (!)
// // The logical NOT (!) operator (logical complement, negation
// // takes truth to falsy and vice versa.
// console.log(!((a > 0) || (b < 0)));
// console.log(!true);


// // 5 .String Concatenation(operators)
// // The concatenation operator (+) concatenates two string values together,
// // returning another string that is the union of two perrand strings
// console.log("Hello World");
// console.log("Hello " + "      world");
// var myName = "vinod";
// console.log(myName + " thapa");
// console.log(myName + "bahadur");
// console.log(myName + "bahadur Thapa");





// //TEST 4
// /* 1.What will be the output of 3**3?
//   2.What will be the output, when we add a number and a string?
//  3.Write a program to swap two numbers?
// 4.Write a program to swap two numbers w/o using third  variable?
// */
// //******ANSWER
// //1.
// console.log(3 ** 3)
// //  power(**) operator // exponentiation operrator  eg;
// console.log(3 ** 5)
// console.log(5 ** 5)
// console.log(2 ** 5)
// console.log(10 ** 5)
// console.log(3 ** 0)

// //2.
// //string eg;
// console.log("vish" + 10)
// console.log(typeof ("vish" + 10))

// //3. 
// //using third varible
// var z = 15;
// var z2 = 16;
// var z3 = z; //z3=15
// z = z2;     //z=16
// z2 = z3;     // z2=15
// console.log(z)
// console.log(z2)
// //output z=16  z2=15

// //4.
// //w/o using third  variable
// var z1 = 15;
// var z3 = 16;
// z1 = z1 + z3     //z1=31
// z3 = z1 - z3    //z2=15
// z1 = z1 - z3   //z=16
// console.log(z1)
// console.log(z3)
// //output z1=16  z3=15

// //3. interview question
// // what is difference among = ,  ==   and ===
// // = assign value to a variable
// //== check/compare only the value of var
// //but === check/compare both data type and value eg.
// var num1 = 5;
// var num2 = '5';
// console.log(num1 == num2)
// console.log(num1 === num2)










// /*-----------CHAPTER4---------------------------
//                 CONTROL STATEMENT & LOOPS       */

// /* 
// 1. simple if/   If.Else  /  nested if else /  if else if ladder 
// 2.Switch Statement
// 3.While Loop
// 4.Do-While Loop
// 5.For Loop
// 7.For in Loop
// 8.For of Loop
// 9.Conditional (ternary) operator

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison
// Theat
//  */

// /* 1.  If... Else    */
// // The if statement executes a statement if a specified condition is truthy.
// // If the condition is falsy, another statement can be executed.

// var tomr = 'sunny';

// if (tomr == 'rain') {
//     console.log('take a raincoat');
// }
// else {
//     console.log('No need to take a raincoat')
// }


// //Test.5
// /* write a program that works out whether if a given year is a leap year or not?*/
// // A normal year has 365 days, leap years have 366, with an extra day in February.
// /*
// How to know if it is a Leap Year:
// 1.Leap Years are any year that can be exactly divided     by 4 (such as 2016, 2020, 2024, etc)
//  2.except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
// 3.except if it can be exactly divided by 400, then it is (such as 2000, 2400)
// */
// var year = 2020;

// if (year % 4 === 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("the year" + year + "is a leap year")

//         }
//         else {
//             console.log("the year" + year + "is not a leap year")

//         }


//     }
//     else {
//         console.log("the year" + year + "is a leap year")
//     }


// }
// else {
//     console.log("the year" + year + "is not a leap year")
// }



// // What is truthy and falsy values in Javascript?
// //  we have total 5 falsy values in javascript
// /* 1. 0
//    2.""  empty braces
//    3.undefined,
//    4.null
//    5.NaN,    
//  $$$$$   false** is false anyway */

// if (score = 0) {
//     console.log("Yay, We won the game ");
// }
// else {
//     console.log("OMG, we loss the game ");}

// if (0) {
//     console.log("Yay, We won the game ");
// }
// else {
//     console.log("OMG, we loss the game ");}

// if (null) {
//     console.log("Yay, We won the game ");
// }
// else {
//      console.log("OMG, we loss the game ");}

//  if (undefined) {
//      console.log("Yay, We won the game ");
//  }
//  else {
//      console.log("OMG, we loss the game ");}
// if (NaN) {
//     console.log("Yay, We won the game ");
// }
// else {
//         console.log("OMG, we loss the game ")}

// if (false) {
//     console.log("Yay, We won the game ");
// }
// else {
//     console.log("OMG, we loss the game ");
// }
// // if me false condition else ko print karata hai
// if (true) {
//     console.log("Yay, We won the game ");
// }
// else {
//     console.log("OMG, we loss the game ");
// }


// // 2.TERNARY OPERATOR
// // The conditional (ternary) operator is the only JavaScript operator that takes three operands

//  /*var age;
// variablename =  (condition) ?    value1    :       value2
                    
//               (age> 18)     If true    if false         */
//  //$$$$$$$$$--------- ternary operator is alternative  of if-else---------------$$$$$$$$$$$$$
//   var age = 17;
//   if (age >= 18) {
//       console.log("you are eligible to vote");
//   }
//   else {
//       console.log("you are not eligible to vote");
//   }
  
//    //using terrnary operator
//   var age = 17;
//   console.log((age > 18) ? "you can vote" : "you can't vote");


//  // 3 .switch Statement(alternative else if ladder)
//  // Evaluates an expression, matching the expression's value to a
//  // case clause, and executes statements associated with that case.
//  // 1st without break statment
//  // Find the Area of circle , triangle and  rectangle?


// // else if ladder else

//  var area= "triangle" ;
//  var PI = 3.142, l=5, b=4, h=10 ,r=3
//  if(area ==="circle"){
//  console.log("the area of the circle is : " + PI*r**2);
//  }
//  else if(area ==="triangle")
//  {
//  console.log("the area of the triangle is : " + (h*b)/2);
//   }
//   else if(area === "rectangle")
//   {
//       console.log("the area of the rectangle is : " + (l*b))
//  }

//  else{console.log("please enter valid data"); }



// //switch ()
// var area1 = "triangle";
// var PI = 3.142, l = 5, b = 4, h = 10, r = 3;
// switch (area1) {
//     case 'circle':
//         console.log("the area of the circle is : " + PI * r ** 2);
//         break;
//     case "rectangle":
//         console.log("the area of the rectangle is : " + (l * b));
//         break;
//     case "triangle":
//         console.log("the area of the triangle is : " + (h * b) / 2);
        
//     default:
//         console.log("please enter valid data");
//         b
// }




// //While Loop Statement
// // The while statement creates a loop that executes a specified statement
// // as long as the test condition evaluates to true.

// /*
// var num12=0;
// while(num12< 10){ 
// console.log(num12); //infinte loop
// }
// */

// var num13=0;
// while(num13 < 10){
//     console.log(num13); //finite loop
//     num13++;
//     }


//  var num11=20;
//  // block scope
//  while(num11 < 20){
//      console.log(num11); 
//      num11++;
//      }
  


//      // DO WHILE LOOP 
// var numb=30
//      do{
//          console.log(numb);//first run loop for once then check condition whether it is false or true
//          numb++;
//      }while(numb<=30);//  now numb=31 it is checking for 31<=30 which is false so it will not run loop for second time 
     

// var numb=30
//      do{
        
//          console.log(numb);
//          numb++;
//      }while(numb<40);


// // FOR LOOP

// /*for(initializer; condition; iteration)
// {
//  Code to be executed
// }
// */
// for(var nums = 0; nums<=10; nums++)   
//    {
//        console.log(nums);
//     }
    
    

// // TEST .6
// // JavaScript program to print table for given number
// // (8,9,12,15) using for Loop?

// for(var i=0;i<=10;i++){
//     table=8*i
//     tableof=9
// console.log(tableof+"x"+i +"=" +table)
// }


// /*  ------FUNCTION-----------------

// #1 Function Definition
// #2 Calling a Function
// #3 Function Parameter
// #4 Function Arguments
// #5 Function expressions
// #6 Return Keyword
// #7 Anonymous Function

// */


// /***  -----------Functions in JavaScript -------------
// A JavaScript function is a block of code designed to perform a particular task.
// __________Function Definition___________________________
// => Before we use a function, we need to define it.
// A function definition (also called a function declaration, or function statement)consists of the function keyword, followed by:
// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {... }.


// function  functionName(){
//     //statement
// }
// ****/

// /*
//   var a=10
//   var b=20
//   var sum=a+b
//   console.log(sum)
// */


// // function sum(){
// //     var a=10            
// //     var b=20                //function declaration or 
// //     var total=a+b           // defnition   
// //     console.log(total)
// // }


// // sum()          //function calling

// function sum(a,b){
//                        //function declaration or 
//     var total=a+b      // defnition  
//                        // a and b are parammeter 
//     console.log(total)
// }

// sum()
// sum(20,30)    //function calling
// sum(30,40)    //   30 and 40 are arguements       
            
// sum(40,60)




// // ------------------INTERVIEW QUESTION----------------- 

// /* what is the difference b/w finction parameter and function arguements

// ANS===>
// 1.Function parameters are the names listed in the function's definition.
// 2.Function arguments are the real values passed to the function. while calling


// why to use finction?
// ANS===>
// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments,to produce different results.

// OR

// A function is a group of reusable code which can be called anywhere
// in your program. This eliminates the need of writing the same code
// again and again.

// DRY===> do not  repeat 
// */

// //-------------Function expressions-----------------
// // Function expressions simply means
// // create a function and put it into the variable
// function sum(a,b){
// var total = a+b;
// console.log(total);
// }
// var funExp =sum(5,15);
// console.log( funExp);
     

//  /*
//  ------------Return Keyword-------------------------
//  When JavaScript reaches a return statement,
//  the function will stop executing.
//  Functions often compute a return value.
//  The return value is "returned" back to the "caller"*/

 
//  function sum(a,b){      //a,b==> parameter
//  return a+b;}           //fn declaration
//  var fundo= sum(4,26)  // fn expression & 4,26==> arguement
//  console.log(fundo)   // fn calling


//  /* #######--------------Anonymous Function------------
//  A function expression is similar to and has the same syntax
//  as a function declaration One can define "named"
// function expressions (where the name of the expression might
// " be used in the call stack for example)
// or "anonymous" function expressions.
// */
// var funExt = function(a,b){
//     return total = a+b;            // this fn has no name 
//     }

    
//     console.log(funExt(4,100));    // calling
    
 
 











//     /********* MODERN JAVA  SCRIPT ******** 


//     1996  =====>  JavaScript was created
//     1997 ====>    It was then submitted to ECMA International for standardization  , which
//     resulted in ECMAScript

//     2015 ===> (es6 or ecma script)  deccide to switch to annual releases of ECMA script
    
//     JAVA script(ecma script 2015/ es6)
//     1.LET AND CONST
//     2.TEMPLATE STRINGS
//     3.DEFAULT ARGUMENTS/parameters
//     2.DESTRUCTURING

//     4.O OBJECT PROPERTIES
//     
//     6.ARROW FUNCtion
//     7.SPREAD OPERATORS
//     8.REST OPERATORS

//     */
// // 

// // Features of ECMAScript 2015 also known as ES6
// // 1. LET VS CONST vs VAR
// // var⇒ Function scope 
// // let and const⇒ Block Scope({}) if something is defined in parent block can be used in  child block but vice versa is not true

/*  // const
function biodata() {
  let myFirstName = "Vinod"  ;
     console.log(myFirstName) ; 

        if(true)   { 
           let myLastName = "thapa";
           
           console.log('inner' + myLastName)
           console.log('inner' + myFirstName)
   }
 //  console.log('innerOuter' + myLastName); $$$ error $$$$  b/c let is block scope
   console.log('innerOuter' + myFirstName);
 }
 biodata();
  //  console.log(myFirstName);

*/     


/*
  // let
    function biodata() {
    let myFirstName = "Vinod"  ;
    console.log(myFirstName) ; 

    if(true)   { 
    let myLastName = "thapa";
              
    console.log('inner' + myLastName)
    console.log('inner' + myFirstName)
      }
    //  console.log('innerOuter' + myLastName); $$$ error $$$$  b/c let is block scope
      console.log('innerOuter' + myFirstName);
    }
    biodata();
     //  console.log(myFirstName);

*/


   
  /*    //var
        function biodata() {
        var myFirstName = "Vinod";
        
        console.log(myFirstName);
        
        if(true){   
        var myLastName = "thapa";
        console.log('inner' + myLastName)
        console.log('inner' + myFirstName)
         }
        console.log('innerOuter' + myLastName);
         }
         biodata();
        // console.log(myFirstName);  *****error****** b/c var is function scope 
        
  */


  // 2 Template literals (Template strings)
// JavaScript program to print table for given number (8)?
// output: 8 * 1 = 8
//8 * 2 = 16 (8*2)
//8 * 10 = 80

/* for(let num = 1; num <=10; num++)
 {
 let tableOf = 12;
 console.log(tableOf + " *" + num  + "=" + tableOf * num);

 }
 */
// using tempelate literals
for(let num = 1; num <=10; num++)
 {
 let tableOf = 12;
 console.log(`${tableOf}*${num}=${tableOf*num}`);

 }
  

 // 3. Default Parameters
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

  function mult(a,b)
  {
  return a*b;
  }
  console.log(mult(3,5));  //passed two arguements
  //output =15
  console.log(mult(3));    // passed single arguement
  //output=NaN b/c we are required to pass atleast two arguements
  function mult(a,b=5)  // here 5 is default value of parameter b
  {
  return a*b;
  }
  console.log(mult(3,5));  //passed two arguements
  //output =15
  console.log(mult(3));    // passed single arguement
  //output=15 b/c 3 is provided to a and b has its default value 5



 // 4. Fat Arrow Function
// Normal Way of writing Function
console.log(sum()); // called before defined but no error
function sum() {    // traditional function
let a = 5; b = 6;
// let sum = a+b;
return `the sum of the two number is ${a+b}`;
}
//How to convert in into Fat Arrow Function
//console.log(sum1());
//output= error
const sum1 = () => {
  let a = 5; b = 6;    //fat arrow function
  // let sum1  =  a+b;     // should called after defined 
  return `the sum of the two number is ${a+b}`
  }
  console.log(sum1());
  // using literals

const sum2 =()=>{
  return`the sum of the two number is ${(a=5)+(b=6)}`
}
console.log(sum2())
  




/**** Section 7 Arrays in JavaScript ****/
// When we use var, we can stored only one value at a time.
var friend1 = 'ramesh';
var friend2 = 'arjun';
var friend3 = 'vishal';
var myFriends = ['ramesh',22, , 'arjun',20, 'vishal', true, 52];  // array

// When we feel like storing multiple values in one var
// instead of var, we will use an Array.
// In JavaScript, we have an Array class, and
// arrays are the prototype of this class.
// example

              //Lower Boundary
              //Lower Index/
var Names = [ "vinod","bahadur " ,"thapa"]
//  Index:        0       1        2

                                 //Upper Index
                                 //Upper Boundar-
/*
WHAT WE WILL DO


1.Traversal of an Array

2.Searching and Filter in an Array

3.How to Sort and Compare an Array
4. How to Insert, Add, Replace and Delete Elements in Array(CRUD)
5.Map(), Reduce(), Filter()



*/
//*************1.Traversal in array****************
//  Array Subsection 1
// navigate through an array
// if we want to get the single data at a time and also
// if we want to change the data
var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// to print particular element of a string
console.log(myFriends [3]);

// if we want to check the length of elements of an array
console.log(myFriends.length);

// if we want to print last element of a string
console.log(myFriends[myFriends.length-1]);

// we use for loop to navigate
var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
 for(var i=0; i<myFriends.length; i++)
 {
console.log(myFriends[i]);
}  

// After ES6 we have for..in and for.. of loop too
//for in loop =>  array ke elements ka index deta
var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
for(let elements in myFriends) {
console.log(elements);
}
//for of loop =>  array ke elements deta
var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
for(let elements of myFriends) {
console.log(elements);
}


// Array.prototype.forEach() => array and  elements and index deta hai
// Calls a function for each element in the
var myFriends = ['vinod','ramesh','arjun','vishal'];
myFriends.forEach(function(element, index, array)
{ 
 console.log(element + "   index:" + index +"  "+ array)
});
// we can't use break here ek bar start ho gya to khatam ho ke hi manega  

// using fat arrow function
var myFriends = ['vinod','ramesh','arjun','vishal'];
myFriends.forEach((element, index, array)=>{ 
 console.log(element + "   index:" + index +"  "+ array)
});

//*****************2.Searching and Filter in an Array*****
// Array Subsection 2 --Searching and Filter in an Array


//__________ Array.prototype.indexOf()_________________
// it search element from lefttoright i.e forward-search
// Returns the first (least) index of an element within the array  or -1 if none is found.
//  by defult it search the element from the 0th index number(it include 0th index)
// but we can make it search from any index eg nth index
 var myFriendNames = ["vinod", "bahadur","thapa", "thapatechnical","thapa"];
 // searching element thapa from 0 index
 console.log(myFriendNames.indexOf("thapa"));
 // output =2  ,it  is index of first occurence of element "thapa "
 console.log(myFriendNames.indexOf("thapa",3));
 //output=4
 console.log(myFriendNames.indexOf("thapa",4));
 // output=4
 console.log(myFriendNames.indexOf("Thapa",4));
 //output=-1 b/c Thapa is not present in array


 //_____________Array.prototype.lastIndexOf()_____________
 // it search element from  righttoleft i.e backward-search
// Returns the last (greatest) index of an element within the array equal
// to an element, or -1 if none is found. It search the element last to first
var myFriendNames = ["vinod", "bahadur", "thapa", "thapatechnical", "thapa"];
console.log(myFriendNames.lastIndexOf("thapa"));
//output=4
console.log(myFriendNames.lastIndexOf("thapa",3));
//out=2
console.log(myFriendNames.lastIndexOf("thapa",1));
//out=-1



//____________Array.prototype.includes()__________________
// forward search
// Determines whether the array contains a value,
// returning true or false as appropriate.
var myFriendNames = ["vinod", "bahadur", "thapa", "thapatechnical", "thapa"];
console.log(myFriendNames.includes("thapa"));
//out= true
console.log(myFriendNames.includes("Thapa"));
//out=false
console.log(myFriendNames.includes("thapa",3));
//out = true



//____________Array.prototype.find()_____________________
// arr.find(callback(element[,index[, array]])[, thisArg])
// Returns the found element in the array, if some element in the
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

const prices = [200, 300, 350, 400, 450, 500,600];
// price < 400
// const findElem = prices.find((currval) => {
// return currval < 400;
// });
// console.log(findElem);
//out =200 b/c it return only one value
console.log( prices.find((currVal) => currVal < 400 ) );
console.log( prices.find((currVal) => currVal > 1400 ) );
// console.log(prices.find((currval)  => 200 < currval >500))






//___________Array.prototype.findIndex()_______________
// Returns the found index in the array, if an element in the
// array satisfies the testing function, or -1 if not found.
// it return only one element
console.log( prices.findIndex((currVal) => currVal < 400 ) );
console.log( prices.findIndex((currVal) => currVal > 1400 ) );



// Array.prototype.filter()
// Returns a new array containing all elements of the calling
// array for which the provided filtering function returns true.
const prizes = [200, 300, 350, 400, 450, 500, 600];
// price < 400
const newPrizeTag = prizes.filter((elem, index) => {
return elem < 400;
})
//console.log(newPrizeTag);
const newPrizeTag1 = prizes.filter((elem, index) => {
  return elem > 1400;
})
console.log(newPrizeTag1);



//**************3.How to Sort and Compare an Array*******
//  Array Subsection 3 --- How to sort an Array

// Array.prototype.sort()
// The sort() method sorts the elements of an array in place and
//returns the sorted array. The default sort order is ascending,built
//upon converting the elements into strings,
// then comparing their sequences of UTF-16 code values


 const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];
  console.log(months.sort());
  // short in alphbaetic order


  // However, if numbers are sorted as strings,
// "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce an incorrect
// result when sorting numbers.

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());
// first no. is converted to string/
// then sort in ascending order



//4. How to Insert, Add, Replace and Delete Elements in Array(CRUD)

// 4 Array Subsection  Perform CRUD

//--------------Array.prototype.push()---------------
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array
{const animals = ['pigs', 'goats', 'sheep'];
 const count =animals.push('chicken');
console.log(animals)
console.log(count)

animals.push('hen', 'cats', 'dog');  
console.log(animals)
}
//--------------Array.prototype.unshift()---------------
// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.
/*
{const animal = ['pigs', 'goats', 'sheep'];
const count =animal.unshift('chicken');
console.log(animal)
console.log(count)  // will return length of array

animal.unshift('hen', 'cats', 'dog');
console.log(animal)
}


{
  const myNumbers=[1,2,3,4,5];
  myNumbers.unshift(4,6);
  console.log(myNumbers);
}
*/

//--------------Array.prototype.pop()----------------
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.

// using {} b/c const is block scope that help us to use same code w/o error for multiple time
/*
{const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.pop()); // will return last  element of arraay
console.log(plants);
}
*/

//----------- Array.prototype.shift()---------------
// The shift() method removes the first element from an array and returns
// that removed element. This method changes the length of the array.
// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'
/*
{
const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.shift()); // will return first element
console.log(plants);
}
*/
//-------------------test--------------------------------
// given arry is const months = ['Jan', 'march', 'April', 'June', 'July']
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
//4: Delete June from an array?


//splice method
//Array.prototype.splice()
//Adds and/or removes elements from an array.
// it returns removed element

{
//sol 1:
const months = ['Jan', 'march', 'April', 'June', 'July'];
//const newMonth = months.splice(5,0, "Dec");
const newMonth = months.splice(months.length,0, "Dec");
console.log(months);

//sol:2
console.log( newMonth);


// sol:3
//const updateMonth = months.splice(1,1, "March");
//console.log(months);

//or

//const updateMonth = months.splice(months.indexOf('march'),1, "March");
//console.log(months);

//or
const indexOfMonth  = months.indexOf('march');
if(indexOfMonth  != -1)
{
  const updateMonth = months.splice(indexOfMonth, 1, 'March');
  console.log(months);
  }else{
  console.log('No such data found');
  }
const indexOfMonth2  = months.indexOf('june');
if(indexOfMonth2  != -1)
{
  const updateMonth = months.splice(indexOfMonth, 1);
  console.log(months);
  }else{
  console.log('No such data found');
  }

}


// 5.Array Subsection 4 ==> Map() filter()and Reduce() Method
// Array.prototype.map()
// let newArray = arr.map(callback(currentValue[, index[, array [, thisArg]);
//return element for newArray, after executing something
//
// Returns a new array containing the results of calling a
// function on every element in this array.
 {
  
// num>9
const array2 = [1, 4, 9, 16, 25]
let newArr= array2.map((curElem,index,arr) => {
  return curElem >9;

})
console.log(array2);
console.log(newArr);
}
{ 
  const array1 = [1, 4, 9, 16, 25]
  let newArr= array1.map((curElm,index, arr) => {
    return `Index no = ${index} and the value is ${curElm} belong to ${array1}` 
})
console.log(newArr);
}
{
  const array1 = [1, 4, 9, 16, 25]
  let newArr= array1.forEach((curElm,index, arr) => {
    return `Index no = ${index} and the value is ${curElm} belong to ${array1}` 
})
console.log(newArr);

}
//--------------INTERRVIEW QUESTION-----------------------
// Difference b/w foreach and map
/*
1. The returning value
The first difference between map() and forEach() is the returning value. The forEach
() method returns undefined and map() returns a new array with the transformed
elements. Even if they do the same job, the returning value remains different.

2. Ability to chain other methods
The second difference between these array methods is the fact that map() is chainable.
This means that you can attach reduce(), sort(), filter () and so on after performing
a map() method on an array.
That's something you can't do with forEach() because, as you might guess, it returns un
defined.
*/



/*------------TEST-------------------------------------
1: Find the square root of each element in an array?
let arr = [25, 36, 49, 64, 81];
2: Multiply each element by 2 and return only those
elements which are greater than 10?
let arr = [2, 3, 4, 6, 8];
*/
//1.
{
  let arr = [25, 36, 49, 64, 81];
  let newArr= arr.map((curElem,inedx,arr)=>{

    return Math.sqrt(curElem);
  })
  console.log(newArr);

}

//2.
{
  let arr = [2, 3, 4, 6, 8];
  let newArr= arr.map((curElem,index, arr)=>{
    return curElem*2;

  
}).filter((curElem)=>{
  return curElem > 10;
}
)
  console.log(newArr);
}



/* Reduce Method
// flatten an array means to convert the 3d or 2d array into a
// single dimensional array
The reduce() method executes a reducer function (that you provide)
on each element of the array, resulting in single ou
The reducer function takes four arguments:
Accumulator
Current Value
Current Index
Source Array
*/
//Multiply each element by 2 and return sum of  only those elements which are greater than 10?

{
  let arr = [2, 3, 4, 6, 8];
  let newArr= arr.map((curElem,index, arr)=>{
    return curElem*2;

  
}).filter((curElem)=>{

  return curElem > 10;
} 

).reduce((accumulator, curElem)=>{


  
  return accumulator += curElem
},7)
  console.log(newArr)
}

// How to fatten an array
// converting 2d(array inside array)and 3d(array inside array inside array) array into one dimensional array

// 2D array
{
  const arr = [
  ['zone_1', 'zone_2'],
  ['zone_3', 'zone_4'],
  ['zone_5', 'zone_6'],
  ['zone_7', 'zone_8']
  ];
  let flatArr = arr.reduce((accum,currVal)=>{
    return accum.concat(currVal);
  })
  console.log(flatArr)
  // flatted completely
  }
  // 3D array
{
  const arr = [
  ['zone_1', 'zone_2'],
  ['zone_3', 'zone_4'],
  ['zone_5', 'zone_6'],
  ['zone_7',  ['zone_7', 'zone_8']]
  ];
  let flatArr = arr.reduce((accum,currVal)=>{
    return accum.concat(currVal);
  })
  console.log(flatArr)
  // not flatted completely
  }















/*
  *******************STRINGS IN JAVA SCRIPT***************

WHAT WE WILL DO
1. Escape Character
2. Finding a String in a String
3. Searching for a String in a String
4. Extracting String Parts
5. Replacing String Content
6. Extracting String Characters
7. other useeful methods

*/

/*********Section7----Strings in JavaScript-----********/
// A JavaScript string is zero or more characters written inside quotes.
// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes
// Strings can be created as primitives,
// from string literals, or as objects, using the String


{
  let myName = "vinod thapa";
console.log(myName.length);// it also count spaces
let myChannelName = 'vinod thapa';
let ytName = new String("Thapa Technical");
console.log((ytName));
}


//---------------------1.Escape Character---------------------------------------------




{let anySentence = "We are the so-called \"Vikings\"from the north.";
console.log(anySentence);}
// BACKSLASH ESCAPE CHARACTER
// The backslash (\) escape character turns special characters into string characters

/* if you dont want to mess, simply use the alternate quotes 
aap single quotes ke andar double quotes ko pass kr skte ho aur double quotes ke andar single quotes ko 
*/
{
  let anySentence = "We are the so-called 'Vikings'from the north.";

console.log(anySentence);
}
//or
{
  let anySentence = 'We are the so-called "Vikings"from the north.'
console.log(anySentence);
}







//2.----------------------Finding a String in a String-------------------
//String.prototype.indexOf(searchValue ,[ from Index])
// The indexOf() method returns the index of (the position of the first
// occurrence of a specified text in a string
// in case of abesence of specified text it will return -1
{
const myBioData = 'I am the Thapa Technical';
console.log(myBioData.indexOf("Thapa"));
console.log(myBioData.indexOf("T",7));
console.log(myBioData.indexOf("m",0));
console.log(myBioData.indexOf("m",7));




// // String.prototype.lastIndexOf(searchValue [, fromIndex]) C
//// Returns the index within the calling String object of the
//// last occurrence of searchValue, or -1 if not found.
}
{
const myBioData= 'I am the Thapa Technical';
console.log(myBioData.lastIndexOf("t", 6));
console.log(myBioData.lastIndexOf("l", 6));
}





//3.Searching for a String in a String
//String.prototype.search(regexp)
//The search() method searches a string for a specified value and returns the position of the match
//The search() method cannot take a second start position argument.

{
  const myBioData = 'I am the Thapa Technical';
  let sdata = myBioData.search("Thapa");
  console.log(sdata)
}
{
  const myBioData = 'I am the Thapa Technical';
  let sdata = myBioData.search("thapa");
  console.log(sdata)
}

// search is much similar as indexof the only differnce is that search will always start from first element i.e index =0 











/*---------------4.Extracting String Parts-----------------------------------------

 There are 3 methods for extracting a part of a string:
 1.slice(start, end)
 2.substring(start, end)
 3.substr(start, length)

 //1. The slice() Method
 slice() extracts a part of a string and returns the  extracted part in a new string.
 
The method takes 2 parameters: the start position,
and the end position (end not included).

The slice() method selects the elements starting at the
given start argument, and ends at end arguement , but does not include the given end argument.

Note: The original array will not be changed.

 */
{
  //1. The slice() Method
    var str ="Apple Bananaa Kiwi";
    let res =  str.slice(0,4); 
    //it will extract elements from index No. 0 to 3 (4 not included)

    //let res =  str.slice(0,-2);
    // last ke elements ko chod ke sabko extract krega

    //let res =  str.slice(4);
     //it will extract elements from index No. 4 to last element
   
    console.log(res);

}
//--------------- challenge Time---------------------

//Q: Display only 100 characters of a string like the one
//used in Twitter?
 let myTweet = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde in sunt neque, magnam quidem accusamus magni amet labore quaerat delectus beatae ipsa dignissimos eius rerum a incidunt dolorem repellendus esse animi laboriosam pariatur illum adipisci. A asperiores accusantium omnis laborum quo, fugit veritatis debitis, porro nulla sed, laudantium "
  let myActualTweet= myTweet.slice(0 ,100)
  console.log(myActualTweet)
 // to check we find length as below
  console.log(myActualTweet.length) 




{
//  2.substring(start, end)

// The substring() Method Ⓡ
// substring() is similar to slice().
// The difference is that substring() cannot accept
// negative indexes.
// If we give negative value then the characters are counted from the 0th position

var str = "Apple, Bananaa, Kiwi";
let res = str.substring(0,4);

//let res = str.substring(7,-2);
//it will start counting from 0th position 
console.log(res);
 
}

{  
   //3.substr(start, length)
   var str = "Apple, Bananaa, Kiwi";
   let res = str.substr(-4);
   // it will  extract last 4  elements
   console.log(res);
   

}









/*
//-----------------5.Replacing String Content()-------------------------------------------

String.prototype.replace(searchFor, replaceWith) 
The replace() method replaces a specified value
with another value in a string.

Points to remember
1: The replace() method does not change the string 
it is called on. It returns a new string.
2: By default, the replace() method replaces only the first match
3: By default, the replace() method is case sensitive.



*/ 
{
  
  let myBioData = `I am vinod bahadur thapa vinod`;
  let replaceData = myBioData.replace('vinod', 'vishal')
  console.log(replaceData)
  
}








/*-------------------6.Extracting String Characters--------------------------------------------
There are 3 methods for extracting string character
1.charAt(position)
2.charCodeAt(position)
3.Property access [ ]

*/

{
  /*
1.The charAt() Method 
The charAt() method returns the character at a
specified index (position) in a string
*/
let str= "hello world"
console.log(str.charAt(0))

}


{
  /* 
 2.The charCodeAt() Method
 The charCodeAt() method returns the unicode of the
 character at a specified index in a string:
 The method returns a UTF-16 code
 (an integer between 0 and 65535).
 
 The Unicode Standard provides a unique number for every
 character, no matter the platform, device, application,
 or language. UTF-8 is a popular Unicode encoding which
 has 88-bit code units.

*/
var str = "HELLO WORLD";
console.log( str.charCodeAt(0) );
}


//-----------------test----------------------------
//Return the Unicode of the last character in a string
//solution;
let stri="hello world"
let lastElement= stri.length;
console.log(lastElement)
console.log(stri.charCodeAt(lastElement-1))
//$$$$$console.log(stri.charCodeAt(lastElement)
// this will return NaN b/c length of string is one greater than index of last element



{
 // 3.Property access [ ]
 // ECMAScript 5 (2009) allows property access [] on strings
var str = "HELLO WORLD";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[05]);  
}











//--------------------------7. Other useful methods------------------------------

{
 // 1.converion to uppercase or lower case
let myName = "vinod tHapa";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
}

{
//2. The concat() Method to
// concat() joins two or more strings
let fName = "vinod"
let lName = "thapa"
console.log(fName + lName);
console.log(fName.concat(lName));
console.log(fName.concat("-",lName));


// sike that's wrong number
console.log(`${fName} ${lName}`);
// recomended
// literals is best method forever
}


{
// 3.String.trim()
// The trim() method removes whitespace from both
// sides of a string but do not interrupt spaces  in 
// b/w   string
var str = "          Hello     World         "
console.log(str.trim());
}


{

// 4.Converting a String to an Array
// A string can be converted to an array with the
// split() method


var txt = "a,b,c,d,e";             // String
console.log(txt.split(","));      // Split on commas
console.log(txt.split(" "));     // Split on spaces
console.log(txt.split("|"));    // Split on pipe



}








/* Section 8, Date and Time in JavaScript 

 JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since
  1 January 1970 UTC.

------------Creating Date Objects----------

There are 4 ways to create a new date object:
1.new Date()
2.new Date(year, month, day, hours, minutes, seconds, milliseconds)
// it takes 7 arguments
3.new Date(milliseconds)
// we cannot avoid month section
4.new Date(date string)
*/ 

{
  
// 1.new Date()
// Date objects are created with the new Date() constructor.


let currDate = new Date();
console.log(currDate);
// return
//Date Wed Jun 08 2022 22:32:39 GMT+0530 (India Standard Time)

//or
console.log(new Date());
// return
//Date Wed Jun 08 2022 22:32:39 GMT+0530 (India Standard Time)

//or
console.log(new Date().toLocaleString()); 
// return
//8/6/2022, 10:32:39 pm

//or
console.log(new Date().toString());
// return
//Wed Jun 08 2022 22:36:59 GMT+0530 (India Standard Time) 

console.log(Date.now());
// return time in milli sec from  1 January 1970 
//1654708706631

}


{

// 2.new Date(year, month,  day, hour, minute, second, millisecond) 
// 7 numbers specify year, month, day, hour, minute, second and millisecond (in that order)

// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.
var d = new Date(2021, 0, 5, 10, 33, 30, 0);
console.log(d.toLocaleString());
var c = new Date(2021, 0, 5, 20, 33, 30, 0);
console.log(c.toLocaleString());
var a = new Date(2021, 0, 5);
console.log(a.toLocaleString());
// new Date(dateString)
// new Date(dateString) creates a new date object from a date


}


{
  
// 3.new Date(dateString)
// new Date(dateString)
//creates a new date object from a date
  var d = new Date("October 13, 2022 11:13:00");
 console.log(d);
}

{
//4. new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time pllus millisecond

 var d = new Date(0);
console.log(d.toLocaleString());

var d = new Date(1609574531435);
console.log(d.toLocaleString());

var d = new Date(86400000*2);
// 1day = 86400sec = 86400000millisec
console.log(d.toLocaleString());
}



 // -------------------Dates Method-----------------------

{
 
const curDate = new Date();
// *************** GET *****************************
// // how to get the indivisual date
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); // 0-11 jan to dec
console.log(curDate.getDate());
console.log(curDate.getDay());
}


{
const curDate = new Date();
// ****************SET********************************
//// how to set the indivisual date.
console.log(curDate.toLocaleString());
console.log(curDate.setFullYear(2022));
// the set full year() method can optionally set month and day
console.log(curDate.setFullYear(2022,10,5));

console.log(curDate.setMonth(10)); // 0-11 jan to dec
console.log(curDate.setDate(5));
//console.log(curDate.getDay());
// it is not  a function

}

{
//***************GET**************************
//Time Methods
const curTime = new Date();
//how to get the indivisual Time
console.log(curTime.getTime());
// // The getTime() method returns the number of milliseconds since jan 1, 1970
console.log(curTime.getHours());
// // The getHours() method returns the hours of a date as a number (0-23)
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

}


{
//*****************SET******************************
const curTime = new Date();
//// how to set the indivisual Time.
//console.log(curTime.setTime());
console.log(curTime.setHours (5));
console.log(curTime.setMinutes (5));
console.log(curTime.setSeconds (5));
console.log(curTime.setMilliseconds(5));
//
//
}

{
  // // Practice Time

// ---
new Date().toLocaleTimeString(); 
// returns only time
// 11:18:48 AM


new Date().toLocaleDateString();
// returns only date
// 11/16/2015

// ---
new Date().toLocaleString(); 
// returns both time-date
// 11/16/2015, 11:18:48 PM


}

















 /**** Section 9, Math Object in JavaScript ****/





// The JavaScript Math object allows you to perform 
//mathematical tasks on numbers.
//1. value of pi
 console.log(Math.PI);

// 2.Math.round()
// returns the value of x rounded to its nearest integer
let num= 10.2565;
console.log(Math.round(num));
let num2= 10.565;
console.log(Math.round(num2));

//3. Math.pow()
// Math.pow(x, y) returns the value of x to the power of y
console.log(Math.pow(2,3));
//or
console.log(2**3)

//4. Math.sqrt()
// Math.sqrt(x) returns the square root of X
console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));

//5. Math.abs()
// Math.abs(x) returns the absolute (positive) value of x
 console.log(Math.abs(-55));
 console.log(Math.abs(-55.5));
 console.log(Math.abs(-955));
 console.log(Math.abs(4-6));

//6.Math.ceil()
// Math.ceil(x)   returns the value of x rounded up to its nearest integer
//update the farctional num to  next integer
console.log(Math.ceil(4.4));
//( 4.4-0.4) + 1= 5
//(num - fractional part) +1 = output
console.log(Math.round(4.4));
console.log(Math.ceil(99.1));
console.log(Math.round(99.1));

//7.Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer
//(num - fractional part)-1 = output
console.log(Math.floor(4.7));
console.log(Math.floor(99.9));

// 8.Math.min()
// Math.min() can be used to find the lowest value in a list of argumen
console.log(Math.min(0, 150, 30, 20, -8, -200));

// 9.Math.max()
// Math.max() can be used to find the highest value in a list of argume
console.log(Math.max(0,150, 30, 20, -8, -200));

// 10.Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1(exclusive)
console.log(Math.random());// 0 to 1 (excluded)
console.log(Math.random()*10); //0 to 10(excluded)
console.log(Math.floor(Math.random()*10)); // 0 to 9
console.log(Math.ceil(Math.random()*10)); // 1 to 10
console.log(Math.round(Math.random()*10));// 0 to 10

// 11.Math.trunc()
// The trunc() method returns the integer part of a number
//positive arguement
console.log(Math.trunc(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));

//Negative arguement
console.log(Math.trunc(-99.1));
console.log(Math.floor(-99.1));
console.log(Math.ceil(-99.1));

//NOTE: if the argument is a positive number, Math.trunc() is equivalent to Math.floor(),otherwise Math.trunc() is equivalent to Math.ceil().







//***************_______  D O M  ___________**************
/*
 WHAT WE WILL DO
 Window vs Document
 DOM vs BOM
 DOM Navigation
 Searching and getting Elements Reference



-------------WINDOW VS DOCUMENT IN JAVASCRIPT-----------

--window----------------------

1: Window is the main container or we can say the
global Object and any operations related to entire
browser window can be a part of window object.
2: All the members like objects, methods or properties.
If they are the part of window object then we do not
refer the window object.
3:Window has methods, properties and object. ex
setTimeout() or setInterval() are the methods, where as
Document is the object of the Window and It also has
a screen object with properties describing the physical
display.

-----document---------------------

1: whereas the DOM is the child of window
object

2: Whereas in the DOM we need to refer
document, if we want to use the object, methods or properties

3: Document is just the
object of the global object that is Window,which deals with the document, the HTML elements themselves.



----------window-----------------

1.DOM
    document
       HTML
          BODY
            <a>
            <p>
          HEAD


          children:
                1.html is direct children of document
                2.body/head/<a>/<p> is  children of     document
                3.body/head is direct children of html
          parent:
                1.document is parent of html
                2.html is parent of body head
                3.body is parent of  <a>/<p>  head
          siblings:
                1.body/head are siblings of each other
                2. <a>/<p> are siblings of each other

               
               

2.BOM
    navigator
    screen
    location 
    frames
    history
    XMLHttpRequest

3.JavaScript
    Object
    Array
    Function

****************DOM VS BOM******************************
The DOM is the Document Object Model, which deals with the document,the HTML elements themselves, e.g. document and all traversal you would do in it, events, etc.
For Ex:
change the background color to red
document.body.style.background-=-"red";


The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen
(as well as some others that vary by browser). OR
In simple meaning all the Window operations which comes under BOM are performed using BOM
Let's see more practical on History object
Functions alert/confirm/prompt are also a part of BOM:
they are directly not related to the document,
 but represent pure browser methods of communicating withthe user.
alert(location.href);  //shows current URL
if (confirm("Want to Visit Thapa Technical?")) {
·location.href="https://www.youtube.com/thapatechnical"; /redirect  to the browser







 Section 3: Navigate through the DOM

1: document.documentElement
returns the Element that is the root element of the document.

2:document.head
return html of head
3: document.body
return html of body
4: document.body.childNodes (include tab, enter and whiteSpace)
list of the direct children only
5: document.children (without text nodes, only regular Elements)
6: document.childNodes.length
*/




//Practice Time
//How to check whether an element has child nodes or not?
//we will use hasChildNodes 
//document.givenElement.hasChildNodes
// it will return true if it is has child elements 
// it will return false if it is has no child elements 

// firstChild vs firstElementChild

//document.body.firstChild
//returns first elemenet 
// it consider whitespace as an element

//document.body.firstElementChild
//<div class="main-div">
// returns first elemenet 
// it do not consider whitespace as an element


// lastChild vs lastElementChild

//document.body.lastChild
//returns last elemenet 
// it consider whitespace as an element

//document.body.lastElementChild
//<div class="main-div">
// returns last elemenet 
// it do not consider whitespace as an element




// Practice Time
// find the child in DOM tree and change its color to red and then in yellow


// in domnavigation.html

/* 
followwing are steps 

 1. document.body.firstChild
=> #text "\n"

or

document.body.firstElementChild
=> <div class="main-div">

2.document.body.firstElementChild.firstElementChild
=> <div class="child-one">


3.const firstChild= document.body.firstElementChild.firstElementChild
=>undefined

4.firstChild
=> <div class="child-one">

5.firstChild.style.color="red"
=> "red"
6.firstChild.style.color="yellow"
=> "yellow" 


//OR

instead  of these all 6 steps we can just do this

document.querySelector(".child-two").style.color = "red";

document.querySelector(".child-two").style.color = "yellow";

 
*/

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling








// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//How to search the Elements and the References 
// Finding HTML Elements
// Often, with JavaScript, you want to manipulate HTML elements.

// To do so, you have to find the elements first. There are several ways to do this:

// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
//for id use # 
// for class use .
// Finding HTML elements by HTML object 

//https://www.w3schools.com/js/js_htmldom_elements.asp










/**** Section 11👉 EVENTS in JavaScript ****/


// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.



// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File

//https://www.w3schools.com/js/js_htmldom_events.asp




// section 2️⃣: What is Event Object?
// Event object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.



// section ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.


// https://www.w3schools.com/jsref/obj_keyboardevent.asp


// Section 5️⃣ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.








// 👉  JavaScript Timing Events

// **********************************************************************


// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()

//https://www.w3schools.com/js/js_timing.asp




// 👉 object oriented Javascript

// ******************************************************************************


// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

 { let bioData = { 
      myName : "vishal",
      myAge : 16,
      getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
       }
   }
   console.log( bioData.myAge)

   console.log( bioData.myName)

   bioData.getData();
}

// 2nd way no need to write functions as well after es6

 {
  
  let bioData ={ 
   myName : "vishal",
   myAge : 16,
   getData (){
     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
         }
    }
    console.log( bioData.myAge)

    console.log( bioData.myName)

    bioData.getData();

 }


// 👉 What if we want object as a value inside an Object 
{
  let bioData = { 
  myName : {
    realName : "vish",
    channelName : "vish here" ,
  },
  myAge : 26,
  getData (){
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  }
}
//to get the channel name
console.log(bioData.myName.channelName );
}


// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  

console.log(this)


//// For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


//// ex 2 
function myName() {
    console.log(this);
}
myName();



// // ex 3 

var myNames = 'vishal';
function myName1() {
    console.log(this.myNames);
}
myName1();


// // ex 4 
const obj = {
    myAge : 16,
    myName() {
      console.log(this.myAge);
    }
}
obj.myName();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

const obj1 = {
    myAge : 16,
    myName : () => {
      console.log(this);
    }
}
obj.myName();



// // ex 6

let bioData = {
    myName : {
        realName : "vishal yadav",
        channelName : 'WEBD ROCKSTAR'
    },
//     // things to remember is that the myName is the key and the object is act like a value 
    myAge : 16,
    getData (){
      console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
    }
  }

  bioData.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 
// // **********************************************************************





// Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.
// → Array Destructuring
//normal approach
{
const myBioData = ['vishal', 'yadav', 16];

let myFName = myBioData[0];
let myLName = myBioData[1];
let myAge = myBioData[2];

console.log(myFName);
console.log(myLName);
console.log(myAge);
}
// alternative by array destructuring
{
const myBioData = ['vishal', 'yadav', 16];

let[myFName,myLName,myAge]=myBioData;

console.log(myFName);
console.log(myLName);
console.log(myAge);
}

// we can add values too
{
const myBioData = ['vishal', 'yadav', 16];

let [myFName, myLName, myAge, myDegree="BTECH"]=myBioData;
console.log(myDegree);
}

// ➡ Object destructuring
//normal approach
{
const myBioData = {
myFname: 'vishal',
myLname :'yadav',
myAge : 16
}
let age = myBioData.myAge;
console.log(age)
}
// alternative by object destructuring
{
  const myBioData = {
  myFname: 'vishal',
  myLname :'yadav',
  myAge : 16
  }
  let{myFname,myLname,myAge,myDegree="btech"}= myBioData;
  console.log(myLname);
}


// 5 Object Properties

// ➡ we can now use Dynamic Properties
{
let myName = "vishal";
const myBio = {
[myName] : "hello how are you?",  // here we have use value of myName 
[20 + 6]: "is my age"  
}
console.log(myBio);
}



// ➡ no need to write key and value, if both are same
//normal approach
{
let myName = "vishal yadav";
let myAge = 26;
const myBio = {
myName: myName,
myAge: myAge
}
console.log(myBio);

}

// alternative 
{
  let myName = "vishal yadav";
let myAge = 26;
const myBio = {myName,myAge}
console.log(myBio);
}




// 7 Spread Operator
const colors = ['red', 'green', 'blue', 'white'];
//const myColors =['red', 'green', 'blue', 'white', 'yellow', 'black'];

// // 2nd time add one more color on top and tell we need to write it again
//// on myColor array too

 const MyFavColors= [...colors ,'yellow', 'black'];
//...Colors gives value of array colors
console.log(MyFavColors);


//****************ECMAScript 2016/ES7***********************
//1.Array.prototype.includes
//2.Exponentiation Operator
//alreaddy done

// ES8 (year 2017)Features
// String padding
// Object.values()
// Object.entries()


{
const message = "vish"
console.log(message);
console.log(message.padStart (8));
console.log(message.padEnd (8));



const person= { name: 'Fred', age: 87 };
console.log( Object.values(person));
//it will return values of object in form of array 
console.log( Object.entries(person) );
//it will return key and values of object in form of array 
const arrobj = (Object.entries(person));
console.log(Object.fromEntries(arrobj));
}


//****************ECMAScript 2018/ES7***********************

const person = { name: 'Fred', age: 87, degree : "mcs" };
const sPerson = { ... person };
console.log(person);
console.log(sPerson);


//****************ECMAScript 2019/ES8***********************

const arr = [['zone_1', 'zone_2'], ['zone_3', ['zone_4', 'zone_5', ['zone_6', 'zone_7']]]]
//3D array
console.log(arr);
console.log(arr.flat());
//OR  console.log(arr.flat());
//it will flatten  array to one level
console.log(arr.flat(2));
//it will flatten  array to two level
console.log(arr.flat(3));
//it will flatten  array to 3 level

console.log(arr.flat(Infinity));
//it will completely flatten  array


//Array.prototype. {flat, flatMap}
// Object.fromEntries()
 

//ES2020
//#1:BigInt
let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
//out 9007199254740991 
console.log( 9007199254740991 + 12);
//out 9007199254741004 wrong
const number = 9007199254740991 + 12;
console.log(typeof(number));
// number

console.log( 9007199254740991n + 12n);
//out 9007199254741003n  right
const newNumber = 9007199254740991n + 12n;
console.log(typeof(newNumber));
//bigint

const foo=null  ?? '0 string';
console.log(foo)


//USE STRICT 
x=3.14
console.log(x)

//but
"use strict";
x=3.14;
console.log(x);









//***************HOW JAVASCRIPT WORKS AND******************
//               ASYNCHRONOUS JAVASCRIPT

// 1 Hoisting in JavaScript

// 2 Scope Chain

// 3 Lexical Scoping in JavaScript

// 4 Closures in JavaScript

// 5 Use Strict Mode

// 6 This Keyword
//  
// 7 What is Asynchronous JavaScript Programming?

// 8 What is Event Loop?



// https://www.youtube.com/playlist?list=PLwGdqUZWnOp0hSGwas
// CjbrWSPrEKqB_kz



//*************Synchronous and Asynchronous Js**************


// //  Synchronous JavaScript Prog 
// ek kam complete ho jayega fir dusra kam suru hoga

// 1work = 10min
// 2work = 5s
{
const fun2 = () => {
console.log(`Function  2️⃣ is called`);
}

const fun1 = () => {
console.log(`Function 1 is called`);
fun2();
console.log(`Function 1 is called Again ✌`);
}
fun1();
}



// Asynchronous JavaScript Prog 
// multiple kam ek sath ho skte hai

{const fun2 = () => {
setTimeout(()=> {
    console.log(`Function 2️⃣  is called`);
}, 2000);
}

const fun1 = () => {
console.log(`Function 1 is called`);
fun2();
console.log(`Function 1 is called Again ✌`);
}

fun1();

}

//***************Hoisting in JavaScript******************** 

//Hoisting is JavaScript's default behavior of moving declarations to the top.


// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.

// For Example 
//https://www.w3schools.com/js/js_hoisting.asp

//Variables defined with let and const are hoisted to the top of the block, but not initialized.

// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared  with let are local to the surrounding block, not the entire function.)



//************scope Chain and Lexical Scoping************* 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

{
  
  let a = "Hello guys. "; // global scope
const first= () => {
  let b = " How are you?"

    const second = () => {
      let c = " Hii, I am fine thank you🙏";
      console.log(a+b+c);
    }
    second();
    console.log(a+b+c); //I can't use C 
}}

// first();



// //****************** Closures********

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// //  Example 1

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
      let sum = a+b;
      console.log(`the sum of the two no is ${sum}`);
    }
    innerFun();
}
outerFun(5);

let checkClousure = outerFun(5);
console.log(checkClousure);

// // it same like lexical scoping 
// // One more Example 👇

//  Example 2
var sum=function(a){
  console.log("Live Viewers "+a);
  var c=4;
  return function(b){
  return a+b+c;
  }
  }
  sum(2);//calling
  var store=sum (2); //calling
  console.log(store (5))

  // Example 3
  var sum=function(a,b,c){
    return {
    getSumTwo: function(){
    return a+b;},
    getSumThree: function(){
    return a+b+c;}
  }
  }
    var store=sum (3,4,5); //calling
    console.log(store.getSumTwo())
    console.log(store.getSumThree())



//**************** use strict ******************************


{
  "use strict"
let x = "vinod";
console.log(x);
}



//************event loop************************************












//****************ADVANCED JAVA-SCRIPT**********************
   


// 1. Event Propagation (Event Bubbling and Event Capturing)
// 2. Higher Order Function
// 3. Callback Function

// 4. Function Currying
// 5. CallBack Hell

// 6. Fetch API
// 7. AJAX call using XMLHttprequest
// 8. BONUS Section JSON
// 9  Promises
// 10 Async-Await
// 11 Error Handling in JS



// 1 Event Propagation (Event Bubbling and Event Capturing)
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// WHAT IS EVENT
// PROPAGATION ?
// 
// The Event Propagation mode
// determines in which order the
// elements receive the event.

// Event bubbling and capturing are
// two ways of event propagation in the
// HTML DOM API, when an event
// occurs in an element inside another
// element, and both elements have
// registered a handle for that event.

// The event propagation mode
// determines in which order the
// elements receive the event.






// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 



// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 

 // example 1
// // // we need to create a calculator 

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return (a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 

// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?

//https://www.w3schools.com/js/js_asynchronous.asp




//4.****************Function Currying********************** 

//sum (5)(3)(8) 

//sum(5,3,8)

// Currying is a technique of evaluating function with multiple arguments, into
// sequence of function with single argument.

// In other words, when a function, instead of taking all arguments at one
// time, takes the first one and return a new function 
// that takes the second
// one and returns a new function
//  which takes the third one, and so forth,
// until all arguments have been fulfilled.

// That is, when we turn a function call add (1,2,3) into add (1) (2) (3) Minipla
// using this technique, the little piece can be configured and reused with
// ease.


//example

{
  function sum(num1 ) {
  console.log(num1);
  return function(num2) {
  console.log(num1, num2);
  return function(num3){
    console.log(num1, num2,num3)
  }
  }
  }
  
  sum (5)(3)(8);
}

//using fat arrrow function
{
const sum = (num1) => (num2)=>
(num3) => console.log(num1+num2+num3);

sum (5)(3)(8);
}



// // 5: CallBack Hell 


//example
// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)


// **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************


// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

var my_object = { key_1: "some text", key_2: true, key_3: 5 };

var object_as_string = JSON.stringify(my_object);  
// "{"key_1":"some text","key_2":true,"key_3":5}"  

console.log(object_as_string);
console.log(typeof(object_as_string));   
//"string" 


// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

var object_as_string_as_object = JSON.parse(object_as_string);  
// {key_1: "some text", key_2: true, key_3: 5} 
console.log(object_as_string_as_object)

console.log(typeof(object_as_string_as_object))  
// "object" 



// // 7️⃣ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// // You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data adn get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });






















