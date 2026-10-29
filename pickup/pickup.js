document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".vcard");

  const selectedVehicle = document.getElementById("selectedVehicle");

  // header stats
  const etaText = document.getElementById("etaText");
  const priceText = document.getElementById("priceText");
  const vehicleText = document.getElementById("vehicleText");

  // summary box
  const sumVehicle = document.getElementById("sumVehicle");
  const sumEta = document.getElementById("sumEta");
  const sumPrice = document.getElementById("sumPrice");

  // steps
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");

  function setStep(active) {
    [step1, step2, step3].forEach(s => s.classList.remove("active"));
    if (active === 1) step1.classList.add("active");
    if (active === 2) step2.classList.add("active");
    if (active === 3) step3.classList.add("active");
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      const type = card.dataset.type;
      const price = card.dataset.price;
      const eta = card.dataset.eta;

      selectedVehicle.value = type;

      // header stats update
      etaText.textContent = eta;
      priceText.textContent = "LKR " + price + "+";
      vehicleText.textContent = type;

      // summary update
      sumVehicle.textContent = type;
      sumEta.textContent = eta;
      sumPrice.textContent = "LKR " + price + "+";

      // move steps
      setStep(2);

      // smooth scroll to form
      const formTop = document.querySelector(".two-col").offsetTop - 10;
      window.scrollTo({ top: formTop, behavior: "smooth" });
    });
  });

  // when user starts typing, keep step 2 active
  ["pickupDate","pickupAddress","dropAddress","note"].forEach(id=>{
    const el = document.getElementById(id);
    if(el){
      el.addEventListener("input", ()=> setStep(2));
      el.addEventListener("change", ()=> setStep(2));
    }
  });
});

function confirmPickup(){
  const vehicle = document.getElementById("selectedVehicle").value.trim();
  const date = document.getElementById("pickupDate").value;
  const pickup = document.getElementById("pickupAddress").value.trim();
  const drop = document.getElementById("dropAddress").value.trim();
  const note = document.getElementById("note").value.trim();

  if(!vehicle){
    alert("Please select a vehicle type.");
    return;
  }
  if(!date){
    alert("Please select pickup date.");
    return;
  }
  if(!pickup){
    alert("Please enter pickup address.");
    return;
  }
  if(!drop){
    alert("Please enter drop address.");
    return;
  }

  // Step 3 active (confirm)
  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.remove("active");
  document.getElementById("step3").classList.add("active");

  alert(
    "✅ Pickup Request Created!\n\n" +
    "Vehicle: " + vehicle + "\n" +
    "Date: " + date + "\n" +
    "Pickup: " + pickup + "\n" +
    "Drop: " + drop + (note ? ("\nNote: " + note) : "")
  );

  // Next step example:
  // window.location.href = "payment.html";
}
