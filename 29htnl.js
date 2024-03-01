function changeBackgroundColorRandom() {
    // Generate random RGB values for the background color
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);

    // Set the background color to the generated RGB values
    document.body.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function setLinearGradient() {
    // Generate random colors for the gradient
    var colors = ['#' + Math.floor(Math.random() * 16777215).toString(16), '#' + Math.floor(Math.random() * 16777215).toString(16)];

    // Set linear gradient background with random colors
    document.body.style.background = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`;

}
// Wrap your code inside a function
function updateDemo() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
// Call the function when the DOM is ready
window.onload = function () {
    updateDemo();
};




function myFunction() {
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";
}



