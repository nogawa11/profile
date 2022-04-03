const projectCard = document.querySelector(".projects");
const aboutMeCard = document.querySelector(".about-me");
const socialsCard = document.querySelector(".socials");
const technicalSkillsCard = document.querySelector(".technical-skills");
const cards = [projectCard, aboutMeCard, socialsCard, technicalSkillsCard]

const projectNavBtn = document.querySelector(".nav-projects");
const aboutNavBtn = document.querySelector(".nav-about");
const skillsNavBtn = document.querySelector(".nav-skills");
const socialsNavBtn = document.querySelector(".nav-socials");
const navBtns = [projectNavBtn, aboutNavBtn, skillsNavBtn, socialsNavBtn]


projectNavBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
  cards.forEach((btn) => {
    btn.classList.add("hide");
  });
  projectCard.classList.remove("hide");
});

aboutNavBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
  cards.forEach((btn) => {
    btn.classList.add("hide");
  });
  aboutMeCard.classList.remove("hide");
});

skillsNavBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
  cards.forEach((btn) => {
    btn.classList.add("hide");
  });
  technicalSkillsCard.classList.remove("hide");
});

socialsNavBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
  cards.forEach((btn) => {
    btn.classList.add("hide");
  });
  socialsCard.classList.remove("hide");
});
