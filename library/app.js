const myLibrary = [];

// Get HTML elements
const newBookBtn = document.getElementById("new-book-btn");
const formContainer = document.getElementById("book-form-container");
const bookForm = document.getElementById("book-form");
const cancelBtn = document.getElementById("cancel-btn");
const libraryContainer = document.getElementById("library-container");

// Book Constructor
function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Method to toggle read status
Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

// Add book to library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// Display books
function displayBooks() {
    libraryContainer.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-item");

        bookDiv.innerHTML = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${
                book.read ? "Read" : "Not Read"
            }</p>
        `;

        // Toggle read button
        const toggleBtn = document.createElement("button");

        toggleBtn.textContent = book.read
            ? "Mark as Not Read"
            : "Mark as Read";

        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });

        // Delete button
        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Remove Book";
        deleteBtn.addEventListener("click", () => {
            const index = myLibrary.findIndex(
                (item) => item.id === book.id
            );
            myLibrary.splice(index, 1);
            displayBooks();
        });

        bookDiv.appendChild(toggleBtn);
        bookDiv.appendChild(deleteBtn);

        libraryContainer.appendChild(bookDiv);
    });
}

newBookBtn.addEventListener("click", () => {
    formContainer.style.display = "block";
});

// Hide form when Cancel is clicked
cancelBtn.addEventListener("click", () => {
    formContainer.style.display = "none";
    bookForm.reset();
});

// Submit form
bookForm.addEventListener("submit", (event) => {

    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(
        title,
        author,
        pages,
        read
    );

    // Reset form
    bookForm.reset();

    // Hide form
    formContainer.style.display = "none";
});