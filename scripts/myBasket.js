/* Open when someone clicks on the button */
function openCompInfo() {
    let nav = document.getElementById("complete-info");
    if(nav.style.height == 0 || nav.style.height == "0%"){
        document.getElementById("closeCompBtn").toggleAttribute("hidden");
    }
    document.getElementById("complete-info").style.height = "50%";
    document.querySelector(".general-content").style.backgroundColor = "lightgray";
    document.querySelector(".general-content").style.opacity = 0.5;
}

/* Open when someone clicks on the button */
function openCardInfo() {
    let nav = document.getElementById("card-info");
    if(nav.style.height == 0 || nav.style.height == "0%"){
        document.getElementById("closeCardBtn").toggleAttribute("hidden");
    }
    document.getElementById("card-info").style.height = "70%";
    document.querySelector(".general-content").style.backgroundColor = "lightgray";
    document.querySelector(".general-content").style.opacity = 0.5;
}

/* Close when someone clicks on the "x" symbol */
function closeCompInfo() {
    document.getElementById("complete-info").style.height = "0%";
    document.getElementById("closeCompBtn").toggleAttribute("hidden");
    document.querySelector(".general-content").style.backgroundColor = "white";
    document.querySelector(".general-content").style.opacity = 1;
}

/* Close when someone clicks on the "x" symbol */
function closeCardInfo() {
    document.getElementById("card-info").style.height = "0%";
    document.getElementById("closeCardBtn").toggleAttribute("hidden");
    document.querySelector(".general-content").style.backgroundColor = "white";
    document.querySelector(".general-content").style.opacity = 1;
}