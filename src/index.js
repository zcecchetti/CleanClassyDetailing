import './stylesheet.css';

// set preference to selected language
function setPreference(langPreference) {
  localStorage.setItem('language', JSON.stringify(langPreference));
}

const englishButton = document.getElementById('english');
const spanishButton = document.getElementById('spanish');

// create functions to change site language
function changeToEnglish() {
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
}

function changeToSpanish() {
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
}

// change language to English
englishButton.addEventListener('click', () => {
  // call changeToEnglish
  changeToEnglish();

  // set user language preference to English
  const langPreference = 'english';
  setPreference(langPreference);
});

// change language to Spanish
spanishButton.addEventListener('click', () => {
  // call changeToSpanish
  changeToSpanish();

  // set user language preference to Spanish
  const langPreference = 'spanish';
  setPreference(langPreference);
});

// create/check language preference for user and store in localstorage
if (localStorage.getItem('language')) {
  const langPreference = JSON.parse(localStorage.getItem('language'));
  if (langPreference === 'spanish') {
    changeToSpanish();
  } else {
    changeToEnglish();
  }
}
