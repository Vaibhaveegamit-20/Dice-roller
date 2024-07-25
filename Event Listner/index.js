/* eventListner = Listen for specific events to create interactive web pages
                  events: click, mouseover, mouseout
                  .addEventListener(event, callback);
                  .addEventListener(event, arrow function) */
            
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/*function changeColor(event) {
    //console.log(event);
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH! 🤕";
}

myBox.addEventListener("click", changeColor);

myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH! 🤕";
}); */


myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "red";
    myBox.textContent = "OUCH! 🤕";
}); 

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😯";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😀";
});
