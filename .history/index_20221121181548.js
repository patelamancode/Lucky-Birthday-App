// console.log("hey Aman js in there");

const checkButton = document.querySelector('#check-btn');
const appContent = document.querySelector('#main-container');
const userBirthDate = document.querySelector('.selected-dob').value;
const userSecretNumber = document.querySelector('.user-number');


function hideContent(){
    appContent.style.display = "none";
}


checkButton.addEventListener('click' , function showGraphic(){
    hideContent();
    

});




