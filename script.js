const addBook = document.querySelector("#addBook");
const modal = document.querySelector('.modal');
let visible = false;


function modalDisplay(){
    if(!visible){
        modal.classList.remove('not-visible');
        modal.classList.add('visible');
        visible = true;
        this.innerHTML= "X";
      }else{
        modal.classList.remove('visible');
        modal.classList.add('not-visible');
        visible = false;
        this.innerHTML= "Add new Book";
      }
}

addBook.addEventListener('click', modalDisplay);




// logic:

const myLibrary = [];

function Book(author, title, pagesNumber,read) {
  this.author = author;
  this.title = title;
  this.pagesNumber = pagesNumber;
  this.read =read;
}

const book1 = new Book('Ivo Andric','Na Drini Cuprija', 300, true);
addBookToLibrary(book1);



function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}