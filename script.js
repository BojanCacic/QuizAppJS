const quizData = [
    {
        question : 'What color is not on the traffic lights?',
        a : 'red',
        b : 'blue',
        c : 'green',
        d : 'yellow',
        correct : 'b'
    },
    {
        question : 'What do you do at the stop sign?',
        a : 'stop',
        b : 'look left than drive',
        c : 'slow down',
        d : 'what ever you want to do',
        correct : 'a'
    },
    {
        question : 'What is speed limit on a highway?',
        a : '100 km/h',
        b : '130 km/h',
        c : '50 km/h',
        d : '200 km/h',
        correct : 'b'
    }
]

const question = document.getElementById('question');

const answer_a = document.getElementById('a');
const answer_b = document.getElementById('b');
const answer_c = document.getElementById('c');
const answer_d = document.getElementById('d');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[currentQuestion];
    
    question.innerText = currentQuizData.question;

    answer_a.innerText = currentQuizData.a;
    answer_b.innerText = currentQuizData.b;
    answer_c.innerText = currentQuizData.c;
    answer_d.innerText = currentQuizData.d;


    
}

submitBtn.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuiz();
    }else{
        alert("You have finished the quiz!");
    }
    
} );
