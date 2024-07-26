const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

const myButton1 = document.getElementById("myButton1");
const myImg1 = document.getElementById("myImg1")

myButton1.addEventListener("click", event => {

    if(myImg1.style.display === "none"){
        myImg1.style.display = "block";
        myButton1.textContent = "Hide";
    }
    else{
        myImg1.style.display = "none";
        myButton1.textContent = "Show";
    }
    
}); 
 
myButton.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
    
});