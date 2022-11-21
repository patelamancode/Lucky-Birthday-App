const checkButton = document.querySelector('#check-btn');
const appContent = document.querySelector('#main-container');
const userBirthDate = document.querySelector('#selected-dob');
const userSecretNumber = document.querySelector('.user-number');
const graphicDisplay = document.querySelector('#graphic-container');



function showResult() {
    graphicDisplay.style.display = "flex";
    console.log("hey you called");
}

function hideContent() {
    appContent.style.display = "none";
}


function specialDate() {
    let value = userBirthDate.value.split("-");
    var sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum += parseInt(value[i]);
    }
    console.log(sum);
    if (sum % userSecretNumber.value == 0) {
        console.log("you have a special birthdate")
    } else console.log("Opps your birthdate is normal");

}


checkButton.addEventListener('click', function showGraphic() {
    specialDate();
    console.log(value);
});