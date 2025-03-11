console.log("Bienvenu dans le Quizz des capitales")

// let nom = prompt("Quel est ton nom ?")

// console.log("C'est parti "+nom+" on y va!")


let questions = ["Quelle est la capitale du Rwanda ?",
  "Quelle est la capitale de Haïti ?",
  "Quelle est la capitale du Qatar ?",
  "Quelle est la capitale du Lesotho ?",
  "Quelle est la capitale de la Republique tchèque ?",
  "Quelle est la capitale du Guyana ?",
  "Quelle est la capitale du Malawi ?",
  "Quelle est la capitale de la jamaïque ?",
  "Quelle est la capitale du Turkménistan ?",
  "Quelle est la capitale de la Colombie ?",
  "Quelle est la capitale de la Namibie ?",
  "Quelle est la capitale de la Roumanie ?",
  "Quelle est la capitale du Tanzanie ?",
  "Quelle est la capitale de l'Iran ?",
  "Quelle est la capitale de l'Indonésie ?",
  "Quelle est la capitale du Burkina Faso ?",
  "Quelle est la capitale de l'Éthiopie ?",
  "Quelle est la capitale de la Ghana ?",
  "Quelle est la capitale du Senegal ?",
  "Quelle est la capitale du Vietnam ?"]

  let answers = [
    "Kigali",
    "Port-au-Prince",
    "Doha",
    "Maseru",
    "Prague",
    "Georgetown",
    "Lilongwe",
    "Kingston",
    "Achgabat",
    "Bogotá",
    "Windhoek",
    "Bucarest",
    "Dodoma",
    "Téhéran",
    "Jakarta",
    "Ouagadougou",
    "Addis-Abeba",
    "Accra",
    "Dakar",
    "Hanoï"
  ];
  
let score=0  

for (let chance=0; chance<=20; chance++){
    reponseFinal=prompt(questions[chance]+" (écrivez 'Q' pour quitter le quiz)");
        if (reponseFinal==answers[chance]) {
            console.log("Bonne réponse !")
            score= score +1
        }
        else if (reponseFinal=="Q"){
            break;
        }
        else {
            console.log("Mauvaise reponse !")
        }
}
console.log("Le jeu est terminé. votre score est de "+score)