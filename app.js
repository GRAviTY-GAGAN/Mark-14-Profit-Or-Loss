// Step 1 - Selecting all the elements
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');


// if(initialPrice || stocksQuantity || currentPrice == '') {
//     outputBox.innerText = 'Please fill out all fields';
// } else {

//Ex-06
submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
 
}

//Ex-05
function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        var loss = ((initial - current)*quantity).toFixed(2);
        var lossPercentage = ((loss / initial) * 100).toFixed(2);
       showOutput(`Hey the loss is ${loss} and percent is ${lossPercentage}%`);
        // loss logic here
    } else if(current > initial){
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        showOutput(`Hey the profit is ${profit} and percent is ${profitPercentage}%`);
        // profit logic here
    } else {
        showOutput(`No Pain No Gain and No Gain No Pain`);// the rest of logic
    }
}


function showOutput(msg) {
    // switch (status) {
    //     case 'PROFIT':
    //         outputBox.innerHTML = msg;
    //         break;
    //     case 'LOSS':
    //         outputBox.innerHTML = msg;
    //         break;
    
    //     default:
    //         break;
    // }
    outputBox.innerText = msg;

}
