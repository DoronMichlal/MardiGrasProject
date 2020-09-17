let submit = document.querySelector('#submit');
let reset = document.querySelector('#reset');

let correctAnswers = [
    { id: 'q1b', value: 'false' },
    { id: 'q2c', value: 'blue' },
    { id: 'q3c', value: 'green' },
    { id: 'q4c', value: 'feasting before the arrival of Lent' },
    { id: 'q5a', value: 'Fat Tuesday' },
    { id: 'q6d', value: 'Cowbellion de Rakin Society' },
    { id: 'q7d', value: 'New Years Eve' },
    { id: 'q8a', value: 'by holding lighted torch parades' },
    { id: 'q9d', value: 'Crewe of Comos' },
    { id: 'q10d', value: 'Joseph Cain' }
];

// Check empty fields
let checkEmptyQuestions = () => {
    if (document.querySelector('#q1a').checked === false && document.querySelector('#q1b').checked === false) {
        alert('You did not answer question NO.1');
        return false;
    }

    if (document.querySelector('#q2a').checked === false && document.querySelector('#q2b').checked === false && document.querySelector('#q2c').checked === false && document.querySelector('#q2d').checked === false) {
        alert('You did not answer question NO.2');
        return false;
    }

    if (document.querySelector('#q3a').checked === false && document.querySelector('#q3b').checked === false && document.querySelector('#q3c').checked === false && document.querySelector('#q3d').checked === false) {
        alert('You did not answer question NO.3');
        return false;
    }

    if (document.querySelector('#q4a').checked === false && document.querySelector('#q4b').checked === false && document.querySelector('#q4c').checked === false && document.querySelector('#q4d').checked === false) {
        alert('You did not answer question NO.4');
        return false;
    }

    if (document.querySelector('#q5a').checked === false && document.querySelector('#q5b').checked === false && document.querySelector('#q5c').checked === false && document.querySelector('#q5d').checked === false) {
        alert('You did not answer question NO.5');
        return false;
    }

    if (document.querySelector('#q6a').checked === false && document.querySelector('#q6b').checked === false && document.querySelector('#q6c').checked === false && document.querySelector('#q6d').checked === false) {
        alert('You did not answer question NO.6');
        return false;
    }

    if (document.querySelector('#q7a').checked === false && document.querySelector('#q7b').checked === false && document.querySelector('#q7c').checked === false && document.querySelector('#q7d').checked === false) {
        alert('You did not answer question NO.7');
        return false;
    }

    if (document.querySelector('#q8a').checked === false && document.querySelector('#q8b').checked === false && document.querySelector('#q8c').checked === false && document.querySelector('#q8d').checked === false) {
        alert('You did not answer question NO.8');
        return false;
    }

    if (document.querySelector('#q9a').checked === false && document.querySelector('#q9b').checked === false && document.querySelector('#q9c').checked === false && document.querySelector('#q9d').checked === false) {
        alert('You did not answer question NO.9');
        return false;
    }

    if (document.querySelector('#q10a').checked === false && document.querySelector('#q10b').checked === false && document.querySelector('#q10c').checked === false && document.querySelector('#q10d').checked === false) {
        alert('You did not answer question NO.10');
        return false;
    }

    return true;
};

// Get answers
let getAnswers = () => {
    let answers = [
        document.querySelector('#q1b').checked,
        document.querySelector('#q2c').checked,
        document.querySelector('#q3c').checked,
        document.querySelector('#q4c').checked,
        document.querySelector('#q5a').checked,
        document.querySelector('#q6d').checked,
        document.querySelector('#q7d').checked,
        document.querySelector('#q8a').checked,
        document.querySelector('#q9d').checked,
        document.querySelector('#q10d').checked
    ];

    return answers;
};

