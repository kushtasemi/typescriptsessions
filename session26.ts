let myArray: [number, number , string] = [10 , 20, 'test'];
let tuple1: [number, { name: string, adress: string}]=[1,{name:'test', adress:''}];

tuple1[0]=2;
tuple[1]={name:'test', adress:''};

}
// Enums
enum Requests{
    GET =0,
    POST=1,
    PUT = 2,
    PATCH =3,
    DELETE,

}
enum User {
    Admin
}
// Any
function f(data:any) {
    return data;

}

// Union
let union: string| Number | boolean | Array<Number>;
uninon='test;
    union=10;

let unionTest:null | string;
unionTest='12';

/ Literal types

let literal: 'Hello World'
literal: 'Hello World';

// costum types
type Employee = {
    id : Number;
    name : string;
    age : Number;
    isDisabled:boolean | Number;
}
let employee1:Employee = {
    id: 1,
    name: 'John',
    age: 31
    isDisabled: false
};