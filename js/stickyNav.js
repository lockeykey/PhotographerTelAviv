window.onscroll = function(){navToTop()};
var nav = document.getElementById('stickyNav');
var sticky = nav.offsetTop;
function navToTop(){
    if (window.pageYOffset >= sticky){
        nav.classList.add('stickyBlock');
    }
    else {
        nav.classList.remove('stickyBlock');
    }
    
}


