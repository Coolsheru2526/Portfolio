const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.getElementById("submit-btn");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.querySelector("#name").value;
      const email = form.querySelector("#email").value;
      const message = form.querySelector("#message").value;
  
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        showAlert("Please fill in all fields.", "error");
      } else {
        showAlert("Message sent successfully!", "success");
      }
    });
  
    function showAlert(message, type) {
      const alertDiv = document.createElement("div");
      alertDiv.className = `alert ${type}`;
      alertDiv.textContent = message;
  
      form.insertBefore(alertDiv, submitButton);
  
      setTimeout(function () {
        alertDiv.remove();
      }, 3000);
    }
  });
  