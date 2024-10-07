const myLibrary = [];

// Book constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book);
  let newBook = document.createElement("div");
  newBook.classList.add("book");
  newBook.textContent = Book.author;
  let container = document.getElementById("book-container");
  container.appendChild(newBook);
}

addBookToLibrary(new Book("aaron", "skibidi", 123, true));