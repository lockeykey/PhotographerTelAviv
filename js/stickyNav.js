window.onscroll = function(){navToTop()};
var nav = document.getElementById('stickyNav');
var headerHeight = document.getElementsByTagName('header')[0].offsetHeight;

function navToTop(){
    if (window.pageYOffset >= headerHeight ){
        nav.classList.add('stickyBlock');
        
    }
    else {
        nav.classList.remove('stickyBlock');
    }
   //nav.style.height = "40px"; 
}


//window.onscroll = function(){navToTop()};
//var nav = document.getElementById('stickyNav');
//var header = document.getElementsByTagName('header');
//var sticky = nav.offsetTop;
//function navToTop(){
//    if (window.pageYOffset >= sticky){
//        nav.classList.add('stickyBlock');
//    }
//    else {
//        nav.classList.remove('stickyBlock');
//    }
//    
//}
//
