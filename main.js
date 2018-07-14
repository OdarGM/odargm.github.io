function tabSwitch(pageName, elmnt, color){
    var i, contxd, tabs;
    contxd = document.getElementsByClassName("contxd");
    for(i = 0; i< contxd.length; i++){
        contxd[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for(i = 0; i < tabs.length; i++){
        tabs[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block"
    elmnt.style.backgroundColor = color

}


/*function showBar(){
    var x = document.getElementById("toshow1");
    x.className = "show";
    setTimeout(function(){
         x.className = x.className.replace("show", "");
    }, 5000);
}

function showBar2(){
    var x = document.getElementById("toshow2");
    x.className = "show";
    setTimeout(function(){
        x.className = x.className.replace("show", "");
    }, 5000)
}

function showBar3(){
    var x = document.getElementById("toshow3");
    x.className = "show";
    setTimeout(function(){
        x.className = x.className.replace("show", "");
    }, 5000)
}


function showBar4(){
    var x = document.getElementById("toshow4");
    x.className = "show";
    setTimeout(function(){
        x.className = x.className.replace("show", "");
    }, 5000)
} */