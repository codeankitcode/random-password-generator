const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isAlive = true

let passwordOneEl = document.querySelector("#password-one")
let passwordTwoEl = document.querySelector("#password-two")
let btnEl = document.querySelector("#btn-el")


btnEl.addEventListener("click", function(){
    for(let i = 0; i < 15; i++){
        let passOne = Math.floor(Math.random() * characters.length)
        let passTwo = Math.floor(Math.random() * characters.length)
        passwordOneEl.textContent += characters[passOne]
        passwordTwoEl.textContent += characters[passTwo]
    }
    isAlive = false
})


// console.log(btnEl)