var scoreCard = document.getElementById('score');
var QuizContainer = document.getElementById('questionBox');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var ul = document.getElementById('ul');
var btn = document.getElementById('button');



var main = {
    questions: [
        { quest: 'Which country did Corona Virus start?', options: ['USA', 'Ghana', 'China', 'Nigeria'], answer: 3 },

        { quest: 'Apart from Corona Virus, Which other disease was Deadly?', options: ['HIV', 'Ebola', 'Laser Fever', 'Malaria'], answer: 2 },

        { quest: 'Who was the first president in USA?', options: ['Barack Ubama', 'George Washington', 'John Adams', 'Samuel Adams'], answer: 2 },

        { quest: 'When Was USA Founded?', options: ['1832', '1776', '1623', '1771'], answer: 2 },

        { quest: 'WHich Year did Ebola Virus Start?', options: ['1936', '2013', '1976', '1987'], answer: 3 }
    ],
    index: 0,
    load: function() {
        if (this.index <= this.questions.length - 1) {
            QuizContainer.innerHTML = this.index + 1 + ". " + this.questions[this.index].quest;
            option1.innerHTML = this.questions[this.index].options[0];
            option2.innerHTML = this.questions[this.index].options[1];
            option3.innerHTML = this.questions[this.index].options[2];
            option4.innerHTML = this.questions[this.index].options[3];
            this.scoreCard();
        } else {

            QuizContainer.innerHTML = "Game Has Ended"
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            btn.style.display = "none";
        }
    },
    next: function() {
        this.index++;
        this.load();
    },

    check: function(ele) {

        var id = ele.id.split('');

        if (id[id.length - 1] == this.questions[this.index].answer) {
            this.score++;
            ele.className = "correct";
            this.scoreCard();

        } else {
            ele.className = "wrong";
            ele.innerHTML = "Wrong";

        }

    },
    Dntclk: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },

    UcanClk: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = ''

        }
    },
    score: 0,
    scoreCard: function() {
        scoreCard.innerHTML = "Score:" + this.score + "/" + this.questions.length;
    }

}


window.onload = main.load();

function next() {
    main.next();
    main.UcanClk();
}

function button(ele) {
    main.check(ele);
    main.Dntclk();
}