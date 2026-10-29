// LOGIN MODAL
function openLogin(userType){
    document.getElementById("loginModal").style.display = "flex";
    document.getElementById("forgotForm").style.display = "none";
    document.getElementById("customerForm").style.display = userType==="customer"?"block":"none";
    document.getElementById("adminForm").style.display = userType==="admin"?"block":"none";
    document.getElementById("loginTitle").innerText = userType==="customer"?"Customer Login":"Admin Login";
}
function closeLogin(){document.getElementById("loginModal").style.display = "none";}
function showForgot(userType){
    document.getElementById("customerForm").style.display="none";
    document.getElementById("adminForm").style.display="none";
    document.getElementById("forgotForm").style.display="block";
    document.getElementById("loginTitle").innerText=userType==="customer"?"Customer Password Reset":"Admin Password Reset";
}
function backToLogin(){
    document.getElementById("forgotForm").style.display="none";
    document.getElementById("customerForm").style.display="block";
    document.getElementById("adminForm").style.display="none";
    document.getElementById("loginTitle").innerText="Customer Login";
}

// LOGIN DEMO
function customerLogin(){
    let e=document.getElementById("customerEmail").value;
    let p=document.getElementById("customerPassword").value;
    if(!e||!p){alert("Please fill all fields."); return false;}
    alert("Customer Login Successful (Demo)"); closeLogin(); return false;
}
function adminLogin(){
    let e=document.getElementById("adminEmail").value;
    let p=document.getElementById("adminPassword").value;
    if(!e||!p){alert("Please fill all fields."); return false;}
    alert("Admin Login Successful (Demo)"); closeLogin(); return false;
}

// PASSWORD RESET
function resetPassword(){
    let e=document.getElementById("forgotEmail").value;
    if(!e){alert("Please enter your email."); return false;}
    alert("Password reset instructions sent to "+e+" (Demo)"); closeLogin(); return false;
}

// REGISTER MODAL
function openRegister(){document.getElementById("registerModal").style.display="flex";}
function closeRegister(){document.getElementById("registerModal").style.display="none";}
function registerUser(){
    let n=document.getElementById("regName").value;
    let e=document.getElementById("regEmail").value;
    let p=document.getElementById("regPassword").value;
    let c=document.getElementById("regConfirmPassword").value;
    if(!n||!e||!p||!c){alert("Please fill all fields."); return false;}
    if(p!==c){alert("Passwords do not match."); return false;}
    alert("Registration Successful (Demo)"); closeRegister(); return false;
}

// TRACK PARCEL
function trackParcel(){
    let t=document.getElementById("trackingNo").value;
    let r=document.getElementById("trackResult");
    if(!t){r.innerHTML="Please enter a tracking number.";}
    else{r.innerHTML="Tracking Number "+t+" is in transit 🚚";}
}
function openPayment() {
    document.getElementById("paymentModal").style.display = "flex";
}

function closePayment() {
    document.getElementById("paymentModal").style.display = "none";
}

// Optional: fake submit
document.getElementById("paymentForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Payment Successful (Demo)");
    closePayment();
});
function openLogin(){
    document.getElementById("loginModal").style.display="flex";
    showCustomer(); // default tab
}

function closeLogin(){
    document.getElementById("loginModal").style.display="none";
}

function showCustomer(){
    document.getElementById("customerForm").style.display="block";
    document.getElementById("adminForm").style.display="none";
    document.getElementById("customerTab").classList.add("active");
    document.getElementById("adminTab").classList.remove("active");
}

function showAdmin(){
    document.getElementById("customerForm").style.display="none";
    document.getElementById("adminForm").style.display="block";
    document.getElementById("adminTab").classList.add("active");
    document.getElementById("customerTab").classList.remove("active");
}

// Demo login validation
function customerLogin(){
    let email = document.getElementById("customerEmail").value;
    let password = document.getElementById("customerPassword").value;
    if(email===""||password===""){
        alert("Please fill all fields.");
        return false;
    }
    alert("Customer Login Successful (Frontend Demo)");
    closeLogin();
    return false;
}

function adminLogin(){
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;
    if(email===""||password===""){
        alert("Please fill all fields.");
        return false;
    }
    alert("Admin Login Successful (Frontend Demo)");
    closeLogin();
    return false;
}
/* ================================
   FORGOT USERNAME MODAL
================================ */

function openForgotUsername() {
    closeLogin();
    document.getElementById("forgotUsernameModal").style.display = "flex";
}

function closeForgotUsername() {
    document.getElementById("forgotUsernameModal").style.display = "none";
}

/* ================================
   REGISTER MODAL
================================ */

function openRegister() {
    closeLogin();
    document.getElementById("registerModal").style.display = "flex";
}

function closeRegister() {
    document.getElementById("registerModal").style.display = "none";
}

/* ================================
   OPTIONAL FORM HANDLERS
================================ */

function submitForgotUsername() {
    const email = document.getElementById("forgotEmail").value;

    if (email === "") {
        alert("Please enter your registered email.");
        return false;
    }

    alert("Username recovery instructions sent to " + email);
    closeForgotUsername();
    return false;
}

/* =========================
   OPEN / CLOSE MODALS
========================= */

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function openForgotUsername(e) {
  e.preventDefault();
  closeLogin();
  document.getElementById("forgotUsernameModal").style.display = "flex";
}

function closeForgotUsername() {
  document.getElementById("forgotUsernameModal").style.display = "none";
}

function openRegister(e) {
  e.preventDefault();
  closeLogin();
  document.getElementById("registerModal").style.display = "flex";
}

function closeRegister() {
  document.getElementById("registerModal").style.display = "none";
}

function backToLogin(e) {
  e.preventDefault();
  closeForgotUsername();
  closeRegister();
  openLogin();
}

