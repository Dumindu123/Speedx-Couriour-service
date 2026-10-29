function submitRegister() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const phone = document.getElementById("regPhone").value;
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;

    fetch("register.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body:
            `name=${encodeURIComponent(name)}&` +
            `email=${encodeURIComponent(email)}&` +
            `phone=${encodeURIComponent(phone)}&` +
            `password=${encodeURIComponent(password)}&` +
            `confirm=${encodeURIComponent(confirm)}`
    })
    .then(res => res.text())
    .then(data => {
        if (data === "success") {
            alert("Registration successful!");
            closeRegister();
        } else if (data === "email_exists") {
            alert("Email already registered!");
        } else if (data === "password_mismatch") {
            alert("Passwords do not match!");
        } else {
            alert("Registration failed!");
        }
    });

    return false; // prevent page reload
}
function submitRegister() {
  const form = document.getElementById("registerForm");
  const formData = new FormData(form);

  fetch("register.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    const msg = data.trim();
    console.log("REGISTER RESPONSE:", msg);

    if (msg === "success") {
      alert("Registration successful!");
      form.reset();
    } else {
      alert("Register error: " + msg);
    }
  })
  .catch(err => {
    console.error(err);
    alert("Connection error!");
  });

  return false;
}
