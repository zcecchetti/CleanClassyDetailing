import './stylesheet.css';

const englishButton = document.getElementById('english');
const spanishButton = document.getElementById('spanish');

// change language to English
englishButton.addEventListener('click', () => {
  // remove visible class from Spanish translations
  const esMatches = document.querySelectorAll('.spanish');
  esMatches.forEach((match) => {
    match.classList.remove('visible');
  });

  const enMatches = document.querySelectorAll('.english');
  enMatches.forEach((match) => {
    match.classList.add('visible');
  });

  // make spanishButton visible and hide englishButton
  spanishButton.classList.remove('hidden');
  englishButton.classList.add('hidden');
});

// change language to Spanish
spanishButton.addEventListener('click', () => {
  // remove visible class from English translations
  const enMatches = document.querySelectorAll('.english');
  enMatches.forEach((match) => {
    match.classList.remove('visible');
  });
  const esMatches = document.querySelectorAll('.spanish');
  esMatches.forEach((match) => {
    match.classList.add('visible');
  });

  // make englishButton visible and hide spanishButton
  englishButton.classList.remove('hidden');
  spanishButton.classList.add('hidden');
});
