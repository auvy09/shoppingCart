// console.log("phone");



document.getElementById('btn-phone-plus').addEventListener('click', function () {

    // console.log("phone");

    const phonePrice = updatePhone(true);

    phonePriceSet(phonePrice);
    calculateSubTotal();


})

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const phonePrice = updatePhone(false);

    phonePriceSet(phonePrice);
    calculateSubTotal();



})

