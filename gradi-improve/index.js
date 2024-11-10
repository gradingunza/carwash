


const btn = document.getElementById('bergermenu')
const menu= document.getElementById('menuplace')
const animation = document.querySelector('.static_text')

let topPos=0;
let dir= 1;


 
btn.addEventListener("click", function() {  
    const display = window.getComputedStyle(menu).display;  
    console.log(`Current display: ${display}`); // Debug  
    
    if (display === "none") {  // Si le menu est caché  
        menu.style.display = "block";  // Montrez le menu  
    } else {  
        menu.style.display = "none"; // Cachez le menu  
    }  
});  

// Gérer la taille de la fenêtre : cacher le menu si l'écran est large  
window.addEventListener("resize", function() {  
    if (window.innerWidth > 800) { // Ajustez selon vos besoins  
        menu.style.display = "none"; // Cacher le menu lors de l'agrandissement de l'écran  
    }  
});  

// Démarrer tout l'affichage, assurez-vous que le menu est caché au lancement  
document.addEventListener("DOMContentLoaded", function() {  
    menu.style.display = "none"; // Cachez le menu en cas de rechargement de la page  
});  

function montBas(){
  if(topPos>=350){dir=-1}
  else if(topPos<=200){dir=1}

  topPos += dir
  animation.style.top=`${topPos}px`
  requestAnimationFrame(montBas) 
}

requestAnimationFrame(montBas)


