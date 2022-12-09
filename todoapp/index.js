let inputsearch = document.querySelector("#inputsearch");
let deleteBtn = document.querySelector("#deleteBtn");
let addBtn = document.querySelector("#addBtn");
let box = document.querySelector(".box");

addBtn.addEventListener("click" , function(){
    if(inputsearch.value == ""){
        alert("Write Smth")
    }
    else{
        let ul = document.createElement("ul");
        let li  = document.createElement("li");
        li.innerText = inputsearch.value;
        inputsearch.value = "";
        // box.appendChild(li);
        // ul.appendChild(li);
        // box.appendChild(ul);
        let toggleBtn = document.createElement("button");
        toggleBtn.className = "toggleBtn";
        toggleBtn.innerHTML = `<i class="fa-solid fa-list-ul"></i>`;
        li.appendChild(toggleBtn);
        box.appendChild(ul);
        ul.appendChild(li);
        let editBtn = document.createElement("button");
        let delBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        delBtn.classList.add("delBtn");
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        // box.appendChild(li);
        // ul.appendChild(li);
        // box.appendChild(ul);
        toggleBtn.addEventListener("click", function(){
            editBtn.classList.toggle("active");
            delBtn.classList.toggle("active");
            // console.log("hello");
        })
        delBtn.addEventListener("click", function(){
            li.remove();
        })
        deleteBtn.addEventListener("click", function(){
            ul.remove();
        })
        deleteBtn.addEventListener("click", function(){
            setTimeout(() => {
                inputsearch.value = ""
                box.innerText = "Delete All Tasks";
            }, 2000)
        })

     
    }
})