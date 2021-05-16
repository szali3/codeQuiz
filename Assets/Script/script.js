//containerTop elements
var highScoreEl = document.querySelector("#highScoreLink")
var timerEl = document.querySelector("#timer");

//containetertartQuiz elements
var containerStartQuizEl = document.querySelector(".containerStartQuiz");
var startBtnEl = document.querySelector(".containerStartQuiz button");

//containerQuestions elements
var containerQuestionEl = document.querySelector(".containerQuestion")
var questionEl = document.querySelector("#questions");
var btn1El = document.querySelector("#btn1");
var btn2El = document.querySelector("#btn2");
var btn3El = document.querySelector("#btn3");
var btn4El = document.querySelector("#btn4");

//create elements
//Start quiz elements
var ansDisplayEl = document.createElement("div");
var finalDispalyEl = document.createElement("section")
var finalDisplayTitle = document.createElement("p")
var FinalDisplayScore =  document.createElement("p")

//Enter High Score elements
var contFinalDisplayInitial =  document.createElement("div")
var FinalDisplayInitialTxt =  document.createElement("p")
var FinalDisplayInitialTxtBox =  document.createElement("input")
var FinalDispInitialTxtBoxSubmit =  document.createElement("button")
FinalDispInitialTxtBoxSubmit.setAttribute("type", "submit")

//Display High Score elements 
var highScoreDiv = document.createElement("div")
highScoreDiv.id = "displayDiv"
var highScoreTitle = document.createElement("h3")
var highScoreTableEl = document.createElement("table")
highScoreTableEl.id = "myTable";
var highScoreDivBtn = document.createElement("div")
highScoreDivBtn.id = "myButtonDiv"
var highScoreBtnBackEl = document.createElement("button")
var highScoreBtnClearEl = document.createElement("button")

var timeLeft = 75;
var score = 0;

//Object Array questions
var myQuestions = [
  {
    question: "Commonly used data type DO NOT include:",
    answers: {
      btn1: "1.string",
      btn2: "2.booleans",
      btn3: "3.alerts",
      btn4: "4.numbers"
    },
    correctAnswer: "btn3"
  },
  {
    question: "The condition in an if / else statment is enclosed within____.",
    answers: {
      btn1: "1.quotes",
      btn2: "2.curly brackets",
      btn3: "3.parenthesis",
      btn4: "4.square bracketes"
    },
    correctAnswer: "btn2"
  },
  {
    question: "Arrays in JavaScript can be used to store ______",
    answers: {
      btn1: "1.numbers and string",
      btn2: "2.other arrays",
      btn3: "3.booleans",
      btn4: "4.all of the above"
    },
    correctAnswer: "btn4"
  },
  {
    question: "String values must be enclosed within when being assigned to variables",
    answers: {
      btn1: "1.commas",
      btn2: "2.curly brackets",
      btn3: "3.for loops",
      btn4: "4.parenthesis"
    },
    correctAnswer: "btn4"
  },
  {
    question: "A very usefull tool used during developement and debugging for printing content to the debugger is:",
    answers: {
      btn1: "1.Javascript",
      btn2: "2.terminal/bash",
      btn3: "3.for loops",
      btn4: "4.console.log"
    },
    correctAnswer: "btn4"
  }
];

function printAnswer(i){
  questionEl.textContent = myQuestions[i]["question"]
  btn1El.textContent = myQuestions[i]["answers"]["btn1"];
  btn2El.textContent = myQuestions[i]["answers"]["btn2"];
  btn3El.textContent = myQuestions[i]["answers"]["btn3"];
  btn4El.textContent = myQuestions[i]["answers"]["btn4"];
}

function checkAnswer(e){
  if(e.target.id === myQuestions[i-1]["correctAnswer"]){
    ans = "Correct!";
  }else{
    ans = "Wrong!";
    timeLeft=timeLeft-10;
  }
  ansDisplayEl.textContent = ans;
  ansDisplayEl.className = "ansDisplay";
  containerQuestionEl.appendChild(ansDisplayEl);

  // remove display after a second
  displayInter = setInterval(function(){
    ansDisplayEl.remove();
  },1000)
}

var timeInterval;

function startTime (){
  timeInterval = setInterval (function(){
    if (timeLeft < 0) {
      clearInterval(timeInterval);
    } else {
      timerEl.textContent = timeLeft;
      timeLeft--;
    }
  },1000)
}

