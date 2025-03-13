// let nom = prompt("Quel est ton nom ?")

let questions = [ 
    {question:"Quelle est la capitale du Rwanda ?", 
    answers: 
        [{text:"Paris", correct: false},
        {text:"Kigali", correct: true},
        {text:"Kinshasa", correct: false},
        ]},
    {question:"Quelle est la capitale du RDC?", 
    answers: 
        [{text:"Kinshasa", correct: true},
        {text:"Naïrobi", correct: false},
        {text:"Mons", correct: false},
        ]},
    {question:"Quelle est la capitale du Qatar?", 
        answers: 
        [{text:"Doha", correct: true},
         {text:"Dubaï", correct: false},
         {text:"Shangaï", correct: false},
        ]},
    {question:"Quelle est la capitale du Japon?", 
        answers: 
        [{text:"Mumbai", correct: false},
            {text:"Pékin", correct: false},
            {text:"Tokyo", correct: true},
        ]},
    {question:"Quelle est la capitale du Republique Tchèque", 
        answers: 
        [{text:"Zagreb", correct: false},
            {text:"Prague", correct: true},
            {text:"Stockholm", correct: false},
        ]},
    {question:"Quelle est la capitale du Corée du sud?", 
        answers: 
        [{text:"Seoul", correct: true},
            {text:"Dubaï", correct: false},
            {text:"Mexico", correct: false},
        ]},
    {question:"Quelle est la capitale du Guinée?", 
        answers: 
        [{text:"Bruxelles", correct: true},
            {text:"Le caire", correct: false},
            {text:"Conakry", correct: false},
        ]},
    {question:"Quelle est la capitale du jamaïque?", 
        answers: 
        [{text:"Kingston", correct: true},
            {text:"Bogota", correct: false},
            {text:"Shangaï", correct: false},
        ]},
    {question:"Quelle est la capitale du Egypte?", 
        answers: 
        [{text:"Addis Abeba", correct: false},
            {text:"Le caire", correct: true},
            {text:"Marrakesh", correct: false},
        ]},
    {question:"Quelle est la capitale du Colombie?", 
        answers: 
        [{text:"Rio de Janeiro", correct: true},
            {text:"Santiago", correct: false},
            {text:"Bogota", correct: false},
        ]}]


// Initiation du score à 0
let score = 0  
let intitulequestion = document.querySelector("#question")
let reponse1 = document.querySelector("#rep1")
let reponse2 = document.querySelector("#rep2")
let reponse3 = document.querySelector("#rep3")
let suivant = document.querySelector("#next")

for (let i = 0; i < questions.length; i++) {
    intitulequestion.innerText = questions[i].question;
    reponse1.innerText = questions[i].answers[0].text;
    reponse2.innerText = questions[i].answers[1].text;
    reponse3.innerText = questions[i].answers[2].text;

    reponse1.addEventListener("click", () => {
        if (questions[i].answers[0].correct === true) {
            let newdiv = document.createElement("div");
            newdiv.innerText = "Bonne reponse !";
            let currentdiv = document.querySelector("#bouton-reponses")
            document.body.insertBefore(newdiv, currentdiv);
        } else {
            let newdiv = document.createElement("div");
            newdiv.innerText = "Mauvaise reponse !";
            let currentdiv = document.querySelector("#bouton-reponses")
            document.body.insertBefore(newdiv, currentdiv);
        }
    })
}


question.innerText= questions[1].question
console.log(intitulequestion)
// Boucle qui permet de faire tourner le jeu ou le quitter



// alert("Le jeu est terminé. Ton score est de "+score)

// if (score >=0 && score<6){
//     console.log("Tu es parmi les pires joueurs que j'ai pu voir")
// }
// else if (score >=6 && score<10){
//     console.log("Tu n'es pas très bon")
// }
// else if (score >=10 && score<16){
//     console.log("Pas mal mais tu peux mieux faire")
// }
// else {
//     console.log("Bien joué, très bon score")
// }