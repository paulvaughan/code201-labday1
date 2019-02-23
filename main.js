let yourName = prompt ('What is your name?')
let favoriteSport = prompt ('What is your favorite sport?')
let favoriteRelax = prompt ('What is your favorite thing to do to relax?')
// Create a variable to hold the p tag from our index.html fil
let para = document.getElementById('para')
console.log(para)
//Set the innerText of the p tag using the user's answers
para.innerText =`${yourName} your favorite sport is ${favoriteSport} and to relax you usually ${favoriteRelax}`
//confirm(`${yourName} your favorite sport is ${favoriteSport} and to relax you usually ${favoriteRelax}`)
//console.log(`${yourName} your favorite sport is ${favoriteSport} and to relax you usually ${favoriteRelax}`)