/* =========================
   CUSTOMER / ADMIN SWITCH
========================= */

function showCustomer() {
  document.getElementById("customerForm").style.display = "block";
  document.getElementById("adminForm").style.display = "none";
  document.getElementById("customerTab").classList.add("active");
  document.getElementById("adminTab").classList.remove("active");
}

function showAdmin() {
  document.getElementById("customerForm").style.display = "none";
  document.getElementById("adminForm").style.display = "block";
  document.getElementById("adminTab").classList.add("active");
  document.getElementById("customerTab").classList.remove("active");
}

/* =========================
   LOGIN HANDLERS (DEMO)
========================= */

function customerLogin() {
  const email = document.getElementById("customerEmail").value.trim();
  alert("Customer Login: " + email);
  return false; // stop refresh
}

function adminLogin() {
  const email = document.getElementById("adminEmail").value.trim();
  alert("Admin Login: " + email);
  return false;
}

function submitForgotUsername() {
  const email = document.getElementById("forgotEmail").value.trim();
  const username = email.split("@")[0]; // demo username

  alert("Recovered Username: " + username);
  closeForgotUsername();
  openLogin();
  return false;
}

function submitRegister() {
  const form = document.getElementById("registerForm");
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return false;
  }
  if (password !== confirm) {
    alert("Passwords do not match!");
    return false;
  }

  fetch("register.php", {
    method: "POST",
    body: new FormData(form)
  })
    .then(function (response) {
      return response.text().then(function (message) {
        if (!response.ok) {
          throw new Error(message || "Registration request failed.");
        }
        return message.trim();
      });
    })
    .then(function (message) {
      if (message === "success") {
        alert("Registration successful!");
        form.reset();
        closeRegister();
        openLogin();
      } else if (message === "email_exists") {
        alert("Email already registered!");
      } else if (message === "password_mismatch") {
        alert("Passwords do not match!");
      } else {
        console.error("Registration failed:", message);
        alert("Registration failed. Please try again.");
      }
    })
    .catch(function (error) {
      console.error("Registration request failed:", error);
      alert("Could not complete registration. Please try again.");
    });

  return false;
}

/* =========================
   CLOSE WHEN CLICK OUTSIDE
========================= */
window.addEventListener("click", function (e) {
  const login = document.getElementById("loginModal");
  const forgot = document.getElementById("forgotUsernameModal");
  const register = document.getElementById("registerModal");

  if (e.target === login) closeLogin();
  if (e.target === forgot) closeForgotUsername();
  if (e.target === register) closeRegister();
});
function openTrackingTab(){
  const tn = document.getElementById("trackingNo").value.trim();

  if(!tn){
    document.getElementById("trackResult").innerText = "Please enter a tracking number.";
    return;
  }

  window.open("Track/track.html?tn=" + encodeURIComponent(tn), "_blank");
}

function toggleMenu() {
  const menu = document.getElementById("navLinks");
  const button = document.querySelector(".menu-toggle");
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  menu.classList.toggle("show", !isExpanded);
  button.setAttribute("aria-expanded", String(!isExpanded));
}

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    const menu = document.getElementById("navLinks");
    const button = document.querySelector(".menu-toggle");
    menu.classList.remove("show");
    button.setAttribute("aria-expanded", "false");
  });
});

const hero = document.querySelector(".hero");
if (hero) {
  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const previousButton = hero.querySelector("#heroPrevious");
  const nextButton = hero.querySelector("#heroNext");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeSlide = 0;

  function showHeroSlide(index) {
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach(function (slide, slideIndex) {
      const isActive = slideIndex === activeSlide;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.inert = !isActive;
    });
  }

  previousButton.addEventListener("click", function () {
    showHeroSlide(activeSlide - 1);
  });
  nextButton.addEventListener("click", function () {
    showHeroSlide(activeSlide + 1);
  });
  if (!reducedMotion && slides.length > 1) {
    window.setInterval(function () {
      if (!document.hidden && !hero.contains(document.activeElement)) {
        showHeroSlide(activeSlide + 1);
      }
    }, 5000);
  }
}

const branchDistrict = document.getElementById("branchDistrict");
const branchLocation = document.getElementById("branchLocation");
const branchSearchForm = document.getElementById("branchSearchForm");
const branchResult = document.getElementById("branchResult");

if (branchDistrict && branchLocation && branchSearchForm && branchResult) {
  const knownBranches = {
    Colombo: [
      {
        name: "SpeedX HQ – Piliyandala",
        address: "SpeedX HQ – Piliyandala, Colombo, Sri Lanka",
        mapQuery: "SpeedX HQ Piliyandala Colombo Sri Lanka"
      }
    ]
  };

  branchDistrict.addEventListener("change", function () {
    branchLocation.replaceChildren(new Option("Choose a branch", ""));
    branchResult.replaceChildren();

    const branches = knownBranches[branchDistrict.value] || [];
    branches.forEach(function (branch, index) {
      branchLocation.add(new Option(branch.name, String(index)));
    });
    branchLocation.disabled = branches.length === 0;

    if (branchDistrict.value && branches.length === 0) {
      branchResult.textContent = "Branch details for this district are not available yet. Please contact SpeedX for assistance.";
    }
  });

  branchSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedBranch = knownBranches[branchDistrict.value]?.[Number(branchLocation.value)];

    if (!selectedBranch) {
      branchResult.textContent = "Please choose a district and an available branch.";
      return;
    }

    const mapLink = document.createElement("a");
    mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(selectedBranch.mapQuery);
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";
    mapLink.textContent = "View on map";

    branchResult.replaceChildren();
    const address = document.createElement("span");
    address.textContent = selectedBranch.address + " · ";
    branchResult.append(address, mapLink);
  });
}
