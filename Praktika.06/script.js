let userName = document.querySelector("#username");
let userPassword = document.querySelector("#password");
let userEmail = document.querySelector("#email");
let userCity = document.querySelector("#city");
let submitBtn = document.querySelector("#submitBtn");
let userForm = document.querySelector("#user-form");
let arr = [];
userForm.addEventListener("submit", function(e){
    e.preventDefault();
    let userObject = {
        Username: "",
        Password: "",
        Email: "",
        City: "",
      };
      if(userName.value == "" || userPassword.value == "" || userEmail.value == "" || userCity.value == ""){
        alert("Fill out the form")
      }
      else{
        userObject.Username = userName.value;
        userObject.Password = userPassword.value;
        userObject.Email = userEmail.value;
        userObject.City = userCity.value;
        userName.value = "";
        userPassword.value = "";
        userEmail.value = "";
        userCity.value = "";
        arr.push(userObject);

      }
      console.log(arr);
    })
