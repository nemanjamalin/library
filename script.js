
// displaying the "modal" to add book
const addBook = document.querySelector("#addBook");
let visible = false;


function modalDisplay(){
  const modalWindow = document.querySelector('.modal');
    if(!visible){
        modalWindow.classList.toggle('not-visible');
        visible = true;
        this.innerHTML= "X";
        console.log(visible);
      }else{
        modalWindow.classList.toggle('not-visible');
        visible = false;
        this.innerHTML= "Add new Book";
      }
}

addBook.addEventListener('click', modalDisplay);




// adding books logic:

const myLibrary = [];

let newBook = document.querySelector('#newBook'); //button that inititates new book addition



function Book(author, title, pagesNumber,read) {
  this.author = author;
  this.title = title;
  this.pagesNumber = pagesNumber;
  this.read =read;
} // function constructor to make new book object


function displayBook(title, author, numberOfPages, read, index){ //display new book card in amin

  document.querySelector('.card').insertAdjacentHTML("afterend",
    `
     <div class="card" data-index="${index}">
            <h2>Title: ${title.value || "not-defined"}</h2>
            <h2>Author: ${author.value || "not-defined"}</h2>
            <h2>Number of pages: ${numberOfPages.value || "not-defined"}</h2>
            <h2>Read status: ${read.value || "not-defined"}</h2>

              <button class="removeBook">Remove</button>
        </div>
  `
  );
}

function storeBookObject(book) {
  myLibrary.push(book);
  return myLibrary.length - 1;
} 

function removeBook(index){
  if(myLibrary.length === 1){
    myLibrary.splice(0,1);
  }
  myLibrary.splice(index, 1);
}



newBook.addEventListener('click', function(event){
  event.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const numberOfPages = document.querySelector('#numberOfPages');
  const read = document.querySelector('#statusRead');


  const book = new Book(author.value,title.value,numberOfPages.value,read.value);
  displayBook(title,author,numberOfPages,read,storeBookObject(book));

});

document.querySelector('.main').addEventListener('click', function(event){
  event.preventDefault();
  
  if(event.target.classList.contains('removeBook')){
    removeBook(event.target.closest('.card').dataset.index);
    event.target.closest('.card').remove();
  }
  
});


