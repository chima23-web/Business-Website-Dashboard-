const menuButton = 
document.getElementById("menu-toggle");
const navMenu = 
document.getElementById("nav-menu");
if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
const exploreOurServicesButton =
document.getElementById("explore-our-services");
if (exploreOurServicesButton) {
 exploreOurServicesButton.addEventListener("click", function(event) {
  window.location.href ="services.html";
});
}
const getStartedButton =
document.getElementById("get-started");
if (getStartedButton) {
    getStartedButton.addEventListener("click", function() {
        window.location.href ="contact.html";
    });
}
const contactForm =
document.getElementById("contact-form")
const formMessage =
document.getElementById("form-message");
if (contactForm && formMessage) {
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.innerHTML = `
  <i class="fa-solid fa-circle-check"></i>
  Message Sent Successfully!
`;
formMessage.style.display = "flex";
    contactForm.reset();
});
}
const viewMoreButton =
document.getElementById("view-more");
if (viewMoreButton) {
    viewMoreButton.addEventListener("click", function() {
        window.location.href ="services.html";
        
    });
}