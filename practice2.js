const contacts = {
    John : 233502222333,
    Kwame: 233457766554,
    Jane: 233302344444,
    Kofi: 233548899000,
    Tim:  233208888888,
}

let contactjane= contacts.Jane
console.log(contactjane)

const cart = {
    water: 3,
    tomatoes: 5,
    greenPepper: 10,
    carrots: 5,
    ruler: 2,
    total : function(){
        return this.water + this.tomatoes + this.greenPepper + this.carrots + this.ruler
    }
}

let result = cart.total()
console.log(result)

//assignment1
let myName = "Lisa Banahene"
let age = 30
let isStudent = true

console.log(myName, age, isStudent)

//assignment2
const person  = {
    firstName: "Lisa",
    lastName: "Banahene",
    age: 31,
    isStudent: false,
    fullName : function(){
        let operation =  `${this.firstName} ${this.lastName}`
        return operation
    }
}

let nameResult = person.fullName()
console.log(nameResult)

//assignment3//

let squareRoot = Math.sqrt(64)
console.log(squareRoot)

let randomNumber = Math.random()
console.log(randomNumber)

let nearestInteger= Math.round(7.5)
console.log(nearestInteger)

let maxNumber = Math.max(10,20,30,40,50)
console.log(maxNumber)

//assignment4//
let a = 5
let b = 10
let additionResult = a+b
let subtractionResult = a-b
let multiplicationResult = a*b
let divisionResult = a/b
let modulusResult = a % b

console.log(additionResult)
console.log(subtractionResult)
console.log(multiplicationResult)
console.log(divisionResult)
console.log(modulusResult)

//assignment5
let x = 10
x = 20
let y = x+5 
console.log(x)
console.log(y)

//assignment6
 const book = {
title: "Bible stories for kids",
author: "Lisa B",
pages: 80,
isAvailable: true,
summary: function(){
    let bookdetails = `The book,  ${this.title} written by ${this.author} is ${this.pages} pages long. The information received which states that the book is available in most bookshops in Accra is ${this.isAvailable}`

    return bookdetails
}
 }

let overallSummary = book.summary()
console.log(overallSummary)

//asignment7
let absolteValue = Math.abs(-45)
console.log(absolteValue)

let floorValue= Math.floor(7.8)
console.log(floorValue)

let ceilValue = Math.ceil(3.4)
console.log(ceilValue)

let exponentValue = Math.pow(3,4)
console.log(exponentValue)

//assignment8
let c = 10
let d = 20

let expoCD = 10**20
console.log(expoCD)

c++
console.log(c)

d--
console.log(d)
