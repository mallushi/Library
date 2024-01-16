//initialize an empty array to store user input
const myLibrary = [];

//define book constructor
function Book(author, title, pgnumb, read){
    this.author = author;
    this.title = title;
    this.pgnumb = pgnumb;
    this.read = read;
}

//add function to book constructor
Book.prototype.toggleReadStatus = function(){
    this.read = !this.read;
}

//display book objects as cards
function addBookToLibrary(myLibrary){
    document.getElementById('libraryContainer').innerHTML = '';

    for(i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.classList.add('book-card');
        card.innerHTML = `
            <p class="card" class="card-title">Title: ${myLibrary[i].title}</p>
            <p class="card" class="card-author">Author: ${myLibrary[i].author}</p>
            <p class="card" class="card-author">Page number: ${myLibrary[i].pgnumb}</p>
            <button class="toggle-read" data-index="${[i]}">${myLibrary[i].read ? 'Read' : 'Unread'}</button><br>
            <button class="delete" data-index="${[i]}">Delete</button>
        `;

        //event listener to toggle between read and unread status
        card.querySelector('.toggle-read').addEventListener('click', function(){
            let index = this.getAttribute('data-index');
            myLibrary[index].toggleReadStatus();
            addBookToLibrary(myLibrary);
        })

        //event listener to delete book when button is clicked
        card.querySelector('.delete').addEventListener('click', function(){
            let index = this.getAttribute('data-index');
            myLibrary.splice(index, 1);
            addBookToLibrary(myLibrary);
        })
        document.getElementById('libraryContainer').appendChild(card);
    }
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
    let read = document.getElementById('read').checked;

    //create a new book instance
    let book1 = new Book(author, title, pgnumb, read);

    //add the book instance to myLibrary array
    myLibrary.push(book1);

    //add book to the library display
    addBookToLibrary(myLibrary);

    //clear content after submission
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('pgnumb').value = '';
    document.getElementById('read').checked = false;

    //close the dialog afer submission
    dialog.close();
});


