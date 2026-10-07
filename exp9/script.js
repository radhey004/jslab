function validateForm() {

    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let gender = document.getElementById("gender").value;
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message");

    // Check empty values
    if (name === "" || address === "" || city === "" ||
        state === "" || gender === "" || mobile === "" ||
        email === "") {

        message.innerHTML = "Please enter all the values.";
        message.className = "error";
        return;
    }

    // Check name
    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        message.innerHTML =
            "Invalid name. Name should contain only letters.";
        message.className = "error";
        return;
    }

    // Check city
    if (!namePattern.test(city)) {
        message.innerHTML =
            "Invalid city name.";
        message.className = "error";
        return;
    }

    // Check state
    if (!namePattern.test(state)) {
        message.innerHTML =
            "Invalid state name.";
        message.className = "error";
        return;
    }

    // Check mobile number
    let mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        message.innerHTML =
            "Invalid mobile number. Enter 10 digits.";
        message.className = "error";
        return;
    }

    // Check email
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.innerHTML =
            "Invalid email address.";
        message.className = "error";
        return;
    }

    // Successful submission
    document.getElementById("formBox").innerHTML =

        "<div id='welcome'>" +
        "<h2>Congratulations!</h2>" +
        "<p>Welcome " + name + ".</p>" +
        "<p>Your information has been submitted successfully.</p>" +
        "</div>";
}