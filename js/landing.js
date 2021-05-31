const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function() {
    nav.classList.toggle('slide');
});
$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true
    });
});
function togglePopup(){
    document.getElementById("pop-up-1")
    .classList.toggle("active");
}
let forms = document.querySelectorAll('.needs-validation');
Array.prototype.slice.call(forms).forEach((form) => {
  form.addEventListener("send", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  }, false);
});