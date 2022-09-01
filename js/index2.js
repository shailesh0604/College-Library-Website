class Book{
    constructor(name,author,type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add(book) {
        console.log('adding ui');
        let tableBody = document.getElementById('tableBody');
        let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            </tr>
        `;
        tableBody.innerHTML += uiString;
        
    }

    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book){
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }
        else{
            return true;
        }
    }

    show(type, displayMessage) {

        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'success';
        }
        else{
            boldText = 'error';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${boldText}:</strong> ${displayMessage}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
        setTimeout(function () {
            message.innerHTML = ''
        }, 4000);
    
    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted library form");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;

    // grabbing type 
    let Gaming = document.getElementById('Gaming');
    let Programming = document.getElementById('Programming');
    let Course = document.getElementById('Course');

    if (Gaming.checked) {
        type = Gaming.value;
    } 

    else if (Programming.checked) {
        type = Programming.value;
    }

    else if (Course.checked) {
        type = Course.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    e.preventDefault();

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'your book successfully added.');
    }

    else {
        // show the error  
        display.show('danger', 'sorry you cannot add the book.');
    }
};