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

// function for addition of dates;
function additionDate(){
    let value = userBirthDate.value.split("-");
    var sum = 0;
    for(let i=0; i < value.length; i++){
        sum += parseInt(value[i]);
    }
    return sum;
}

function specialDate(userSecretNumber){
    additionDate();
    if((sum % userSecretNumber.value) = 0 ){
        console.log("you have a special birthdate")
    }else console.log("Opps your birthdate is normal");

}


checkButton.addEventListener('click', function showGraphic() {
    // additionDate();
    specialDate(6)
    console.log(value);
});