function startQuiz () {
  startTime(true);
  containerStartQuizEl.remove();
  document.querySelector(".containerQuestion").style.visibility = "visible";
  printAnswer(i);
  i++;
};

function finalDisplay (){
  clearInterval(timeInterval);
  timerEl.textContent = timeLeft;
  score = timeLeft;
  document.body.appendChild(finalDispalyEl);
  finalDisplayTitle.textContent = "Hello"
  FinalDisplayScore.textContent= score;
  FinalDispInitialTxtBoxSubmit.id = "submit"
  FinalDispInitialTxtBoxSubmit.textContent = "Submit"

  finalDispalyEl.appendChild(finalDisplayTitle);
  finalDispalyEl.appendChild(FinalDisplayScore);
  finalDispalyEl.appendChild(contFinalDisplayInitial);
  contFinalDisplayInitial.appendChild(FinalDisplayInitialTxt);
  contFinalDisplayInitial.appendChild(FinalDisplayInitialTxtBox);
  contFinalDisplayInitial.appendChild(FinalDispInitialTxtBoxSubmit);
  
  console.log(score);
  console.log("cannot print");
}

function highScore () {
  console.log("hello");
  finalDispalyEl.remove();

  highScoreTitle.textContent = "Highscores";
  highScoreBtnBackEl.textContent = "Got Back"
  highScoreBtnClearEl.textContent = "Clear Highscores"

  document.body.appendChild(highScoreDiv);
  highScoreDiv.appendChild(highScoreTitle);
  highScoreDiv.appendChild(highScoreTableEl);
  highScoreDiv.appendChild(highScoreDivBtn);
  highScoreDivBtn.appendChild(highScoreBtnBackEl);
  highScoreDivBtn.appendChild(highScoreBtnClearEl);

  //Initials
  intial=FinalDisplayInitialTxtBox.value;
  var localStorageContIni = localStorage.getItem("initial");
  var localStorageContScr = localStorage.getItem("score");

  var intials = [];
  var scores = [];

  if(localStorageContIni === null ||localStorageContScr === null ){
    intials = [];
    scores = [];
  } else {
    intials = JSON.parse(localStorageContIni)
    scores = JSON.parse(localStorageContScr)
  }
  
  intials.push(intial);
  scores.push(score);

  localStorage.setItem("initial", JSON.stringify(intials));
  localStorage.setItem("score", JSON.stringify(scores));


  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < intials.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cell2 = document.createElement("td")
      var cellText = document.createTextNode((i+1)+"-"+intials[i]);
      var cellText2 = document.createTextNode(scores[i]);
      cell.appendChild(cellText);
      cell2.appendChild(cellText2);
      row.appendChild(cell);
      row.appendChild(cell2);

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    highScoreTableEl.appendChild(tbl);
    // sets the border attribute of tbl to 2;
  
}

var i =0;
startBtnEl.addEventListener("click",startQuiz);

btn1El.addEventListener("click",function(e){
  if (i<myQuestions.length){
    checkAnswer(e);
    printAnswer(i);
    i++;
  } else {
    checkAnswer(e);
    containerQuestionEl.remove();
    finalDisplay();
    
  }
  });

btn2El.addEventListener("click",function(e){
  if (i<myQuestions.length){
    checkAnswer(e);
    printAnswer(i);
    i++;
  } else {
    containerQuestionEl.remove();
    finalDisplay();
  }
  });

btn3El.addEventListener("click",function(e){
  if (i<myQuestions.length){
    checkAnswer(e);
    printAnswer(i);
    i++;
  } else {
    checkAnswer(e);
    containerQuestionEl.remove();
    finalDisplay();
  }
  });

btn4El.addEventListener("click",function(e){
  if (i<myQuestions.length){
    checkAnswer(e);
    printAnswer(i);
    i++;
  } else {
    checkAnswer(e);
    containerQuestionEl.remove();
    finalDisplay();
  }
  });

  FinalDispInitialTxtBoxSubmit.addEventListener("click",highScore)

  //Reload page Event Listner go back button
  highScoreBtnBackEl.addEventListener("click",function(){
    location.reload();
  })


  //Clear Storage Event Listner clear high score button
  highScoreBtnClearEl.addEventListener("click",function(){
    localStorage.removeItem("score");
    localStorage.removeItem("initial");
    highScoreTableEl.remove();
  })

  highScoreEl.addEventListener("click",function(){
    alert("hi")
    highScore();
  })

  