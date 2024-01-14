//initialize an empty array to store user input
const myLibrary = [];

//define book constructor
function Book(author, title, pgnumb, read){
    this.author = author;
    this.title = title;
    this.pgnumb = pgnumb;
    this.read = read;
}

function addBookToLibrary(myLibrary){
    document.getElementById('libraryContainer').innerHTML = '';

    for(i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        card.classList.add('book-card');
        card.innerHTML = `
            <p>Author: ${myLibrary[i].author}</p>
            <p>Title: ${myLibrary[i].title}</p>
            <p>Page number: ${myLibrary[i].pgnumb}</p>
            <p>Read: ${myLibrary[i].read ? 'Yes' : 'No'}</p>
        `;
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
    document.getElementById('read').checked = '';

    //close the dialog afer submission
    dialog.close();
});