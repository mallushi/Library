//initialize an empty array to store user input
const myLibrary = [];

//define book constructor
function Book(author, title, pgnumb, read){
    this.author = author;
    this.title = title;
    this.pgnumb = pgnumb;
    this.read = read;
}

//get user input 
let dialog = document.getElementById('newBook');

document.getElementById('show').onclick = function(){
    dialog.showModal();
};
document.getElementById('hide').onclick = function(){
    dialog.close();
};

//handle form submission
document.getElementById('bookForm').addEventListener('submit', function(event){
    event.preventDefault();

    //get form values
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pgnumb = document.getElementById('pgnumb').value;
    let read = document.getElementById('read').value;
    //create a new book instance
    let book1 = new Book(author, title, pgnumb, read);
    //add the book instance to myLibrary
    myLibrary.push(book1);
    console.log(book1);
    dialog.close();
});

