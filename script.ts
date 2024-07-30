// types: 

//1) Primitives: number bool undefined string char
//2) Reference: object array function tuples


// Basic Types: 
// - Number,String, Boolean
// - Arrays, Tuples
// - Any, Unknown, Never, void
// - Enums

//if we declare a var, ts should know what type it is
let a : number; 

// array:
let arr2 = [2,4,5,5,"prashant", true];

//tuple: 
let arr: [number, boolean, string] = [1, true, "hello"];

// any datatype
let variable :any;

//unknown data type
let uk : unknown;

//never: it will never return anything, further code can not be executed
//function abcd() : never {
//    while(true) {
//        console.log("infine loop");
//    }
//}

//void 
function abcd() : void {
    console.log("hello");
}

//enum
enum Direction {
    top = "TOP",
    left = "LEFT",
    right = "RIGHT",
    bottom = "BOTTOM"
}

// Direction.top