const bookUl = document.getElementById("book-list");
const bookElemName = document.getElementById("book-name");
const bookElemImage = document.getElementById("book-image");
const bookElemDescription = document.getElementById("book-description");


document.addEventListener("DOMContentLoaded", () => {
getBookData();
  });

  function getBookData() {
    fetch("https://blooming-lake-11486.herokuapp.com/books")
      .then((response) => response.json())
      .then((data) => bookData(data));
  }
  
  
  function bookData(data) {
    data.forEach((data) => {
      const list = document.createElement("li");
      list.style.fontSize = "20px";
      list.innerText = data.name;
      bookUl.appendChild(list);

      list.addEventListener("click", () => {
        bookElemName.textContent = data.name;
        bookElemName.style.color = "blue";       
        bookElemImage.setAttribute("src", data.image_url);
        bookElemDescription.textContent = data.description;
        bookElemDescription.style.fontSize = "20px"
      });
    });
  }
  const form =document.getElementById("description-form")
  form.onsubmit=handleReview
  function handleReview(event){
     event.preventDefault()
     console.log("form submitted")
     let review = document.getElementById("description").value
     const ul = document.getElementById("progress");
     let li = document.createElement("li");
         li.appendChild(document.createTextNode(review));
         ul.appendChild(li);   
  }
  const loginButton = document.getElementById("btn1");
  const signUpButton = document.getElementById("btn2");
  const signUpRedirect = document.getElementById("signOn");
  const logInRedirect = document.getElementById("logOn")
  const showName = document.getElementById("userInputName");
  
  
  //signup
  const form = document.getElementById("sign-up");
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const password = document.getElementById("userPassword");
  const confirmPassword = document.getElementById("userPassword1");
  const submitButton = document.getElementById("submit")
  
  
  // Login
  const username = document.getElementById("username");
  const userPassword = document.getElementById("userPassword2");
  const subButton = document.getElementById("submitIn");
  
  // Display login form
  loginButton.addEventListener("click", () => {
      const signIn = document.getElementById("signIn");
      signIn.style.display = "block";
  });
  
  // Login as user 
  subButton.addEventListener("click", () => {
      alert("Welcome" + " " + username.value)
      document.getElementById("userInputName").innerHTML = username.value;
      const signIn = document.getElementById("signIn");
      signIn.style.display = "none";
  })
  
  
  // Hide login form
  document.getElementById("x2").addEventListener("click", () => {
      const signIn = document.getElementById("signIn");
      signIn.style.display = "none";
  })
  
  
  // Display signup form
  signUpButton.addEventListener("click", () => {
      const signUp = document.getElementById("register");
      signUp.style.display = "block";
  });
  
  // Hide signup form
  document.getElementById("x1").addEventListener("click", () => {
      const signUp = document.getElementById("register");
      signUp.style.display = "none";
  })
  