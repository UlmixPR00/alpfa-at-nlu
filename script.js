function emailForm() {
    const email = document.getElementById("emailInput").value;
    const msg = document.getElementById("message");
	var button = document.getElementById("emailButton");

    if (email === "") {
        msg.textContent = "Please enter your email.";
        msg.style.color = "red";
		button.classList.add("active");
        button.classList.remove("inactive");
    }
    else if (!email.includes("@")) {
        msg.textContent = "Invalid email format.";
        msg.style.color = "red";
		button.classList.remove("active");
        button.classList.add("inactive");
		
    }
    else {
		msg.textContent = "Email submitted successfully!";
		msg.style.color = "green";
		msg.classList.add("show");
		button.classList.remove("active");
		button.classList.add("inactive");
	}
	
}