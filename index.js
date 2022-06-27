let books = []
function getBookData(bookId) {
  fetch("http://localhost:3000/books/"+ bookId)
    .then((res) => res.json())
    .then((bookdata) => {
      let firstItem = document.querySelector("#book-name");
      firstItem.innerText = bookdata.name;
      let description = document.querySelector("#book-description");
      description.innerText = bookdata.description;

      let image = document.querySelector("#book-image");
      image.src = bookdata.image_url;
    })
    .catch((error) => console.warn(error));
}
getBookData(1)
function  booksClick(bookId){
  getBookData(bookId)
}
function navDisplay() {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((data) => {
      const ul = document.getElementById("book-list");
      ul.innerHTML = "";
      for (const item of data) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item.name));
        li.id = item.id;
        li.setAttribute("onclick","bookClick("+item.id+")")
        ul.appendChild(li);
      }
    })
    .catch((error) => console.warn(error));
}
navDisplay();
