// declare function
function updateProductNumber(product, price, isIncreas){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isIncreas == true){
        productNumber = parseInt(productNumber) + 1;
    } else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    // set input value
    productInput.value = productNumber;
    // update total price
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;
    calculateTotal();
};

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = tax + subTotal;
    // update subtotal
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone add event listener
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)
})


// case add event listener
document.getElementById('case-plus').addEventListener('click', function(){
    // call function
    updateProductNumber('case', 59, true)
})
// add event listener
document.getElementById('case-minus').addEventListener('click', function(){
    // call function
    updateProductNumber('case', 59, false)
})