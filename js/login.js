// Customer login demo
function customerLogin(){
    let email = document.getElementById("customerEmail").value;
    let password = document.getElementById("customerPassword").value;

    if(email === "" || password === ""){
        alert("Please fill all fields.");
        return false;
    }

    alert("Customer Login Successful (Frontend Demo)");
    return false; // Prevent actual submission
}

// Admin login demo
function adminLogin(){
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    if(email === "" || password === ""){
        alert("Please fill all fields.");
        return false;
    }

    alert("Admin Login Successful (Frontend Demo)");
    return false; // Prevent actual submission
}
