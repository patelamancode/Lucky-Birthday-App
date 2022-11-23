const checkButton = document.querySelector('#check-btn');
const appContent = document.querySelector('#main-container');
const userBirthDate = document.querySelector('#selected-dob');
const luckyNumber = document.querySelector('.user-number');
const graphicDisplay = document.querySelector('#graphic-container');
const backButton = document.querySelector('#back-btn');
const result = document.querySelector('#final-result');


function showResult() {
    hideContent();
    graphicDisplay.style.display = "flex";
};

function hideContent() {
    appContent.style.display = "none";
};


function specialDateIs() {
    let value = userBirthDate.value.split("-");
    var sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum += parseInt(value[i]);
    }
    console.log(sum);
    if (sum % luckyNumber.value == 0) {
        result.innerText = "you have a special birthdate 🎇🤗🎉";
    } result.innerText = "Opps your birthdate is normal☹️";

};


checkButton.addEventListener('click', function() {
    specialDateIs();
    showResult();
    console.log(value);
});

backButton.addEventListener('click',function(){
    appContent.style.display = "flex";
    graphicDisplay.style.display = "none"
    window.location.reload();
});