submit.addEventListener('click', () => {
    if (checkEmptyQuestions() === true) {
        let answers = getAnswers();
        let counter = 0;
        let score = document.querySelector('#score');

        /* display 'V' or 'X' before before h4 */
        // Question 1
        if (answers[0] === false) {
            document.querySelector('#q1wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.1 is: '${correctAnswers[0].value}'<br>`;
        } else {
            document.querySelector('#q1correct').style.display = 'inline';
            counter++;
        }

        // Question 2
        if (answers[1] === false) {
            document.querySelector('#q2wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.2 is: '${correctAnswers[1].value}'<br>`;
        } else {
            document.querySelector('#q2correct').style.display = 'inline';
            counter++;
        }

        // Question 3
        if (answers[2] === false) {
            document.querySelector('#q3wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.3 is: '${correctAnswers[2].value}'<br>`;
        } else {
            document.querySelector('#q3correct').style.display = 'inline';
            counter++;
        }

        // Question 4
        if (answers[3] === false) {
            document.querySelector('#q4wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.4 is: '${correctAnswers[3].value}'<br>`;
        } else {
            document.querySelector('#q4correct').style.display = 'inline';
            counter++;
        }

        // Question 5
        if (answers[4] === false) {
            document.querySelector('#q5wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.5 is: '${correctAnswers[4].value}'<br>`;
        } else {
            document.querySelector('#q5correct').style.display = 'inline';
            counter++;
        }

        // Question 6
        if (answers[5] === false) {
            document.querySelector('#q6wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.6 is: '${correctAnswers[5].value}'<br>`;
        } else {
            document.querySelector('#q6correct').style.display = 'inline';
            counter++;
        }

        // Question 7
        if (answers[6] === false) {
            document.querySelector('#q7wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.7 is: '${correctAnswers[6].value}'<br>`;
        } else {
            document.querySelector('#q7correct').style.display = 'inline';
            counter++;
        }

        // Question 8
        if (answers[7] === false) {
            document.querySelector('#q8wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.8 is: '${correctAnswers[7].value}'<br>`;
        } else {
            document.querySelector('#q8correct').style.display = 'inline';
            counter++;
        }

        // Question 9
        if (answers[8] === false) {
            document.querySelector('#q9wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.9 is: '${correctAnswers[8].value}'<br>`;
        } else {
            document.querySelector('#q9correct').style.display = 'inline';
            counter++;
        }

        // Question 10
        if (answers[9] === false) {
            document.querySelector('#q10wrong').style.display = 'inline';
            score.innerHTML += `The correct answer for question NO.10 is: '${correctAnswers[9].value}'<br>`;
        } else {
            document.querySelector('#q10correct').style.display = 'inline';
            counter++;
        }

        // display:none the Submit button
        document.querySelector('#submit').style.display = 'none';

        // display:block the Reset button
        document.querySelector('#reset').style.display = 'block';

        // display score
        counter < 10 ? (score.innerHTML += `<br>You answered ${counter}/10 correctly! <br> Better luck next time!`) : (score.innerHTML = `<br><span class="boldSpan">You answered ${counter}/10 correctly! <br> You are a Mardi Gras expert!</span>`);

        document.querySelector('#score').style.display = 'block';
    }
});

reset.addEventListener('click', () => {
    // Hide all 'V' & 'X'
    document.querySelector('#q1correct').style.display = 'none';
    document.querySelector('#q1wrong').style.display = 'none';

    document.querySelector('#q2correct').style.display = 'none';
    document.querySelector('#q2wrong').style.display = 'none';

    document.querySelector('#q3correct').style.display = 'none';
    document.querySelector('#q3wrong').style.display = 'none';

    document.querySelector('#q4correct').style.display = 'none';
    document.querySelector('#q4wrong').style.display = 'none';

    document.querySelector('#q5correct').style.display = 'none';
    document.querySelector('#q5wrong').style.display = 'none';

    document.querySelector('#q6correct').style.display = 'none';
    document.querySelector('#q6wrong').style.display = 'none';

    document.querySelector('#q7correct').style.display = 'none';
    document.querySelector('#q7wrong').style.display = 'none';

    document.querySelector('#q8correct').style.display = 'none';
    document.querySelector('#q8wrong').style.display = 'none';

    document.querySelector('#q9correct').style.display = 'none';
    document.querySelector('#q9wrong').style.display = 'none';

    document.querySelector('#q10correct').style.display = 'none';
    document.querySelector('#q10wrong').style.display = 'none';

    // Display the 'submit' button back, hide the 'reset' button, reset the 'score' innerHTML and hiding it
    document.querySelector('#submit').style.display = 'block';
    document.querySelector('#reset').style.display = 'none';
    document.querySelector('#score').innerHTML = '';
    document.querySelector('#score').style.display = 'none';
});
