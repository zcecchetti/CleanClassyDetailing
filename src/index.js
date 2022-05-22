import './stylesheet.css';

// change language to English
const englishButton = document.getElementById('english');

englishButton.addEventListener('click', () => {
  const esMatches = document.querySelectorAll('.spanish');
  esMatches.forEach((match) => {
    match.classList.remove('visible');
  });
  const enMatches = document.querySelectorAll('.english');
  enMatches.forEach((match) => {
    match.classList.add('visible');
  });
});

// change language to Spanish
const spanishButton = document.getElementById('spanish');

spanishButton.addEventListener('click', () => {
  const enMatches = document.querySelectorAll('.english');
  enMatches.forEach((match) => {
    match.classList.remove('visible');
  });
  const esMatches = document.querySelectorAll('.spanish');
  esMatches.forEach((match) => {
    match.classList.add('visible');
  });
});
