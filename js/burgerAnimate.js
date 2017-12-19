/*problem animation animatedMenuWrap.style.transition = + 2 + 's';*/
function burgerAnimate(x) {
    x.classList.toggle("change");
    
    var animatedMenu = document.getElementById("myTopnav");
        if (animatedMenu.className === "menu topnav") {
        animatedMenu.className += " responsive";
    } else {
        animatedMenu.className = "menu topnav";
            }
   
    var animatedMenuWrap = document.getElementById("animatedMenuWrap");
    
    
    if (animatedMenuWrap.className === "respMenuWrapper") {
        animatedMenuWrap.className += " respMenuWrapperVis";
        animatedMenuWrap.style.height = '220px';
        animatedMenuWrap.style.paddingBottom = '20px';
    } else {
        animatedMenuWrap.className = "respMenuWrapper";
        animatedMenuWrap.style.height = '0';
        
            }
    
}

