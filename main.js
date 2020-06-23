

class Question {
    constructor(id, text, yes) {
        this.id = id;
        this.text = text;
        this.yes = yes;
    }
}

class Person {
    constructor(male, highschool, blackhair, tall, frenchTake, glasses, hundredfollows, name, ) {
        this.male = male;
        this.highschool = highschool;
        this.blackhair = blackhair;
        this.tall = tall;
        this.frenchTake = frenchTake;
        this.glasses = glasses;
        this.hundredfollows = hundredfollows;
        this.name = name;
    }
}

questionList = [
    new Question(1, 'Is the person a male?'),
    new Question(2, 'Is the person a high schooler?'),
    new Question(3, 'Does this person have black hair?'),
    new Question(4, "Is this person taller than 5'5?"),
    new Question(5, 'Does this person take french as a subject?'),
    new Question(6, 'Does this person wear glasses?'),
    new Question(7, 'Does this person have more than 100 followers on Instagram?'),
]

var questionCount = 0;
var attemptPerson = new Person();

yesButton = document.getElementById('yesButton');
noButton = document.getElementById('noButton');
displayText = document.getElementById('displayText');

var tempCounter = 0;

yesButton.addEventListener('click', function() {
    tempCounter++;
    if (tempCounter == questionList.length)
    {
        displayText.innerHTML = 'Are you a sarcastic person?';
    }
});
noButton.addEventListener('click', function() {
    tempCounter++;
    if (tempCounter == questionList.length)
    {
        displayText.innerHTML = 'Are you a sarcastic person?';
    }
});

yesButton.onclick = function () {
    if (questionCount != questionList.length) {
        questionList[questionCount].yes = true;
        questionCount++;
        displayText.innerHTML = questionList[questionCount].text;
    }
    else if (questionCount == questionList.length) {
        attemptPerson = new Person(
            questionList[0].yes,
            questionList[1].yes,
            questionList[2].yes,
            questionList[3].yes,
            questionList[4].yes,
            questionList[5].yes,
            questionList[6].yes,
            'Output',
        )
        check();
    }
}

noButton.onclick = function () {
    if (questionCount != questionList.length) {
        questionList[questionCount].yes = false;
        questionCount++;
        displayText.innerHTML = questionList[questionCount].text;
    }
    else if (questionCount == questionList.length) {
        attemptPerson = new Person(
            questionList[0].yes,
            questionList[1].yes,
            questionList[2].yes,
            questionList[3].yes,
            questionList[4].yes,
            questionList[5].yes,
            questionList[6].yes,
            'Output',
        )
        check();
    }
}

var personArray = [
    new Person(true, true, true, false, true, true, false, 'Aaryan Patnaik'),
    new Person(true, true, true, false, true, true, false, 'Aaman Patnaik'),
    // male, highschool, blackhair, tall, french, glasses, hundredFollows, name
]

var peopleWhoAre = [
    'Hi',
]

function check() {
    for (let index = 0; index + 1 <= personArray.length; index++) {
        let element = personArray[index];
        if (element.male == attemptPerson.male) {
            if (element.highschool == attemptPerson.highschool) {
                if (element.blackhair == attemptPerson.blackhair) {
                    if (element.tall == attemptPerson.tall) {
                        if (element.frenchTake == attemptPerson.frenchTake) {
                            if (element.glasses == attemptPerson.glasses) {
                                if (element.hundredfollows == attemptPerson.hundredfollows) {
                                    if (!peopleWhoAre.includes(element.name)) {
                                        peopleWhoAre.push(element.name);
                                        displayText.style.color = 'black';
                                    }
                                    outputPerson();
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    if (peopleWhoAre.length < 2)
    {
        displayText.innerHTML = 'Person not found. If you want to add a new person, click on the link below.'
        displayText.style.color = 'white';
        cardMain.style.background = 'rgb(216, 101, 101)';
    }
}

var cardMain = document.getElementById('cardMain');

function outputPerson() {
    function increment(temp) {
        if (!(displayText.innerHTML.toString()).includes('!')) {
            if (displayText.style.color != 'white')
            {
                displayText.innerHTML = 'Is the person ' + peopleWhoAre[temp] + '?';
                noButton.addEventListener('click', function () {
                    if (peopleWhoAre[temp + 1] != undefined)
                    {
                        temp++;
                        increment(temp);
                    }
                    else {
                        displayText.innerHTML = 'Person not found. If you want to add a new person, click on the link below.'
                        displayText.style.color = 'white';
                        cardMain.style.background = 'rgb(216, 101, 101)';
                    }
                });
            }
        }
        yesButton.addEventListener('click', function () {
            if (!(displayText.innerHTML.toString()).includes('!')) {
                if (displayText.style.color != 'white')
                {
                    displayText.innerHTML = 'The person is ' + peopleWhoAre[temp] + '!';
                    displayText.style.color = 'white';
                    cardMain.style.background = 'rgb(106, 165, 106)';
                }
            }
        });
    }
    for (let index = 0; index <= peopleWhoAre.length; index++) {
        var temp = 1;
        increment(temp);
    }
}

function refreshPage ()
{
    window.location.reload();
}