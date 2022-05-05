import './styles/main.scss';
import HeaderShow from './layouts/header/header';
import textAreaShow from './layouts/textarea/textarea';
import keysB from './layouts/keys/keys';
import keyboardShow from './layouts/keyboard/keyboard';
import footerShow from './layouts/footer/footer';
import clickTextScreen from './utils/clickTextScreen';
import addSymbolScreen from './utils/addSymbolScreen';
import addBackspace from './utils/addBackspace';
import addDel from './utils/addDel';

const BODY = document.getElementsByTagName('body')[0];
const language = localStorage.getItem('language');

HeaderShow(BODY);
textAreaShow(BODY);
keyboardShow(BODY, keysB, language);
footerShow(BODY);

const toggle = document.querySelector('.toggle-control');
const inputToggle = document.querySelector('#toggle-input');
// animate typing on keyboard //
document.addEventListener('keydown', (event) => {
  const someKeyDown = document.querySelector(`#${event.code}`);
  if (inputToggle.checked) {
    someKeyDown.classList.add('key-Up-dark');
  } else {
    someKeyDown.classList.add('key-Up');
  }
  if (event.code === 'Tab') {
    event.preventDefault();
    document.querySelector('#textarea').value += '    ';
  }
});
document.addEventListener('keyup', (event) => {
  const someKeyDown = document.querySelector(`#${event.code}`);
  if (inputToggle.checked) {
    someKeyDown.classList.remove('key-Up-dark');
  } else {
    someKeyDown.classList.remove('key-Up');
  }
});
// end animate typing on keyboard //
// theme dark and light //
const white = ['.keys-letter',
  '.keys',
  '.keys-backspace',
  '.keys-tab',
  '.keys-del',
  '.keys-100',
  '.keys-86',
  '.keys-40',
  '.keys-space',
  '.keyboard',
  '.key-Up',
];
const dark = ['.keys-letter-dark',
  '.keys-dark',
  '.keys-backspace-dark',
  '.keys-tab-dark',
  '.keys-del-dark',
  '.keys-100-dark',
  '.keys-86-dark',
  '.keys-40-dark',
  '.keys-space-dark',
  '.keyboard-dark',
  '.key-Up-dark'];

toggle.addEventListener('click', () => {
  console.log(inputToggle.checked);
  if (inputToggle.checked) {
    const styleButton = document.querySelectorAll(white);
    styleButton.forEach((el) => {
      const lightClass = el.className;
      el.classList.remove(lightClass);
      el.classList.add(`${lightClass}-dark`);
    });
  } else {
    const styleButton = document.querySelectorAll(dark);
    styleButton.forEach((el) => {
      const lightClass = el.className;
      el.classList.remove(lightClass);
      el.classList.add(lightClass.slice(0, -5));
    });
  }
});
// end dark and light theme //
// switch language on keyboard //
document.addEventListener('keydown', (zEvent) => {
  if (zEvent.ctrlKey && zEvent.altKey) {
    const allKeys = document.querySelectorAll('.keys-letter');
    if (localStorage.getItem('language') === 'en') {
      localStorage.setItem('language', 'ru');
    } else if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
    }
    allKeys.forEach((e) => {
      if (localStorage.getItem('language') === 'en') {
        e.textContent = e.dataset.en;
      } else if (localStorage.getItem('language') === 'ru') {
        e.textContent = e.dataset.ru;
      }
    });
  }
});
// end switch language on keyboard //
// click typing on screen //
const KEYBOARD = document.querySelector('.keyboard');

KEYBOARD.addEventListener('click', (event) => {
  if (event.target.id === 'Space') {
    addSymbolScreen(' ');
  } else if (event.target.id === 'Backspace') {
    addBackspace();
  } else if (event.target.id === 'Delete') {
    addDel();
  } else if (event.target.id === 'Tab') {
    addSymbolScreen('    ');
  } else if (event.target.id !== 'keyboard') {
    clickTextScreen(event);
  }
});
// end click typing on screen //
