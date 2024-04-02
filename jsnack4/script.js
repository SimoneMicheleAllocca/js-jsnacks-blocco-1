
const invitati = ["Claudio", "Giulio", "Francesco", "Alberto"];

const userName = prompt("Come ti chiami?");

let trovato = false

for (let i = 0; i < invitati.length; i++) {
    
    if (userName === invitati[i]) {
        trovato = true  
        break;
    }
    
}


 
if(trovato === true){
    console.log("Sei stato invitato alla festa!")
}else {
    console.log("Non sei invitato alla festa!")
}




