// Math section
const btn = document.querySelector(".math-block");
console.log(btn);
function mathClick(){
    console.log("Button works")
    window.location.href = "math/math.html";
}

btn.addEventListener("click", () => mathClick());



