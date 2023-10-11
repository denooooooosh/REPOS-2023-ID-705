// toggle button color
var button = document.getElementById('colorButton');

button.addEventListener('click', function() {
    button.classList.toggle('blue');
    button.classList.toggle('green'); 
});


// toggle visibility of headshot image
const toggleButton = document.getElementById("toggleButton");
const myImage = document.getElementById("myImage");

function toggleImage() {
    if (myImage.hidden) {
        myImage.hidden = false;
    } else {
        myImage.hidden = true;
    }
}

toggleButton.addEventListener("click", toggleImage);


//function position = window.prompt("What position are you looking to fill?");
//console.log(job); 
//capture job input from submit button
const submitForm = document.getElementById("submitPositionForm");
document.getElementById("myButton").onclick = function(){

    position = document.getElementById("myText").value;
    console.log(position);
    submitForm.innerHTML = position;
}

//timestamp
function updateTimestamp() {
    const now = new Date();

    const formattedTimestamp = now.toLocaleString();

    const timestampContainer = document.getElementById("timestamp-container");
    timestampContainer.textContent = "Current Timestamp: " + formattedTimestamp;
}

updateTimestamp();

setInterval(updateTimestamp, 1000);

