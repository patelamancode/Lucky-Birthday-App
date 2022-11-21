const checkButton = document.querySelector('#check-btn');
const appContent = document.querySelector('#main-container');
const userBirthDate = document.querySelector('.selected-dob');
const userSecretNumber = document.querySelector('.user-number');
const graphicDisplay = document.querySelector('#graphic-container');


// console.log(userBirthDate);

function showResult() {
    graphicDisplay.style.display = "flex";
    console.log("hey you called");
}


function hideContent() {
    appContent.style.display = "none";
}


checkButton.addEventListener('click', function showGraphic() {
    console.log(userBirthDate.value);

});