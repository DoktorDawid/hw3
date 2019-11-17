// 1) Create an iffe that returns an object with fields: function setValue(), 
// function showValue() and function reverseValue(). 
// Calling functions either logs the value or reverse it in an object. 
// If value was not provided yet or is empty showValue function is to return information about that. 
// Value can be type string or number. reverseValue(): 
//  If number do (*(-1)), if string reverse it.  Closure pattern.

// let iffie =  (function(){
//     let val = 2;
//     let showValue = function() {
//         if (typeof val == null) {
//             console.log("Value is empty ");
//         } else {
//             return val;
//         };
//         };
//             let setValue = function(newValue){
//                 if(newValue) val = newValue;
//                 return val;
//             };
//             let reverseValue = function(reverse){
//                 if(typeof val == 'number') {
//                     val = (val * (-1));
//                     return val;
//                 } else {
//                     if(typeof val == 'string'){
//                         val = val
//                         .split("")
//                         .reverse()
//                         .join("");
//                         return val;
//                     };
//                 };
//             };
//             return {
//                 takeshowValue : showValue,
//                 takesetValue : setValue,
//                 takereverseValue : reverseValue
//             };
//         })();
//  console.log(iffie);
//  console.log(iffie.takeshowValue());
//  console.log(iffie.takesetValue('witaj'));
//  console.log(iffie.takereverseValue());


// 2) Create four function definitions. One for every basic math operations and taking two input parameters. 
// Create one more function. This function is to return calculation object. 
// This object is to have parameters object field that holds two operation parameters inside (x and y). 
// Function field that points to a function with math operation (defined at the beginning).
//  A function setOperation() that sets the field from previous sentence and a Calculate function 
//  that makes calculation and returns its value. 

let add = function adding(a, b) {
    return a + b;
   };
   let sub = function subing(a, b) {
    return a - b;
   };
   let multi = function multing(a, b) {
    return a * b;
   };
   let div = function diving(a, b) {
    return a / b;
   };
   let calculator = {
    x: 2,
    y: 3,
    operation: null,  
    setArguments : function (x,y){
      this.x = x;
      this.y = y;
    },
    calculate: function() {
      return this.operation(this.x, this.y);
    },
    setOperation: function operationTaken(mathOperation) {
      this.operation = mathOperation;
    }
   };
   calculator.setArguments(6,7);
   calculator.setOperation(add);
   console.log(calculator.calculate());


   calculator.setOperation(multi);
   console.log(calculator.calculate());
   






// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. 
// Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 

// let BaseObject = { x: 0, y: 0, sum: function () { return this.x + this.y } };
// let arr = [
//   { x: 2, y: 3 },
//   { x: -1,y: 6 },
//   { x: 0, y: 8 },
//   { x: 2, y: 5 }
// ];

// for (i = 0; i < arr.length; i++) {
//   let operation = BaseObject.sum.call(arr[i]);
//   console.log(operation);
// };

// 4) Given an array of objects, for each object call operation() function in context of next object. 
// If object is last, got back to start of the array for operation function. In loop;

// let arr = [
//   {
//     x: 1,
//     y: 'object one value',
//     operation: function () { return 'object one prafix ' + this.x + " " + this.y; }
//   },
//   {
//     x: 2,
//     y: 'object two value',
//     operation: function () { return 'object two prefix ' + this.x + " " +  this.y; }
//   },
//   {
//     x: 3,
//     y: 'object three value',
//     operation: function () { return 'object three prefix ' + this.x + " " + this.y; }
//   },
// ];

// for (let i = 0; i < arr.length; i++) {

//   if (i == arr.length - 1) {
//     console.log(arr[i].operation.bind(arr[0])());

//   } else {
//   console.log(arr[i].operation.bind(arr[i + 1])());
//   }
// };

