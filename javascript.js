//initialize an empty array to store user input
const myLibrary = [];

function Book(author, title, number, read){
    this.author = author;
    this.title = title;
    this.number = number;
    this.read = read;
}

//function to get user input and store it in the array;
//function addBookToLibrary(){
    let dialog = document.getElementById('newBook');
    document.getElementById('show').onclick = function(){
        dialog.showModal();
    };
    document.getElementById('hide').onclick = function(){
        dialog.close();
    };
//};
