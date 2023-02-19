var homeHref = document.getElementById("homehref")
var aboutHref = document.getElementById("abouthref")
var sourceHref = document.getElementById("sourcehref")
var contactHref = document.getElementById("contacthref")
var logoText = document.getElementById("logotext")
var navBar = document.getElementById("navbar")
var bar = document.createElement("img")
var backNav = document.getElementById("backnav")

bar.src = "images/bar.png"

var buttonLogin = document.getElementById("buttonlogin")
var oldScrollY = window.scrollY;


const mediaQuery1 = window.matchMedia('(max-width: 968px)')


function mediaQuery11() {
  if (mediaQuery1.matches) {

    homeHref.classList.remove("href1")
    homeHref.classList.add("killtext")
  
    aboutHref.classList.remove("href2")
    aboutHref.classList.add("killtext")
  
    sourceHref.classList.remove("href3")
    sourceHref.classList.add("killtext")
  
    contactHref.classList.remove("href5")
    contactHref.classList.add("killtext")
  
    logoText.style.position = "relative"
    logoText.style.top = "-15px"
  
    buttonLogin.style.position = "relative"
    buttonLogin.style.top = "-15px"
    buttonLogin.style.left = "170px"
    
    buttonLogin.classList.remove("loginbtn")
    buttonLogin.classList.add("loginbtn2")
  
  
    bar.style.position ="relative"
    bar.style.cursor = "pointer"
    bar.style.width = "40px"
    
  
    navBar.appendChild(bar)
  
  } 
}

   



const mediaQuery2 = window.matchMedia('(max-width: 848px)') 


function mediaQuery22() {
  if (mediaQuery2.matches) {
    bar.style.right = "70px"
    buttonLogin.style.left = "100px"
 
    }
 
}




const mediaQuery3 = window.matchMedia('(max-width: 778px)')

function mediaQuery33() {
  if (mediaQuery3.matches) {
    bar.style.right = "150px"
    buttonLogin.style.left = "10px"
   }
}


 const mediaQuery4 = window.matchMedia('(max-width: 687px)')


 function mediaQuery44() {

 if (mediaQuery4.matches) {
  bar.style.left = "350px"
  bar.style.top = "-55px"
  buttonLogin.style.left = "-30px"
  logoText.style.top = "-10px"

  if(window.scrollY==0){
    backNav.classList.remove("backnav")
    backNav.classList.remove("backnav2")
} else {
  backNav.classList.remove("backnav")
  backNav.classList.add("backnav2") 
}
oldScrollY = window.scrollY;

  }
}

const mediaQuery5 = window.matchMedia('(max-width: 574px)')


function mediaQuery55() {

  if (mediaQuery5.matches) {
    buttonLogin.style.top = "-45px"
    buttonLogin.style.left= "15px"
    bar.style.width = "35px"
    bar.style.top = "-30px"
    bar.style.left ="-110px" 
    logoText.style.top = "-1px"
    logoText.style.left = "27px"

    
  }
}


const mediaQuery6 = window.matchMedia('(max-width: 500px)')

function mediaQuery66() {

  if (mediaQuery6.matches) {
    buttonLogin.style.left= "-15px"
    bar.style.left ="-140px" 
    logoText.style.left = "-1px"
    
  }
}

const mediaQuery7 = window.matchMedia('(max-width: 456px)')


function mediaQuery77() {

  if (mediaQuery7.matches) {
    buttonLogin.style.left= "-30px"
    bar.style.left ="-160px" 

    
  }
}

const mediaQuery8 = window.matchMedia('(max-width: 442px)')

function mediaQuery88() {

  if (mediaQuery8.matches) {
    buttonLogin.style.left= "-70px"
    bar.style.left ="-190px" 
    logoText.style.left = "-40px"

    
  }
}

const mediaQuery9 = window.matchMedia('(max-width: 404px)')

function mediaQuery99() {

  if (mediaQuery9.matches) {
    buttonLogin.style.left= "-95px"
    bar.style.left ="-220px" 

    
  }
}

const mediaQuery10 = window.matchMedia('(max-width: 378px)')

function mediaQuery100() {

  if (mediaQuery10.matches) {
    buttonLogin.style.left= "-125px"
    bar.style.left ="-250px" 

    
  }
}

const mediaQuery14 = window.matchMedia('(max-width: 378px)')

function mediaQuery110() {

  if (mediaQuery14.matches) {
    logoText.style.left = "-41px"

    
  }
}



window.addEventListener('resize',  mediaQuery11);
mediaQuery11();

window.addEventListener('resize',  mediaQuery22);
mediaQuery22();


window.addEventListener('resize',  mediaQuery33);
mediaQuery33();


window.addEventListener('resize', mediaQuery44);
mediaQuery44();

window.addEventListener('resize', mediaQuery55);
mediaQuery55();

window.addEventListener('resize', mediaQuery66);
mediaQuery66();

window.addEventListener('resize', mediaQuery77);
mediaQuery77();

window.addEventListener('resize', mediaQuery88);
mediaQuery88();

window.addEventListener('resize', mediaQuery99);
mediaQuery99();

window.addEventListener('resize', mediaQuery100);
mediaQuery100();

window.addEventListener('resize', mediaQuery110);
mediaQuery110();




bar.addEventListener("click", dropdown)

var theDrop = document.getElementById("thedrop")
var dropText1 = document.getElementById("droptext1")
var dropText2 = document.getElementById("droptext2")
var dropText3 = document.getElementById("droptext3")
var dropText4 = document.getElementById("droptext4")


function dropdown() {
  theDrop.classList.toggle("drop")



  if(theDrop.classList.contains("drop")) {
    setTimeout(() => {
      dropText1.classList.remove("droptextkill")
      dropText1.classList.toggle("droptext1")
  
      dropText2.classList.remove("droptextkill")
      dropText2.classList.toggle("droptext1")
  
      dropText3.classList.remove("droptextkill")
      dropText3.classList.toggle("droptext1")
  
      dropText4.classList.remove("droptextkill")
      dropText4.classList.toggle("droptext1")
    }, 400);

    } else {
    dropText1.classList.add("droptextkill")
    dropText1.classList.remove("droptext1")

    dropText2.classList.add("droptextkill")
    dropText2.classList.remove("droptext1")

    dropText3.classList.add("droptextkill")
    dropText3.classList.remove("droptext1")

    dropText4.classList.add("droptextkill")
    dropText4.classList.remove("droptext1")
  }

  
}