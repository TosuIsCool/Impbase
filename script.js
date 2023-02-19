var buttonMain1 = document.getElementById("buttonmain1")
var backNav = document.getElementById("backnav")
var secondPart = document.getElementById("secondpart")
var secondTexts = document.getElementById("secondtexts")

var oldScrollY = window.scrollY;
      



window.onscroll = function(e) {
    if(window.scrollY==0){
        backNav.classList.remove("backnav")
        backNav.classList.add("backnavop")
    } else {
        backNav.classList.add("backnav")
        backNav.classList.remove("backnavop")
    }
    oldScrollY = window.scrollY;
  }
    

