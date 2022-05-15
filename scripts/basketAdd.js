let amount = document.getElementById("combo-amount");
let price = document.getElementById("amount-price");
let basePrice = price.innerHTML;
let p1, p2, p3;

function increase() {
    amount.innerHTML++;
    basePrice.toString();
    p1 = basePrice.split(".")[0];
    p2 = basePrice.split(".")[1];
    p1 = parseFloat(p1)*amount.innerHTML;
    p3 = p1 + "." + p2;
    price.innerHTML = p3;
}

function decrease() {
    if(amount.innerHTML <= 1){
        amount.innerHTML = 1;
    }else{
        amount.innerHTML--;
        p1 = price.innerHTML.split(".")[0];
        p2 = basePrice.split(".")[1];
        p1 = parseFloat(p1)-2;
        p3 = p1 + "." + p2;
        price.innerHTML = p3;
    }    
}
