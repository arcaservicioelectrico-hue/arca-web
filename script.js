function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// ANIMACIÓN SCROLL
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));

// WHATSAPP
function openWhatsApp() {
  window.open("https://wa.me/5212211283732", "_blank");
}
  /*
document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let message = document.getElementById("message").value;

  let text = `Hola, quiero una cotización:%0A
  Nombre: ${name}%0A
  Teléfono: ${phone}%0A
  Servicio: ${service}%0A
  Detalles: ${message}`;

  let url = `https://wa.me/522211314851?text=${text}`;

  window.open(url, "_blank");
}); */


document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();
// anti-espam
let bot = document.getElementById("website").value;

if(bot !== ""){
  return; // 🚫 Es un bot, no hace nada
}

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let message = document.getElementById("message").value;

  // 📧 EMAIL
  emailjs.send("service_arca", "template_yd3b4s8", {
    name: name,
  phone: phone,
  service: service,
  message: message
})
.then(function(response) {
  alert("Cotización enviada correctamente ✅");
  
  document.getElementById("quoteForm").reset(); // 🔥 limpia formulario

}, function(error) {
  alert("Error al enviar ❌");
});
  

  // 💬 WHATSAPP
  let text = `Hola, quiero una cotización:%0A
  Nombre: ${name}%0A
  Teléfono: ${phone}%0A
  Servicio: ${service}%0A
  Detalles: ${message}`;

  window.open(`https://wa.me/5212211283732?text=${text}`, "_blank");

});

/* enviando */
let btn = document.querySelector("#quoteForm button");

btn.innerText = "Enviando...";
btn.disabled = true;
/* despues del envio*/
btn.innerText = "Solicitar cotización";
btn.disabled = false;
/* fin de boton de carga*/

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".gallery-item").forEach(img => {
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

document.querySelector(".close").onclick = function() {
  modal.style.display = "none";
}