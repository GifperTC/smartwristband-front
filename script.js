document.getElementById("cal").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("calculate").innerHTML = "You lost _Backend data_ calories";
}
document.getElementById("body").onclick = function () { bodyFunction() };

function bodyFunction() {
    document.getElementById("printbody").innerHTML = "Your body pose is _Backend data_";
}