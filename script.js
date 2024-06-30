
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

const myLibrary = [{author: 'MyselfAgain', title: 'Initial 2', pagesNumber: 'still 0', read: 'stil no'}];

myLibrary.forEach((element,index)=>{
  console.log(element.title);
  displayBook(element.title,element.author,element.pagesNumber,element.read,index);
});

let newBook = document.querySelector('#newBook'); //button that inititates new book addition



function Book(author, title, pagesNumber,read) {
  this.author = author;
  this.title = title;
  this.pagesNumber = pagesNumber;
  this.read =read;
} // function constructor to make new book object


function displayBook(title, author, numberOfPages, read, index){ //display new book card in amin
  document.querySelector('.initial').insertAdjacentHTML("afterend",
    `
     <div class="card" data-index="${index}">
            <h2>Title: ${title|| "not-defined"}</h2>
            <h2>Author: ${author || "not-defined"}</h2>
            <h2>Number of pages: ${numberOfPages || "not-defined"}</h2>
            <h2 class="status">Read status: ${read || "not-defined"}</h2>

              <button class="removeBook">Remove</button>
              <button class="changeStatus">Change</button>
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


function changeStatus(book,index){
  let status = book.querySelector('.status');
  console.log(status.innerHTML);
  if(status.innerHTML !== "Read status: Yes") {
    status.innerHTML = "Read status: Yes";
    myLibrary[index].read = "Yes";
  }else  if(status.innerHTML == "Read status: Yes") {
    status.innerHTML = "Read status: No";
    myLibrary[index].read = "No";
  } 
}


newBook.addEventListener('click', function(event){
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const numberOfPages = document.querySelector('#numberOfPages').value;
  const read = document.querySelector('#statusRead').value;


  const book = new Book(author,title,numberOfPages,read);
  displayBook(title,author,numberOfPages,read,storeBookObject(book));

});

document.querySelector('.main').addEventListener('click', function(event){
  event.preventDefault();
  
  if(event.target.classList.contains('removeBook')){
    removeBook(event.target.closest('.card').dataset.index);
    event.target.closest('.card').remove();
  }

  if(event.target.classList.contains('changeStatus')){
    changeStatus(event.target.closest('.card'),event.target.closest('.card').dataset.index);
  }
  
});




