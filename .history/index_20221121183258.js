// console.log("hey Aman js in there");

const checkButton = document.querySelector('#check-btn');
const appContent = document.querySelector('#main-container');
const userBirthDate = document.querySelector('.selected-dob').value;
const userSecretNumber = document.querySelector('.user-number');
const graphicDisplay = document.querySelector('#graphic-container');


function showGraphic(){
    graphicDisplay.style.display = "block";
    appContent.style.display = "none";
    document.querySelector('.final-result').innerHTML = "Hey your graphics is showing";
}


function hideContent(){
    appContent.style.display = "none";
}


checkButton.addEventListener('click' , function showGraphic(){
    hideContent();
    showGraphic();

});




