/* Open when someone clicks on the button */
function openCompInfo() {
    let nav = document.getElementById("complete-info");
    if(nav.style.height == 0 || nav.style.height == "0%"){
        document.getElementById("closeCompBtn").toggleAttribute("hidden");
    }
    nav.style.height = "50%";
    document.querySelector(".general-content").style.backgroundColor = "gray";

    let images = document.querySelectorAll(".item-image");
    for(image of images){
        image.style.opacity = 0.4;
    }

    document.getElementById("checkout-btn").style.opacity = 0.4;
}

/* Open when someone clicks on the button */
function openCardInfo() {
    let nav = document.getElementById("card-info");
    if(nav.style.height == 0 || nav.style.height == "0%"){
        document.getElementById("closeCardBtn").toggleAttribute("hidden");
    }
    nav.style.height = "70%";
    document.querySelector(".general-content").style.backgroundColor = "gray";

    let images = document.querySelectorAll(".item-image");
    for(image of images){
        image.style.opacity = 0.4;
    }

    document.getElementById("checkout-btn").style.opacity = 0.4;
}

/* Close when someone clicks on the "x" symbol */
function closeCompInfo() {
    document.getElementById("complete-info").style.height = "0%";
    document.getElementById("closeCompBtn").toggleAttribute("hidden");
    document.querySelector(".general-content").style.backgroundColor = "white";
    
    let images = document.querySelectorAll(".item-image");
    for(image of images){
        image.style.opacity = 1;
    }

    document.getElementById("checkout-btn").style.opacity = 1;
}

/* Close when someone clicks on the "x" symbol */
function closeCardInfo() {
    document.getElementById("card-info").style.height = "0%";
    document.getElementById("closeCardBtn").toggleAttribute("hidden");
    document.querySelector(".general-content").style.backgroundColor = "white";
    
    let images = document.querySelectorAll(".item-image");
    for(image of images){
        image.style.opacity = 1;
    }

    document.getElementById("checkout-btn").style.opacity = 1;
}