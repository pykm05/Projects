const myLibrary = [];

// Book constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function createBook(event) {
  const author = document.querySelector("#author");
  const title = document.querySelector("#title");
  const pages = document.querySelector("#pageCount");
  const read = document.querySelector("#hasRead");

  let newBook = document.createElement("div");
  newBook.classList.add("book");
  newBook.textContent = title.value + " --------- By: " + author.value;
  let container = document.getElementById("book-container");
  container.appendChild(newBook);

  event.preventDefault();
}

const submit = document.querySelector("#submit");
submit.addEventListener('click', createBook, false);
