let text = document.getElementsByClassName('text')[0];
let textarea = document.createElement('textarea');

function convertToTextarea() {
    text.contenteditable = true; 
    textarea.value = text.innerHTML;
    text.replaceWith(textarea);
    textarea.focus();
}

function convertToDiv() {
    text.innerHTML = textarea.value;
    textarea.replaceWith(text);

}

document.addEventListener('keydown', (event) => {
    if(event.ctrlKey && event.key === 'e') {
        event.preventDefault();
        convertToTextarea();
    }
    if(event.ctrlKey && event.key === 's') {
        event.preventDefault();
        convertToDiv();
    }
})