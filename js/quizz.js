const questions = [
    {


        question: "Quelle langue est principalement parlée en Allemagne ?",
        Réponses: {
            A: "Français",
            B: "Allemand",
            C: "Italien",
			D: "Espagnol"
        },
        correctAnswer: "B"
    },
    {
        question: "Quelle est la langue officielle du Japon ?",
        Réponses: {
            A: "Mandarin",
            B: "Japonais",
            C: "Coréen",
			D: "Vietnamien"
        },
        correctAnswer: "B"
    },
    {
        question: "Quelle langue est parlée au Brésil  ?",
        Réponses: {
            A: "Portugais",
            B: "Espagnol",
            C: "Italien",
			D: "Anglais"
        },
        correctAnswer: "A"
    },
    {
        question: "Quelle est la langue principale au Canada ?",
        Réponses: {
            A: "Français",
            B: "Anglais",
            C: "Espagnol",
			D: "Allemand"
        },
        correctAnswer: "B"
    },
    {
        question: "Quelle est la langue officielle en Russie ?",
        Réponses: {
            A: "Russe",
            B: "Ukrainien",
            C: "Kazakh",
			D: "Tatar"
        },
        correctAnswer: "A"
    },
	    {
        question: " Quelle langue est parlée en Turquie ?",
        Réponses: {
            A: "Turc",
            B: "Arabe",
            C: "Persan",
			D: "Kurde"
        },
        correctAnswer: "A"
    },
    {
        question: "Quelle langue est principalement parlée en Inde ?",
        Réponses: {
            A: "Hindi",
            B: "Bengali",
            C: "Tamoul",
			D: "Ourdou"
        },
        correctAnswer: "A"
    },
    {
        question: "Quelle est la langue officielle en Chine ?",
        Réponses: {
            A: "Cantonais",
            B: "Mandarin",
            C: "Shanghainais",
			D: "Hokkien"
        },
        correctAnswer: "B"
    },
    {
        question: " Quelle est la langue officielle en France ?",
        Réponses: {
            A: "Allemand",
            B: "Italien",
            C: "Français",
			D: "Espagnol"
        },
        correctAnswer: "C"
    },
	{
        question: " Quelle est la langue officielle en Espagne ?",
        Réponses: {
            A: "Espagnol",
            B: "Catalan",
            C: "Basque",
			D: "Galicien"
        },
        correctAnswer: "A"
    },
	{
        question: " Quelle langue est parlée en Égypte ?",
        Réponses: {
            A: "Arabe",
            B: "Berbère",
            C: "Copte",
			D: "Anglais"
        },
        correctAnswer: "A"
    },
	{
        question: " Quelle est la langue officielle en Argentine ?",
        Réponses: {
            A: "Espagnol",
            B: "Portugais",
            C: "Italien",
			D: "Allemand"
        },
        correctAnswer: "A"
    },
	{
        question: "  Quelle langue est parlée en Afrique du Sud ?",
        Réponses: {
            A: "Zoulou",
            B: "Xhosa",
            C: "Afrikaans",
			D: "Swahili"
        },
        correctAnswer: "C"
    },
	{
        question: " Quelle est la langue officielle au Mexique  ?",
        Réponses: {
            A: "Espagnol",
            B: "Nahuatl",
            C: "Maya",
			D: "Quechua"
        },
        correctAnswer: "A"
    },
	{
        question: "  Quelle langue est principalement parlée au Royaume-Uni ?",
        Réponses: {
            A: "Anglais",
            B: "Gaélique écossais",
            C: "Gallois",
			D: "Cornique"
        },
        correctAnswer: "A"
    },




    // more questions
];

// Quiz container
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-button');

// Display quiz
displayQuiz();

submitButton.onclick = showResults;

function displayQuiz() {
    // Output questions and Réponses
    let output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        // Réponses
        let Réponses = [];
        for (letter in currentQuestion.Réponses) {
            Réponses.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.Réponses[letter]}
                </label>`
            );
        }

        // Add question and Réponses to output
        output.push(
            `<div class="question" style="font-weight: bold;"> ${currentQuestion.question} </div>
            <div class="Réponses"> ${Réponses.join('')} </div>`
        );
    });

    // Combine output and add to quiz container
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    let answerContainers = quizContainer.querySelectorAll('.Réponses');

    // keep track of user's Réponses
    let numCorrect = 0;

    // for each question...
    questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        let userAnswer = (answerContainers[questionNumber].querySelector(`input[name=question${questionNumber}]:checked`) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct Réponses
            numCorrect++;

            // color the Réponses green
            answerContainers[questionNumber].style.color = 'green';
        } else {
            // color the Réponses red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct Réponses out of total
    resultsContainer.innerHTML = numCorrect + ' sur ' + questions.length;
}
