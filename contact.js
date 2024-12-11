(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "9mOZEmQkV_sxB9-VU",
    });
})();

function sendMail(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the loader element
    expandContainerHeight();
    const loader = document.getElementById("loader");
     // Show the loader
     loader.style.display = 'flex'; // Make the loader visible

    // Get form values
    const name = document.getElementById("nameField").value;
    const mail = document.getElementById("emailField").value;
    const message = document.getElementById("messageField").value;

    // Prepare the parameters for the email
    var params = {
        from_name: name,
        to_name: 'Stefano Maisto',
        message: message,
        email_id: mail
    };

    // Send the email using emailjs
    emailjs.send("service_7a5bfbu", "template_an6mbog", params)
        .then(function (response) {
            console.log("SUCCESS!", response);
            alert("Il tuo messaggio è stato inviato con successo!");  // Success message
            clearAll();  // Clear the form fields after sending
        })
        .catch(function (error) {
            console.log("FAILED...", error);
            alert("Ops! Qualcosa è andato storto. Riprova.");  // Error message
        })
        .finally(function() {
            loader.style.display = 'none'; // Hide the loader
            collapseContainerHeight();
        });
}

function clearAll() {
    document.getElementById('nameField').value = '';
    document.getElementById('emailField').value = '';
    document.getElementById('messageField').value = '';
}

// Function to dynamically increase height of .parent-container
function expandContainerHeight() {
    const parentContainer = document.getElementById('animation-container');
    parentContainer.style.height = '18vh';  // Increase height 
}

// Function to reset height back to 0vh
function collapseContainerHeight() {
    const parentContainer = document.getElementById('animation-container');
    parentContainer.style.height = '0vh';  // Reset height to 0vh
}
