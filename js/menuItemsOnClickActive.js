function activeMenuItem(event){
    //var i, tabs;
    var tabs = document.getElementsByClassName('menuItem');
    
    for ( i = 0; i<tabs.length; i++)
    {tabs[i].classList.remove('active');
       
    }
        event.currentTarget.className += " active";
}
        
        