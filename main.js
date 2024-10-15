const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let mobile = document.getElementById('mobile').value;
  let message = document.getElementById('message').value;

  // Simple form validation
  if (!firstName || !lastName || !email || !mobile || !message) {
      alert('Please fill in all fields.');
      return;
  }

  // You can perform form submission here, e.g., sending the data to a server
  console.log('Form Submitted:', {
      firstName,
      lastName,
      email,
      mobile,
      message
  });

  // Clear form fields
  document.getElementById('contactForm').reset();

  // Show a success message
  alert('Message sent successfully!');
});