window.addEventListener("scroll", function(event){
    var top = this.scrollY;
    let navbar=this.document.querySelector("header");
    let button=this.document.querySelector("#start");
    let button1=this.document.querySelector("#transButt");
    if(top>295)
    {
        navbar.style.backgroundColor="white"
        button.style.backgroundColor="#1a8917"
        button1.style.color="black"
    }
    else  {
        
        navbar.style.backgroundColor="#ffc017"
        button.style.backgroundColor="black"
    
    }
});