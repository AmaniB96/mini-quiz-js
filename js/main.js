


console.log("Bienvenu dans le Quizz des capitales")

let nom = prompt("Quel est ton nom ?")

console.log("C'est parti "+nom+" on y va!")


let questions = ["Quelle est la capitale du Rwanda ?",
  "Quelle est la capitale de la RDC ?",
  "Quelle est la capitale du Qatar ?",
  "Quelle est la capitale du Japon ?",
  "Quelle est la capitale de la Republique tchèque ?",
  "Quelle est la capitale de la Corée du sud ?",
  "Quelle est la capitale de la Guinée ?",
  "Quelle est la capitale de la jamaïque ?",
  "Quelle est la capitale de l'Egypte ?",
  "Quelle est la capitale de la Colombie ?",
  "Quelle est la capitale du Maroc ?",
  "Quelle est la capitale de la Roumanie ?",
  "Quelle est la capitale du Kenya ?",
  "Quelle est la capitale de l'Iran ?",
  "Quelle est la capitale de l'Indonésie ?",
  "Quelle est la capitale du Burkina Faso ?",
  "Quelle est la capitale de l'Éthiopie ?",
  "Quelle est la capitale de la Ghana ?",
  "Quelle est la capitale du Senegal ?",
  "Quelle est la capitale du Vietnam ?"]

  let answers = [
    "Kigali",
    "Kinshasa",
    "Doha",
    "Tokyo",
    "Prague",
    "Seoul",
    "Conakry",
    "Kingston",
    "Le caire",
    "Bogotá",
    "Rabat",
    "Bucarest",
    "Naïrobi",
    "Téhéran",
    "Jakarta",
    "Ouagadougou",
    "Addis-Abeba",
    "Accra",
    "Dakar",
    "Hanoï"
  ];

// Initiation du score à 0
let score=0  

// Boucle qui permet de faire tourner le jeu ou le quitter
for (let chance=0; chance<=20; chance++){
    reponseFinal=prompt(questions[chance]+" (écrivez 'Q' pour quitter le quiz)"); //la boucle va tourner pour que element de la liste 1 par 1 a l'index du tour
        if (reponseFinal==answers[chance]) { //Verifie si la reponse entrée correspond à la reponse à l'index de ce tour
            console.log("Bonne réponse !")
            score= score +1 //le score augmente a chaque bonne reponse
        }
        else if (reponseFinal=="Q"){
            break;
        }
        else {
            console.log("Mauvaise reponse ! la bonne réponse était: "+answers[chance])
        }
}
console.log("Le jeu est terminé. votre score est de "+score)