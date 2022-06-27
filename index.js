//`http://openlibrary.org/search/authors.json?q=$(name)`
const bookUl = document.getElementById("book-list");
const bookElemName = document.getElementById("book-name");
const bookElemImage = document.getElementById("boo");
const bookElemDescription = document.getElementById("book-description");
let image = document.querySelector("#boo");


document.addEventListener("DOMContentLoaded", () => {
getBookData();
  });

  function getBookData() {
    const url="https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json"
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        image.src = data.imageLinks;
        console.log(image.src)
        
      })
    }
  
  

 
  function bookData(data) {
    data = JSON.parse(data);
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
const bookReviews = document.getElementById('review-list');
  document.querySelector('#review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let text = document.querySelector('#review-form textarea')
    let listReveiw = document.createElement('li');
    listReveiw.innerText = text.value;
    beerReviews.appendChild(listReveiw);
    document.querySelector('#review-form').reset();
})