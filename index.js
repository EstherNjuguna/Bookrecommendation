const bookUl = document.getElementById("book-list");
const bookElemName = document.getElementById("book-name");
const bookElemImage = document.getElementById("book-image");
const bookElemDescription = document.getElementById("book-description");


document.addEventListener("DOMContentLoaded", () => {
getBookData();
  });

  function getBookData() {
    fetch("http://localhost:3000/books")
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