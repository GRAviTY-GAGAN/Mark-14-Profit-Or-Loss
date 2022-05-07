// Step 1 - Selecting all the elements
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');




//Ex-06
submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    if(initialPrice.value && stocksQuantity.value && currentPrice.value !== '') { 
        var ip = Number(initialPrice.value);
        var qty = Number(stocksQuantity.value);
        var curr = Number(currentPrice.value);
    
    
        calculateProfitAndLoss(ip, qty, curr); 
    } else {
            outputBox.innerText = 'Please fill out all fields';
    
    }
}

//Ex-05
function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        var loss = ((initial - current)*quantity).toFixed(2);
        var lossPercentage = ((loss / initial) * 100).toFixed(2);
       showOutput(`Hey the loss is ${loss} and percent is ${lossPercentage}% 😔`);
       if(initial > current){
        outputBox.style.color = "red";
    }
       // loss logic here
    } else if(current > initial){
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        showOutput(`Hey the profit is ${profit} and percent is ${profitPercentage}% 😀`);
        if (current > initial) {
            outputBox.style.color = "green";
        }
        // profit logic here
    } else {
        outputBox.style.color = "white";
        showOutput(`No Pain No Gain and No Gain No Pain 😐`);// the rest of logic
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
