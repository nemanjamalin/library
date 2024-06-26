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

const newBook = document.querySelector('#newBook');

function Book(author, title, pagesNumber,read) {
  this.author = author;
  this.title = title;
  this.pagesNumber = pagesNumber;
  this.read =read;
}

newBook.addEventListener('click', (e)=>{
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const numberOfPages = document.querySelector('#numberOfPages');
  const read = document.querySelector('#statusRead');
  document.querySelector('.main').innerHTML+= `
  
     <div class="card">
            <h2>Title: ${title.value}</h2>
            <h2>Author: ${author.value}</h2>
            <h2>Number of pages: ${numberOfPages.value}</h2>
            <h2>Read status: ${read.value}</h2>
        </div>

  `
})


function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}