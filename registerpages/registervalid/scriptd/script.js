var mainDiv = document.getElementById("maindiv")
var mainText = document.getElementById("maintext")
var textOne = document.getElementById("textone")
var textTwo = document.getElementById("texttwo")
var buttonOne = document.getElementById("buttonone")
var buttonTwo = document.getElementById("buttontwo")
var buttonThird = document.getElementById("buttonthird")

buttonOne.addEventListener("click", categories)

function categories() {
        buttonOne.classList.add("opacanim")
        buttonTwo.classList.add("opacanim")
        buttonThird.classList.add("opacanim")
  



    setTimeout(() => {
        buttonOne.classList.add("buttonsop")
        buttonTwo.classList.add("buttonsop")
        buttonThird.classList.add("buttonsop")
     
        buttonOne.classList.remove("buttons")
        buttonTwo.classList.remove("buttons")
        buttonThird.classList.remove("buttons")

    }, 1000);
    setTimeout(() => {
        addcategories()
    }, 1300);
}


var categoriebtn1 = document.createElement("button")
var categoriebtn2 = document.createElement("button")
var categoriebtn3 = document.createElement("button")
var categoriebtn4 = document.createElement("button")
var categoriebtn5 = document.createElement("button")
var categoriebtn6 = document.createElement("button")

categoriebtn1.classList.add("buttonsop2")
categoriebtn2.classList.add("buttonsop2")
categoriebtn3.classList.add("buttonsop2")
categoriebtn4.classList.add("buttonsop2")
categoriebtn5.classList.add("buttonsop2")
categoriebtn6.classList.add("buttonsop2")

categoriebtn1.innerHTML = "Discord Leaks"
categoriebtn2.innerHTML = "Courses Leaks"
categoriebtn3.innerHTML = "Darknet Leaks"
categoriebtn4.innerHTML = "Source Code Leaks"
categoriebtn5.innerHTML = "Custom Leaks"
categoriebtn6.innerHTML = "Back"

categoriebtn6.addEventListener("click", backtohome)





function addcategories() {
     mainDiv.appendChild(categoriebtn1)
     mainDiv.appendChild(categoriebtn2)
     mainDiv.appendChild(categoriebtn3)
     mainDiv.appendChild(categoriebtn4)
     mainDiv.appendChild(categoriebtn5)
     mainDiv.appendChild(categoriebtn6)

    categoriebtn1.classList.add("buttonsop2")
    categoriebtn2.classList.add("buttonsop2")
    categoriebtn3.classList.add("buttonsop2")
    categoriebtn4.classList.add("buttonsop2")
    categoriebtn5.classList.add("buttonsop2")
    categoriebtn6.classList.add("buttonsop2")

    categoriebtn1.classList.remove("buttonsop3")
    categoriebtn2.classList.remove("buttonsop3")
    categoriebtn3.classList.remove("buttonsop3")
    categoriebtn4.classList.remove("buttonsop3")
    categoriebtn5.classList.remove("buttonsop3")
    categoriebtn6.classList.remove("buttonsop3")
}


function backtohome() {

    categoriebtn1.classList.remove("buttonsop2")
    categoriebtn2.classList.remove("buttonsop2")
    categoriebtn3.classList.remove("buttonsop2")
    categoriebtn4.classList.remove("buttonsop2")
    categoriebtn5.classList.remove("buttonsop2")
    categoriebtn6.classList.remove("buttonsop2")

    categoriebtn1.classList.add("buttonsop3")
    categoriebtn2.classList.add("buttonsop3")
    categoriebtn3.classList.add("buttonsop3")
    categoriebtn4.classList.add("buttonsop3")
    categoriebtn5.classList.add("buttonsop3")
    categoriebtn6.classList.add("buttonsop3")

    setTimeout(() => {
    mainDiv.removeChild(categoriebtn1)
    mainDiv.removeChild(categoriebtn2)
    mainDiv.removeChild(categoriebtn3)
    mainDiv.removeChild(categoriebtn4)
    mainDiv.removeChild(categoriebtn5)
    mainDiv.removeChild(categoriebtn6)
    },1000);
    setTimeout(() => {
        buttonOne.classList.remove("opacanim")
        buttonTwo.classList.remove("opacanim")
        buttonThird.classList.remove("opacanim")

        buttonOne.classList.remove("buttonsop")
        buttonTwo.classList.remove("buttonsop")
        buttonThird.classList.remove("buttonsop")
    
        buttonOne.classList.add("buttons2")
        buttonTwo.classList.add("buttons2")
        buttonThird.classList.add("buttons2")
    }, 1300);

 

   
}




categoriebtn1.addEventListener("click", discordleaks)
categoriebtn2.addEventListener("click", coursesleaks)

function discordleaks(){

    window.open("discordleaks/discordleaks.html", "_blank")
}


function coursesleaks(){

    window.open("coursesleaks/coursesleaks.html", "_blank")
}

