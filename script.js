const accordions = document.querySelectorAll(".question");

accordions.forEach(item => {
  item.addEventListener("click", openAccordion);
});

function openAccordion(e) {
  const currentQuestion = e.currentTarget;
  const currentAnswer = currentQuestion.nextElementSibling;

  document.querySelectorAll(".answer").forEach(answer => {
    if (answer !== currentAnswer) {
      answer.classList.add("hidden");
    }
  });

  accordions.forEach(item => {
    item.classList.remove("bold");
  });

  currentAnswer.classList.toggle("hidden");
  currentAnswer.parentNode.classList.toggle("active");

  if (!currentAnswer.classList.contains("hidden")) {
    currentQuestion.classList.add("bold");
  }
}
