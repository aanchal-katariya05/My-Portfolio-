let icon = document.getElementById("icon");

function change(){

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        icon.src = "moon.png";
    }
    else{
        icon.src = "sun.png";
    }

}