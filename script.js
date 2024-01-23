// Function to store the selected options in local storage
function storeOptions() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        if (radio.checked) {
            const questionNumber = radio.name;
            const selectedOption = radio.nextElementSibling.querySelector('span').innerText;
            localStorage.setItem(`option_${questionNumber}`, selectedOption);
        }
    });
}

// Function to retrieve the selected option for a specific question from local storage
function getOption(questionNumber) {
    return localStorage.getItem(`option_${questionNumber}`);
}

// Register event listeners for radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radio) => {
    radio.addEventListener('change', storeOptions);
});
