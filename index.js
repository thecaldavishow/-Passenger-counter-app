
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0


let prev = " "
function increment(){
    
    count += 1
    countEl.textContent = count
  
}



function save(){
    prev = count + " -  "
    
    saveEl.textContent += prev
    
    countEl.textContent = 0
    count = 0
    


    console.log(count)
    
}
function reset(){
    countEl.textContent = 0
    saveEl.textContent = " Previous Entries: "

    

}


//what are we doing?
//reset button , clears all previous entries
//but retains the text p Previous entries




// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")
// // Create two variables (name & greeting) that contains your name
// let names = "Caldavis Irurah Wangaruro"
// let greeting = "Welcome Back "
// // and the greeting we want to render on the page
// console.log( greeting + names)
// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + names 
// welcomeEl.innerText += "👋 "

