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


document.getElementById("btn-case-plus").addEventListener('click', function () {

    // console.log("case.js");
    const newCaseNumber = updateCase(true);

    casePriceSet(newCaseNumber);
    calculateSubTotal();


})
document.getElementById("btn-case-minus").addEventListener('click', function () {

    // console.log("case.js");
    const newCaseNumber = updateCase(false);
    casePriceSet(newCaseNumber);
    calculateSubTotal();

})