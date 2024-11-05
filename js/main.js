// main.js

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission using EmailJS
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate Email (Optional Enhancement)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Prepare EmailJS parameters
    const templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_9yjpp7f', 'template_x2t4v8y', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert(`Thank you for reaching out, ${firstName} ${lastName}! Your message has been sent successfully.`);
            // Reset the form fields after successful submission
            document.getElementById("contactForm").reset();
        }, function (error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
}
