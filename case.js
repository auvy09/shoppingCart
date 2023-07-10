console.log("case.js");


// function casefunction(caseAmountId) {
//     const caseNumberField = document.getElementById(caseAmountId);
//     const previousCaseNumber = parseInt(caseNumberField.value);
//     return previousCaseNumber


// }

// function setValue(caseId, newValue) {
//     const setValueField = document.getElementById(caseId);
//     setValueField.value = newValue;

// }

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
document.getElementById("btn-case-plus").addEventListener('click', function () {

    // console.log("case.js");
    const newCaseNumber = updateCase(true);

    casePriceSet(newCaseNumber);


})
document.getElementById("btn-case-minus").addEventListener('click', function () {

    // console.log("case.js");
    const newCaseNumber = updateCase(false);
    casePriceSet(newCaseNumber);

})