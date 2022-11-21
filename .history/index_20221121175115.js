// console.log("hey Aman js in there");

const checkButton = document.querySelector('#check-btn');
const appContent = document.querySelector('#main-container');
const userBirthDate = document.querySelector('.selected-dob');

var date = new Date($(userBirthDate).val());
var day = $(userBirthDate).getDate();
var month = $(userBirthDate).getMonth() + 1;
var year = $(userBirthDate).getFullYear();

function displayContent(){
    appContent.style.display = "none";
}


checkButton.addEventListener('click' , function showGraphic(){
    // displayContent();
    console.log("I m hiding content")
    console.log(date , day, month, year);
})




