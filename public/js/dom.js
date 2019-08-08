const input = document.querySelector('#input');
const error = document.querySelector('#error-msg');

input.addEventListener('keyup', (e) => {
    error.textContent = '';
    const book_title = e.target.value.trim();
    const reg = /^[a-zA-Z0-9-\s]*$/
    if (!book_title) {
        error.textContent = 'Enter book titel';
    } else if (!reg.test(book_title)) {
        error.textContent = 'The titel must be just letters or numbers';
    }
});



