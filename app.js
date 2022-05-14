const projectCard = document.querySelector(".projects");
const aboutMeCard = document.querySelector(".about-me");
const socialsCard = document.querySelector(".socials");
const technicalSkillsCard = document.querySelector(".technical-skills");
const cards = [projectCard, aboutMeCard, socialsCard, technicalSkillsCard]

const neighborhud = document.querySelector(".neighborhud");
const uchuu = document.querySelector(".uchuu");
const watchlist = document.querySelector(".watchlist");
const todoList = document.querySelector(".todo-list");
const countdown = document.querySelector(".countdown");
const ipTracker = document.querySelector(".ip-tracker");
const jobListingsFilter = document.querySelector(".job-listings-filter");
const tipCalculator = document.querySelector(".tip-calculator");
const interactiveRating = document.querySelector(".interactive-rating");
const simpleAirbnbCopy = document.querySelector(".simple-airbnb-copy");
const simpleLandingPage = document.querySelector(".simple-landing-page");
const simpleWikinimousCopy = document.querySelector(".simple-wikinimous-copy");
const mediumArticleCopy = document.querySelector(".medium-article-copy");
const longestWordGame = document.querySelector(".longest-word-game");
const simpleYelpCopy = document.querySelector(".simple-yelp-copy");
const rockPaperScissors = document.querySelector(".rock-paper-scissors");
const calculator = document.querySelector(".calculator");
const pixelart = document.querySelector(".pixelart");
const tenzies = document.querySelector(".tenzies");
const memeGenerator = document.querySelector(".meme-generator");
const trivia = document.querySelector(".trivia");
const countries = document.querySelector(".countries");
const weather = document.querySelector(".weather");

const neighborhudCard = document.querySelector(".card-neighborhud");
const uchuuCard = document.querySelector(".card-uchuu");
const watchlistCard = document.querySelector(".card-watchlist");
const todoListCard = document.querySelector(".card-todo-list");
const countdownCard = document.querySelector(".card-countdown");
const ipTrackerCard = document.querySelector(".card-ip-tracker");
const jobListingsFilterCard = document.querySelector(".card-job-listings-filter");
const tipCalculatorCard = document.querySelector(".card-tip-calculator");
const interactiveRatingCard = document.querySelector(".card-interactive-rating");
const simpleAirbnbCopyCard = document.querySelector(".card-simple-airbnb-copy");
const simpleLandingPageCard = document.querySelector(".card-simple-landing-page");
const simpleWikinimousCopyCard = document.querySelector(".card-simple-wikinimous-copy");
const mediumArticleCopyCard = document.querySelector(".card-medium-article-copy");
const longestWordGameCard = document.querySelector(".card-longest-word-game");
const simpleYelpCopyCard = document.querySelector(".card-simple-yelp-copy");
const rockPaperScissorsCard = document.querySelector(".card-rock-paper-scissors");
const calculatorCard = document.querySelector(".card-calculator");
const pixelartCard = document.querySelector(".card-pixelart");
const memeGeneratorCard = document.querySelector(".card-meme-generator");
const tenziesCard = document.querySelector(".card-tenzies");
const triviaCard = document.querySelector(".card-trivia");
const countriesCard = document.querySelector(".card-countries");
const weatherCard = document.querySelector(".card-weather");

const detailCards = document.querySelectorAll(".card-info-details");

const projectNavBtn = document.querySelector(".nav-projects");
const aboutNavBtn = document.querySelector(".nav-about");
const skillsNavBtn = document.querySelector(".nav-skills");
const socialsNavBtn = document.querySelector(".nav-socials");
const navBtns = [projectNavBtn, aboutNavBtn, skillsNavBtn, socialsNavBtn]

const backBtns = document.querySelectorAll(".btn-card-detail-back");

const slideOneRightBtn = document.querySelector(".btn-slide-1-right");
const slideOneLeftBtn = document.querySelector(".btn-slide-1-left");
const slideTwoRightBtn = document.querySelector(".btn-slide-2-right");
const slideTwoLeftBtn = document.querySelector(".btn-slide-2-left");
const slideThreeRightBtn = document.querySelector(".btn-slide-3-right");
const slideThreeLeftBtn = document.querySelector(".btn-slide-3-left");

const slideOne = document.querySelector(".slide-1")
const slideTwo = document.querySelector(".slide-2")
const slideThree = document.querySelector(".slide-3")

const slides = [slideOne, slideTwo, slideThree]

projectNavBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
  cards.forEach((btn) => {
    btn.classList.add("hide");
  });
  detailCards.forEach((btn) => {
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
  detailCards.forEach((btn) => {
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
  detailCards.forEach((btn) => {
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
  detailCards.forEach((btn) => {
    btn.classList.add("hide");
  });
  socialsCard.classList.remove("hide");
});

neighborhud.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  neighborhudCard.classList.remove("hide");
});

uchuu.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  uchuuCard.classList.remove("hide");
});

watchlist.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  watchlistCard.classList.remove("hide");
});

todoList.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  todoListCard.classList.remove("hide");
});

countdown.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  countdownCard.classList.remove("hide");
});

ipTracker.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  ipTrackerCard.classList.remove("hide");
});

jobListingsFilter.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  jobListingsFilterCard.classList.remove("hide");
});

tipCalculator.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  tipCalculatorCard.classList.remove("hide");
});

rockPaperScissors.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  rockPaperScissorsCard.classList.remove("hide");
});

calculator.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  calculatorCard.classList.remove("hide");
});

interactiveRating.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  interactiveRatingCard.classList.remove("hide");
});

simpleAirbnbCopy.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  simpleAirbnbCopyCard.classList.remove("hide");
});

simpleLandingPage.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  simpleLandingPageCard.classList.remove("hide");
});

simpleWikinimousCopy.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  simpleWikinimousCopyCard.classList.remove("hide");
});

mediumArticleCopy.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  mediumArticleCopyCard.classList.remove("hide");
});

longestWordGame.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  longestWordGameCard.classList.remove("hide");
});

simpleYelpCopy.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  simpleYelpCopyCard.classList.remove("hide");
});

pixelart.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  pixelartCard.classList.remove("hide");
});

tenzies.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  tenziesCard.classList.remove("hide");
});

trivia.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  triviaCard.classList.remove("hide");
});

countries.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  countriesCard.classList.remove("hide");
});

weather.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  weatherCard.classList.remove("hide");
});

memeGenerator.addEventListener("click", (event) => {
  event.preventDefault();
  cards.forEach((card) => {
    card.classList.add("hide");
  });
  memeGeneratorCard.classList.remove("hide");
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    cards.forEach((card) => {
      card.classList.add("hide");
    });
    detailCards.forEach((card) => {
      card.classList.add("hide");
    });
    projectCard.classList.remove("hide");
  });
});

slideOneRightBtn.addEventListener("click", (event) => {
  event.preventDefault();
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slideTwo.classList.remove("hide");
})

slideOneLeftBtn.addEventListener("click", (event) => {
  event.preventDefault();
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slideThree.classList.remove("hide");
})

slideTwoRightBtn.addEventListener("click", (event) => {
  event.preventDefault();
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slideThree.classList.remove("hide");
})

slideTwoLeftBtn.addEventListener("click", (event) => {
  event.preventDefault();
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slideOne.classList.remove("hide");
})

slideThreeRightBtn.addEventListener("click", (event) => {
  event.preventDefault();
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slideOne.classList.remove("hide");
})

slideThreeLeftBtn.addEventListener("click", (event) => {
  event.preventDefault();
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slideTwo.classList.remove("hide");
})
