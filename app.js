const questions = [
    {
        question: "What is the chemical formula of the water?",
        a: "NACL",
        b: "H2O",
        c: "CO2",
        d: "HCL",
        correct: "b",
    },
    {
        question: "Who is the inventer of the Alternative Current Moter?",
        a: "Thomas Eddison",
        b: "Sir Isaac Newton",
        c: "Nikola Tesla",
        d: "Albert Einstein",
        correct: "c",
    },
    {
        question: "Who is undefeated general in history?",
        a: "Alexander the Great",
        b: "Napoleon Bonaparte",
        c: "Hannibal",
        d: "Ashoka the Great",
        correct: "a",
    },
    {
        question: "Who is the founder of the roman empire?",
        a: "Constantine the great",
        b: "Alexander the great",
        c: "Julius Caesar",
        d: "Augustus Caesar",
        correct: "d",
    },
    {
        question: "js stands for",
        a: "javascript",
        b: "jawan script",
        c: "jadu Script",
        d: "java",
        correct: "a",
    },
]

currentIndex = 0;

loadQuestion(currentIndex);

const btnSubmitElement = document.querySelector("#btn-submit");

btnSubmitElement.addEventListener("click", function () {
    let result = validateInputs();

    if (result) {
        currentQuestion = questions[currentIndex];

        const evaluationSectionElement = document.querySelector("#evaluation-section");
        if (result == currentQuestion.correct) {
            evaluationSectionElement.innerHTML += `<div class='text-green'>${currentIndex + 1
                }. Correct</div>`;
        } else {
            evaluationSectionElement.innerHTML += `<div class='text-red'>${currentIndex + 1
                }. Incorrect</div>`;
        }
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion(currentIndex);
            uncheckInput(result);
        } else {
            const questionSectionElement = document.querySelector("#question-section");
            const optionsSectionElement = document.querySelector("#options-section");
            const btnRestartElement = document.querySelector("#btn-restart");


            questionSectionElement.classList.add("d-none");
            optionsSectionElement.classList.add("d-none");
            btnSubmitElement.classList.add("d-none");
            btnRestartElement.classList.remove("d-none");
        }
    } else {
        alert("Please select an option!");
    }
});

function loadQuestion(currentIndex) {
    const questionTextElement = document.querySelector("#question-text");
    const aTextElement = document.querySelector("#a-text");
    const bTextElement = document.querySelector("#b-text");
    const cTextElement = document.querySelector("#c-text");
    const dTextElement = document.querySelector("#d-text");


    let currentQuestion = questions[currentIndex];

    questionTextElement.innerText = currentQuestion.question;
    aTextElement.innerText = currentQuestion.a;
    bTextElement.innerText = currentQuestion.b;
    cTextElement.innerText = currentQuestion.c;
    dTextElement.innerText = currentQuestion.d;

}

function validateInputs() {
    const optionsElement = document.querySelectorAll(".options");
    let reslut = false;
    optionsElement.forEach((element) => {
        if (element.checked == true) {
            reslut = element.id;
        }
    });
    return reslut;
}

function uncheckInput(id) {
    const selectedOptionElement = document.querySelector("#" + id);
    selectedOptionElement.checked = false;
}

const btnRestartElement = document.querySelector("#btn-restart");
btnRestartElement.addEventListener("click", function () {
    location.reload();
})