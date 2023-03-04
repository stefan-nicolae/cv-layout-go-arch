"use strict";

let x = document.getElementsByClassName("dropdown")[0];
let menu = document.querySelector("menu");

x.addEventListener("click", function() {
    let w = window.innerWidth;
    if(w < 900) {
        menu.style.display = "flex"; 
    }
});

document.querySelector("#close").addEventListener("click", function() {
    setTimeout(function(){ 
        menu.style.display = "none";
    }, 100);
});