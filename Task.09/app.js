let addBtn = document.querySelector("#add");
let consoleBtn = document.querySelector("#console");
let questions = document.querySelectorAll(".questions");
let submitBtn = document.querySelector("#submit");
let startBtn = document.querySelector("#startQuiz");
let resultBtn = document.querySelector("#result");
let boxsual = document.querySelector("#boxsual");
let span = document.createElement("span");
let forms = document.querySelector("form");
let Quiz = JSON.parse(localStorage.getItem("Questions")) ?? []; 
forms.addEventListener("submit", function(event){
    event.preventDefault();
    questions.forEach((q) => {
        q.value === "";
      });
    let userObj = {
        Sual: "",
        A: "",
        B: "",
        C: "",
        D: "",
        Correct: "",
      };
    
      userObj.Sual = questions[0].value;
      userObj.A = questions[1].value;
      userObj.B = questions[2].value;
      userObj.C = questions[3].value;
      userObj.D = questions[4].value;
      userObj.Correct = questions[5].value;
      Quiz.push(userObj);
      localStorage.setItem("Questions", JSON.stringify(Quiz));

});
consoleBtn.addEventListener("click", function(){
 console.log(JSON.parse(localStorage.getItem("Questions")));
 
});
startBtn.addEventListener("click", function(){
    JSON.parse(localStorage.getItem("Questions")).forEach((cvb) => {
        span.innerHTML += `<p>${cvb.Sual}</p>
        <p>${cvb.A}</p>
        <p>${cvb.B}</p>
        <p>${cvb.C}</p>
        <p>${cvb.D}</p>`
        boxsual.append(span);
    })

  
})

// console.log(Quiz);
// localStorage.clear()

