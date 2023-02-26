const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    console.log(name.value,email.value,message.value)
    await fetch('https://api.useplunk.com/v1/track', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer pk_4c039fde95b0ab2e15b214e105eeb812e51a0375d0a1f6f4",
        },
        body: JSON.stringify({
            "event": "contact form submitted",
            "email": email.value,
            'data': {'name':name.value, 'message':message.value}
        }),
    });
    await fetch('https://api.useplunk.com/v1/track', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer pk_4c039fde95b0ab2e15b214e105eeb812e51a0375d0a1f6f4",
        },
        body: JSON.stringify({
            "event": "contact form submitted",
            "email": 'lv-graphics@outlook.com',
            'data': {'name':name.value, 'message':message.value}
        }),
    });
    window.location.href = "message.html";
});


