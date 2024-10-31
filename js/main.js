function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Display alert message
    alert(`Thank you for reaching out, ${firstName} ${lastName}! Your message has been sent to Alex Youssef. I will get back to you at ${email}. You can also reach me directly at alex.youssef@live.com.`);

    // Reset the form fields after submission
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}
