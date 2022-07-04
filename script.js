const myage = 33;
let scoree = 20;

function guessage() {
    const age = Number (document.querySelector('.gusage').value);
    if (age == 0) {
        document.querySelector(".massage").textContent= "input number"
    }else if (age < myage){ 
        document.querySelector(".massage").textContent= "my age is biger than on your guess"
        scoree = (scoree - 1)
        document.querySelector(".score").textContent = scoree
        if (scoree <= 0){
            document.querySelector(".score").textContent = "you lose"
        }
    }else if( age === myage){
        document.querySelector(".massage").textContent = "great job you guess my age"
        document.querySelector(".fd").style.backgroundColor = "#60b347"
        document.querySelector(".box").textContent = 33
    }else{
       document.querySelector(".massage").textContent =  "my age is smallest than on your guess"
       scoree = (scoree - 1)
       document.querySelector(".score").textContent = scoree
       if (scoree <= 0){
           document.querySelector(".score").textContent = "you lose"
       }
    }}
    function rset() {
    let rest = location.reload()
    }