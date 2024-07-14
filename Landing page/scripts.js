document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:your-mail@gmail.com?subject=Contact%20from%20${name}&body=${encodeURIComponent(message)}%0A%0AContact%20Email:%20${email}`;
    
    window.location.href = mailtoLink;
});
