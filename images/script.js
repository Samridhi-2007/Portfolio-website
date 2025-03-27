"use strict";
const $themebtn=document.querySelector("[data-theme-btn]");
const $html=document.documentElement;
let isdark=window.matchMedia("(prefers-color-scheme)").matches;
if(sessionStorage.getItem("theme")){
    $html.dataset.theme=sessionStorage.getItem("theme");
}else{
    $html.dataset.theme=isdark?"dark":"light";
    sessionStorage.setItem("theme",$html.dataset.theme);
}
const chngetheme=()=>{
 $html.dataset.theme=sessionStorage.getItem("theme")==="light"?"dark":"light";
 sessionStorage.setItem("theme",$html.dataset.theme);
}
$themebtn.addEventListener("click",chngetheme);


const $tabbtns = document.querySelectorAll("[data-tab-btn]"); // Select all tab buttons
const $tabContents = document.querySelectorAll("[data-tab-content]"); // Select all tab contents

let lastActivetab = document.querySelector("[data-tab-content].active"); // Get initially active tab content
let lastActivetabbtn = document.querySelector("[data-tab-btn].active"); // Get initially active button

$tabbtns.forEach(item => {
    item.addEventListener("click", function () {
        if (lastActivetab) lastActivetab.classList.remove("active");
        if (lastActivetabbtn) lastActivetabbtn.classList.remove("active");

        const tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        
        if (tabContent) {
            tabContent.classList.add("active");
            this.classList.add("active");

            lastActivetab = tabContent;
            lastActivetabbtn = this;
        }
    });
});
