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
  getBookData()
  
  function bookData(data) {
    data.forEach((data) => {
      const list = document.createElement("li");
      list.style.fontSize = "18px";
      list.innerText = data.name;
      bookUl.appendChild(list);

      list.addEventListener("click", () => {
        bookElemName.textContent = data.name;
        bookElemName.style.color = "red";       
        bookElemImage.setAttribute("src", data.image_url);
        bookElemDescription.textContent = data.description;
        bookElemDescription.style.fontSize = "18px"
      });
    });
  }
