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