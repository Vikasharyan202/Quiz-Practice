const quizData = [
    {
        question : 'Javascript is a which type of language?',
        a : 'human to human',
        b : 'human to computer',
        c : 'human to animal',
        d : 'none of above',
        correct : 'b'
    },
    {
        question : 'Most popular progamming language is?',
        a : 'java',
        b : 'python',
        c : 'javascript',
        d : 'c++',
        correct : 'c'
    },
    {
        question : 'Which editer you are using for coding?',
        a : 'online editer',
        b : 'text editer',
        c : 'eclipse',
        d : 'visual studio code',
        correct : 'd'
    },
    {
        question : 'what is your favorite topic in programming life?',
        a : 'problem solving',
        b : 'app development',
        c : 'designer',
        d : 'web development',
        correct : 'a'
    },
    {
        question : 'what is your qualification?',
        a : 'under graduate',
        b : 'graduate',
        c : 'masters',
        d : 'ph.d',
        correct : 'b'
    }
];

const questionElem = document.querySelector('#question');

const answerElem = document.querySelectorAll('.answer');
const quiz = document.querySelector('#quiz');

const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submitBtn');

let currentQuiz = 0;
let score = 0; 

loadQuiz();

function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElem.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerElem.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerElem.forEach((answerEl) => { 
            answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=> {
    
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answered correctly ${score} / ${quizData.length} questions. </h2>
            <button onclick="location.reload()"> Reload </button>`;
        }
    }
});