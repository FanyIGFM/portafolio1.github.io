let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu (){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//Funcion que aplica las de las animaciones de la habilidades
function efectoHabilidades(){
    var skills = document.getElementById("sklls");
    var distancia_skill = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skill>= 300){
        let habilidades = document.getElementsByClassName("progerso");
        habilidades[0].classList.add("Javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Photoshop");
        habilidades[3].classList.add("Wordpress");
        habilidades[4].classList.add("drupa"); 
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("Proyectos");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
