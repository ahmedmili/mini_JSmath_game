var gameStarted = false // variable to verif that game is allready started
var endOfGame = false // variable to verif that game is allready end
const strtButton = document.querySelector("#startbtn") // select start botton

//time record part start
const minutesLabel = document.querySelector("#minutes") // select minute label
const secondsLabel = document.querySelector("#secs") // select seconds label

let timeLeftSec = 59 // seconds of play time
let timeLeftMinutes = 4 // minutes of play time
let sec = 1000 // 1 sec = 1000 milli sec



function countDown() {
    var timerV = setInterval(function() {
        if (timeLeftSec <= 0 && timeLeftMinutes <= 0) { // when time is over stop counting time and stop the game
            clearInterval(timeLeftSec = 0)
            endOfGame = true
            strtButton.removeEventListener('click', startGame)
            strtButton.innerHTML = "game over"
        } else if (timeLeftSec <= 0 && timeLeftMinutes >= 0) { // when seconds over 0 
            timeLeftSec = 59
            timeLeftMinutes -= 1
        }

        secondsLabel.innerHTML = timeLeftSec // print the seconds
        minutesLabel.innerHTML = timeLeftMinutes // print the minutes
        timeLeftSec -= 1
    }, sec)
}
//time record part end

// random number part start
const numberLabel = document.getElementById("eq") // select affiche zone
var somme

function randomNbr() {
    if (document.getElementById("faci").checked) {
        do { // this part to select only the number >100
            var randNmbr1 = Math.floor(Math.random() * 100) // generate first number
            var randNmbr2 = Math.floor(Math.random() * 100) // generate first number
            somme = randNmbr1 + randNmbr2
        } while (somme >= 100)
        console.log("+")
        numberLabel.value = randNmbr2 + " + " + randNmbr1 // printing the equation
    } else if (document.getElementById("moy").checked) {
        var moy = randNmbr1 = Math.floor(Math.random() * 2)
        if (moy == 0) {
            do { // this part to select only the number >100
                var randNmbr1 = Math.floor(Math.random() * 100) // generate first number
                var randNmbr2 = Math.floor(Math.random() * 100) // generate first number
                somme = randNmbr1 + randNmbr2
            } while (somme >= 100)
            numberLabel.value = randNmbr2 + " + " + randNmbr1 // printing the equation
            console.log("+")
        } else if (moy == 1) {
            do { // this part to select only the number >100
                var randNmbr1 = Math.floor(Math.random() * 100) // generate first number
                var randNmbr2 = Math.floor(Math.random() * 100) // generate first number
                somme = randNmbr1 - randNmbr2
            } while ((somme >= 100) || (somme < 0))
            console.log("-")
            numberLabel.value = randNmbr1 + " - " + randNmbr2 // printing the equation
        }
    } else if (document.getElementById("deff").checked) {
        do { // this part to select only the number >100
            var randNmbr1 = Math.floor(Math.random() * 100) // generate first number
            var randNmbr2 = Math.floor(Math.random() * 100) // generate first number
            somme = randNmbr1 * randNmbr2
        } while ((somme >= 100) || (somme <= 0))
        console.log("*")
        numberLabel.value = randNmbr2 + " * " + randNmbr1 // printing the equation
    }
    console.log(somme)
}
// random number part end

const res = document.querySelector("#res") // select the zone where player write the answer
const scoreLabel = document.querySelector("#score") // select the zone where print the score
var scoreTrue = 0 // calcule numbers of true answers
var nbrTry = 0 // calcule number total of answers


// verefication of result
function verifResultat() {
    // if the answer true 
    if (res.value == somme) {
        scoreTrue += 1
        randomNbr()
        nbrTry += 1
        res.value = ""
    }
    // if the answer false or vide  
    else if (res.value != somme || res.value == "") {
        randomNbr()
        res.value = ""
        nbrTry += 1
    }
    scoreLabel.innerHTML = scoreTrue + "/" + nbrTry // print the score
}
// end of game functions

// start game function
function startGame() {
    if ((gameStarted == false) && (endOfGame == false)) {
        randomNbr()
        countDown()
        gameStarted = true
        strtButton.innerHTML = "next equation"
    } else if ((gameStarted == true) && (endOfGame == false)) {
        strtButton.innerHTML = "next equation"
        verifResultat()
    }
}
strtButton.addEventListener('click', startGame)

// nav bar part start
const navigationMenu = document.querySelector("#nav_menu")
const optionsMenu = document.querySelector(".option_menu")

var partBtn = document.querySelector("#partie")
var btnOption = document.querySelector("#opnOption")

var menuOpen = false
var openOp = false

function opnMenue() {
    if (menuOpen == false) {
        navigationMenu.style.display = "block"
        menuOpen = true
    } else if (menuOpen == true) {
        navigationMenu.style.display = "none"
        menuOpen = false
    }
}

function opnOptions() {
    if (openOp == false) {
        optionsMenu.style.display = "inline"
        openOp = true
    } else if (openOp == true) {
        optionsMenu.style.display = "none"
        openOp = false
    }

}
partBtn.addEventListener('click', opnMenue)
btnOption.addEventListener('click', opnOptions)