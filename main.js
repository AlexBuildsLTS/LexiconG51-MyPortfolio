function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    
    const templateParams = {
        from_name: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        message: message,
    };

    
    emailjs.send("service_bc8cdnr", "ejs-test-mail-service", templateParams)
        .then(response => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent successfully!");
        }, error => {
            console.log("FAILED...", error);
            alert("There was an error sending your message. Please try again.");
        });
}
