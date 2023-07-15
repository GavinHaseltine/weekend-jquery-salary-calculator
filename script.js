$(document).ready(onReady);

function onReady() {
    console.log('jQuery, hype');

    $('#submitButton').on('click', handleSubmit)

}

function handleSubmit (event) {
    event.preventDefault();
    console.log('In Handle Submit');
}