let inputText = document.querySelector("#text");
let editBtn = document.querySelector("#edit");
let deleteBtn = document.querySelector("#delete");
let box = document.querySelector("#box");
let addBtn = document.querySelector("#add");
let textValue;
let allInputsData =
  JSON.parse(localStorage.getItem("Text")) === null
    ? []
    : JSON.parse(localStorage.getItem("Text"));


inputText.addEventListener("keypress" , function(e){
    if(e.keyCode == 13){
        allInputsData.push(inputText.value);
        textSpan = document.createElement("span")
        allInputsData.forEach(element => {
            textValue = element;
        });
        textSpan.innerText = textValue;
        // console.log(textSpan);
        box.appendChild(textSpan);
        inputText.value = ""
         
         
    }
    localStorage.setItem("Text", JSON.stringify(allInputsData));

    
   
});
deleteBtn.addEventListener("click", function(){
    // console.log(textSpan);
   textSpan.remove(); 
});

// localStorage.clear();


























































