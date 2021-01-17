//html elements
var question = document.querySelector("#question");
var multiChoiceDiv = document.querySelector("#multiChoice");
var startButton = document.querySelector("#start");
var header = document.querySelector("#headDiv");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
//Variables
var timer = 6;
//Array of predefined question objects *currently no constructor for more objects*
var questions = [{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
},
{
questionNum: "How do you display something to the console?",
ChoiceA:"print();",
ChoiceB:"display();",
ChoiceC:"console();",
ChoiceD:"console.log();"
}];

//Quiz Start
startButton.addEventListener("click", function(event){
    event.preventDefault;
    startButton.style.display = "none";
    var clock = document.createElement("p");
    clock.innerText = timer;
    header.appendChild(clock);
    clock.style.textAlign = "center";
    clock.style.fontSize = "40px";
    clock.style.fontWeight= "bold";
    clock.style.color= "red";
    var interval = setInterval(function(){
        timer--
        clock.innerText = timer;
        if (timer === 0){
            clearInterval(interval);
        }
    }, 1000);
    question.style.visibility = "visible";
    a.style.visibility = "visible";
    b.style.visibility = "visible";
    c.style.visibility = "visible";
    d.style.visibility = "visible";
    pickQuestion();
});

function pickQuestion() {
var randomQuestion = questions[Math.floor(Math.random()*questions.length)];
question.innerText = randomQuestion.questionNum;
a.innerText += (" " + randomQuestion.ChoiceA);
b.innerText += (" " + randomQuestion.ChoiceB);
c.innerText += (" " + randomQuestion.ChoiceC);
d.innerText += (" " + randomQuestion.ChoiceD);
};

//Multiple choice div where the actual questions take place
//question.innerText = questions[Math.floor(Math.random()*questions.length)];



   


