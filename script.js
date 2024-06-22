document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Fetch input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can perform validation here if needed

        // Example: Log the values to console (you can replace this with actual submission logic)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optional: Show a confirmation message to the user
        alert('Message sent successfully!');

        // Clear the form after submission (optional)
        contactForm.reset();
    });
});