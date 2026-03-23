// Quiz button
const quizBtn = document.querySelector("#quiz");

function quizClick(){
    console.log("Button works")
    window.location.href = "../quiz-page/math.html";
}

quizBtn.addEventListener("click", () => quizClick());



// Timed button
const timeBtn = document.querySelector("#timed");

function timeClick(){
    console.log("Button works")
    window.location.href = "";
}

timeBtn.addEventListener("click", () => timeClick());



// Addition button
const addBtn = document.querySelector("#add");

function addClick(){
    console.log("Button works")
    window.location.href = "../addition/addition.html";
}

addBtn.addEventListener("click", () => addClick());




// Multiplication button
const multiBtn = document.querySelector("#mult");

function multiClick(){
    console.log("Button works")
    window.location.href = "";
}

multiBtn.addEventListener("click", () => multiClick());



// Subtraction button
const subBtn = document.querySelector("#sub");

function subClick(){
    console.log("Button works")
    window.location.href = "";
}

subBtn.addEventListener("click", () => subClick());