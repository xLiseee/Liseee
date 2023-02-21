const form = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#status-message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        form.reset();
        statusMessage.textContent = 'Thanks for contacting us!';
    } else {
        statusMessage.textContent = 'Oops! Something went wrong.';
    }
});
