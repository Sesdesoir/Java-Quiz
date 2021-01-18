//html elements
var question = document.querySelector("#question");
var multiChoiceDiv = document.querySelector("#multiChoice");
var startButton = document.querySelector("#start");
var header = document.querySelector("#headDiv");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
var letterheadA = document.querySelector("#choiceA");
var letterheadB = document.querySelector("#choiceB");
var letterheadC = document.querySelector("#choiceC");
var letterheadD = document.querySelector("#choiceD");
//Created Element & Styling
var clock = document.createElement("p");
clock.style.textAlign = "center";
clock.style.fontSize = "40px";
clock.style.fontWeight= "bold";
clock.style.color= "red";
//Variables
var timer = 6;
var score = 0;
var index;
//Array of predefined question objects *currently no constructor for more objects*
var questions = [{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();",
answer: "console.log();"
}];
//Essentially being used to console track how many questions are left. This is the beginning and should be 10
console.log("Beginning " + questions.length);
//Define Functions
function pickQuestion() {
    index = Math.floor(Math.random()*(questions.length-1))     
    var randomQuestion = questions[index];
    question.innerText = randomQuestion.questionNum;
    a.innerText = randomQuestion.ChoiceA;
    b.innerText = randomQuestion.ChoiceB;
    c.innerText = randomQuestion.ChoiceC;
    d.innerText = randomQuestion.ChoiceD;
    questions.splice(index,1);
    };
function intervalSet(){
    var interval = setInterval(function(){
    timer--
    clock.innerText = timer;
    if (timer === 0){
        question.innerText = "Quizz over you scored " + score + " points!"; 
        console.log(score + "points Quiz Over");
        a.style.visibility = "hidden";
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";
        letterheadA.style.visibility = "hidden";
        letterheadB.style.visibility = "hidden";
        letterheadC.style.visibility = "hidden";
        letterheadD.style.visibility = "hidden";
        clearInterval(interval);
    }
},1000)};
//Quiz Start
startButton.addEventListener("click", function(event){
    event.preventDefault;
    startButton.style.display = "none";
    clock.innerText = timer;
    header.appendChild(clock);
    intervalSet();
    question.style.visibility = "visible";
    a.style.visibility = "visible";
    b.style.visibility = "visible";
    c.style.visibility = "visible";
    d.style.visibility = "visible";
    letterheadA.style.visibility = "visible";
    letterheadB.style.visibility = "visible";
    letterheadC.style.visibility = "visible";
    letterheadD.style.visibility = "visible";
    pickQuestion();
    console.log(questions.length + " questions left.");
});
//Button click for Multiple Choice A
a.addEventListener("click", function(){
    if (questions.length> 1){
        if(questions[index].answer === a.innerText ){
            score += 10;
            pickQuestion();
            console.log(score + " points");
            console.log(questions.length + " questions left. ");
            console.log(index + " random index");
            }
        else{
            score -= 10;
            pickQuestion();
            console.log(score + "points");
            console.log(questions.length + " questions left.");
        }
    }
    else{
        if(questions[index].answer === a.innerText ){
            score += 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }
        else{
            score -= 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }            
    }
});
//Button click for Multiple Choice B
b.addEventListener("click", function(){
    if (questions.length> 1){
        if(questions[index].answer === b.innerText ){
            score += 10;
            pickQuestion();
            console.log(score + " points");
            console.log(questions.length + " questions left. ");
            console.log(index + " random index");
            }
        else{
            score -= 10;
            pickQuestion();
            console.log(score + "points");
            console.log(questions.length + " questions left.");
        }
    }
    else{
        if(questions[index].answer === b.innerText ){
            score += 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }
        else{
            score -= 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }            
    }
});
//Button click for Multiple Choice C
c.addEventListener("click", function(){
    if (questions.length> 1){
        if(questions[index].answer === c.innerText ){
            score += 10;
            pickQuestion();
            console.log(score + " points");
            console.log(questions.length + " questions left. ");
            console.log(index + " random index");
            }
        else{
            score -= 10;
            pickQuestion();
            console.log(score + "points");
            console.log(questions.length + " questions left.");
        }
    }
    else{
        if(questions[index].answer === c.innerText ){
            score += 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }
        else{
            score -= 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }            
    }
});
//Button click for Multiple Choice D
d.addEventListener("click", function(){
    if (questions.length> 1){
        if(questions[index].answer === d.innerText ){
            score += 10;
            pickQuestion();
            console.log(score + " points");
            console.log(questions.length + " questions left. ");
            console.log(index + " random index");
            }
        else{
            score -= 10;
            pickQuestion();
            console.log(score + "points");
            console.log(questions.length + " questions left.");
        }
    }
    else{
        if(questions[index].answer === d.innerText ){
            score += 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }
        else{
            score -= 10;
            score += (timer * 10);
            console.log(score + "points Quiz Over");
            a.style.visibility = "hidden";
            b.style.visibility = "hidden";
            c.style.visibility = "hidden";
            d.style.visibility = "hidden";
            letterheadA.style.visibility = "hidden";
            letterheadB.style.visibility = "hidden";
            letterheadC.style.visibility = "hidden";
            letterheadD.style.visibility = "hidden";
        }            
    }
});






   


