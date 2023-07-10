// console.log("phone");
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
document.getElementById('btn-phone-plus').addEventListener('click', function () {

    // console.log("phone");

    const phonePrice = updatePhone(true);

    phonePriceSet(phonePrice);


})

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const phonePrice = updatePhone(false);

    phonePriceSet(phonePrice);


})

