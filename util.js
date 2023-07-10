function updatePhone(isIncrease) {

    const caseNumberField = document.getElementById("phone-number-field");
    const previousCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber;
    if (isIncrease == true) {

        newCaseNumber = previousCaseNumber + 1;
    }
    else {

        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}

function phonePriceSet(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 1219;
    const caseTotalElement = document.getElementById("phone-price");
    caseTotalElement.innerText = caseTotalPrice;


}
function updateCase(isIncrease) {

    const caseNumberField = document.getElementById("case-number-field");
    const previousCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber;
    if (isIncrease == true) {

        newCaseNumber = previousCaseNumber + 1;
    }
    else {

        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}
function casePriceSet(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-price");
    caseTotalElement.innerText = caseTotalPrice;


}

function getTextElementValueById(elementID) {
    const phoneTotalElement = document.getElementById(elementID);
    const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
}
function setTextElement(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-price');
    const currentCaseTotal = getTextElementValueById('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElement('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElement('tax-amount', taxAmount);


    const finalAmount = currentSubTotal + taxAmount;
    setTextElement('final-total', finalAmount);
}