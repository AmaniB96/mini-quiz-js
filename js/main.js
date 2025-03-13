let nom = prompt("Quel est ton nom ?")

let bienvenu = document.querySelector("#bienvenu")
bienvenu.innerText = "Bienvenu " + nom

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
        [{text:"Bruxelles", correct: false},
            {text:"Le caire", correct: false},
            {text:"Conakry", correct: true},
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
        [{text:"Rio de Janeiro", correct: false},
            {text:"Santiago", correct: false},
            {text:"Bogota", correct: true},
        ]}]


let score = 0;
let currentQuestion = 0;

let intitulequestion = document.querySelector("#question");
let reponse1 = document.querySelector("#rep1");
let reponse2 = document.querySelector("#rep2");
let reponse3 = document.querySelector("#rep3");

// Initial question display
intitulequestion.innerText = questions[currentQuestion].question;
reponse1.innerText = questions[currentQuestion].answers[0].text;
reponse2.innerText = questions[currentQuestion].answers[1].text;
reponse3.innerText = questions[currentQuestion].answers[2].text;

// Answer 1 click event
reponse1.onclick = () => {
    if (questions[currentQuestion].answers[0].correct === true) {
        reponse1.style.backgroundColor = "green";
        score++;
        currentQuestion++;
    } else {
        reponse1.style.backgroundColor = "red";
        alert("Mauvaise réponse!");
        currentQuestion++;
    }

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            intitulequestion.innerText = questions[currentQuestion].question;
            reponse1.innerText = questions[currentQuestion].answers[0].text;
            reponse2.innerText = questions[currentQuestion].answers[1].text;
            reponse3.innerText = questions[currentQuestion].answers[2].text;
            reponse1.style.backgroundColor = "";
            reponse2.style.backgroundColor = "";
            reponse3.style.backgroundColor = "";
        }, 500);
    } else {
        alert("Le jeu est terminé. Ton score est de " + score);
        if (score >=0 && score<2){
            alert("Tu es parmi les pires joueurs que j'ai pu voir")
        }
        else if (score >=2 && score<5){
            alert("Tu n'es pas très bon")
        }
        else if (score >=5 && score<8){
            alert("Pas mal mais tu peux mieux faire")
        }
        else {
            alert("Bien joué, très bon score")
        }
    }
};

// Answer 2 click event
reponse2.onclick = () => {
    if (questions[currentQuestion].answers[1].correct === true) {
        reponse2.style.backgroundColor = "green";
        score++;
        currentQuestion++;
    } else {
        reponse2.style.backgroundColor = "red";
        alert("Mauvaise réponse!");
        currentQuestion++;
    }

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            intitulequestion.innerText = questions[currentQuestion].question;
            reponse1.innerText = questions[currentQuestion].answers[0].text;
            reponse2.innerText = questions[currentQuestion].answers[1].text;
            reponse3.innerText = questions[currentQuestion].answers[2].text;
            reponse1.style.backgroundColor = "";
            reponse2.style.backgroundColor = "";
            reponse3.style.backgroundColor = "";
        }, 500);
    } else {
        alert("Le jeu est terminé. Ton score est de " + score);
        if (score >=0 && score<2){
            alert("Tu es parmi les pires joueurs que j'ai pu voir")
        }
        else if (score >=2 && score<5){
            alert("Tu n'es pas très bon")
        }
        else if (score >=5 && score<8){
            alert("Pas mal mais tu peux mieux faire")
        }
        else {
            alert("Bien joué, très bon score")
        }
    }
};

// Answer 3 click event
reponse3.onclick = () => {
    if (questions[currentQuestion].answers[2].correct === true) {
        reponse3.style.backgroundColor = "green";
        score++;
        currentQuestion++;
    } else {
        reponse3.style.backgroundColor = "red";
        alert("Mauvaise réponse!");
        currentQuestion++;
    }

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            intitulequestion.innerText = questions[currentQuestion].question;
            reponse1.innerText = questions[currentQuestion].answers[0].text;
            reponse2.innerText = questions[currentQuestion].answers[1].text;
            reponse3.innerText = questions[currentQuestion].answers[2].text;
            reponse1.style.backgroundColor = "";
            reponse2.style.backgroundColor = "";
            reponse3.style.backgroundColor = "";
        }, 500);
    } else {
        alert("Le jeu est terminé. Ton score est de " + score);
        if (score >=0 && score<2){
            alert("Tu es parmi les pires joueurs que j'ai pu voir")
        }
        else if (score >=2 && score<5){
            alert("Tu n'es pas très bon")
        }
        else if (score >=5 && score<8){
            alert("Pas mal mais tu peux mieux faire")
        }
        else {
            alert("Bien joué, très bon score")
        }
    }
};