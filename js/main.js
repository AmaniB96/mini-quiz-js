console.log("Bienvenu dans le Quizz des capitales")

// let nom = prompt("Quel est ton nom ?")

// console.log("C'est parti "+nom+" on y va!")
  
let score=0  

for (let chance=0; chance<21; chance++){
    reponseFinal=prompt(questions[chance]);
        if (reponseFinal==answers[chance]) {
            console.log("Bonne réponse")
        }    
        else {
            console.log("Mauvaise reponse !")
        }
}
console.log("Le jeu est terminé")