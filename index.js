/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1,l2){
    let areaOfRectangle = l1*l2
    console.log(areaOfRectangle)
}

area(3, 5)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySun = function(firstInteger, secondInteger){
    if(firstInteger === secondInteger){
       let moltiplicatedResult = (firstInteger + secondInteger)*3
        console.log(moltiplicatedResult)
    } else {
        let normalResult = firstInteger + secondInteger
        console.log(normalResult)
    }
}

console.log("If the numbers are the same: ")
crazySun(6,6)
console.log("If the numbers are different: ")
crazySun(5,10)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(firstGivenNumber, secondGivenNumber = 19){
    let firstDifferece = secondGivenNumber - firstGivenNumber
    if (firstGivenNumber >= 19){
        let moreThan19Result = firstDifferece * 3
        console.log(moreThan19Result)
    } else {
        console.log(firstDifferece)
    }
}

console.log("If the first given numer is more than 19: ")
crazyDiff(25)
console.log("If the first given number is less than 19: ")
crazyDiff(10)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(ex4Number){
    if (ex4Number >= 20 && ex4Number <= 100){
        console.log(true)
    }else if (ex4Number === 400) {
        console.log(true)
    } else {
        console.log(false)
    }
}

boundary(80)
boundary(150)
boundary(400)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(givenString){
    if (givenString === "Strive"){
        console.log(givenString)
    } else {
        let resultEx5 = givenString +" "+ "Strive"
        console.log(resultEx5)
    }
}

console.log("If the given string is Strive: ")
strivify("Strive")
console.log("If the given string doesn't contain Strive: ")
strivify("Flowers")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(positiveNumber){
    let numberIsAMultiple3 = positiveNumber % 3
    let numberIsAMultiple7 = positiveNumber % 7
    if (numberIsAMultiple3 === 0){
        console.log("This number is a multiple of 3!")
    } else if (numberIsAMultiple7 === 0){
        console.log("This number is a multiple of 7!")
    } else {
        console.log("This number is not a multiple of 3 or 7")
    }
}

console.log("If the number is 12: ")
check3and7(12)
console.log("If the number is 49: ")
check3and7(49)
console.log("If the number is 16: ")
check3and7(16)

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(givenStringEx7){
    let splittedString = givenStringEx7.split("")
    let reversedArray = splittedString.reverse()
    let reversedString = reversedArray.join("")
    console.log("Now, ", givenStringEx7, " becomes ", reversedString)
}

reverseString("Baloon")

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(givenStringEx9){
    let givenStringEx9IntoArray = givenStringEx9.split("")
    givenStringEx9IntoArray.pop()
    givenStringEx9IntoArray.shift()
    let wordResultEx9 = givenStringEx9IntoArray.join("")
    console.log(givenStringEx9," now becomes ",wordResultEx9)
}

cutString("Broccoli")

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/