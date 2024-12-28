const home = document.getElementById("home");
const band = document.getElementById("band");
const tour = document.getElementById("tour");
const contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

band.addEventListener("click", (e) => {
  e.preventDefault();
  const contentSection = document.querySelector("#content > .content-band");
  contentSection.scrollIntoView({
    behavior: "smooth",
  });
});

tour.addEventListener("click", (e) => {
  e.preventDefault();
  const tourSection = document.querySelector("#content .content-tour");
  tourSection.scrollIntoView({
    behavior: "smooth",
  });
});

contact.addEventListener("click", (e) => {
  e.preventDefault();
  const contactSection = document.querySelector("#content .contact-section");
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});
