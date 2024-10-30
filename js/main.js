function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for reaching out, " + document.getElementById("firstName").value + " " + document.getElementById("lastName").value + 
          "! Your message has been sent to Alex Youssef. I will get back to you at " + document.getElementById("email").value +
          ". You can also reach me directly at alex.youssef@live.com.");

    // Optional: Reset the form fields after submission
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}
