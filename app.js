const toggleBtn = document.querySelector(".mark");
const zeroBtn = document.querySelector(".zero");
const threeBtn = document.querySelector(".three");
const indication = document.querySelector(".first");
const indicatio = document.querySelector(".second");
const indicati = document.querySelector(".third");

toggleBtn.addEventListener("click", function(){
    
    indication.style.display = "none";
    indicatio.style.display = "none";
    indicati.style.display = "none";
    zeroBtn.style.display = "block";
    threeBtn.style.display = "none";
});