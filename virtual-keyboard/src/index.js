import './styles/main.scss';
import focusTextArea from './utils/focusTextArea';
import HeaderShow from './layouts/header/header';
import textAreaShow from './layouts/textarea/textarea';
import keysB from './layouts/keys/keys';
import keyboardShow from './layouts/keyboard/keyboard';
import footerShow from './layouts/footer/footer';

const BODY = document.getElementsByTagName('body')[0];
const language = 'en';
HeaderShow(BODY);
textAreaShow(BODY);
keyboardShow(BODY, keysB, language);
footerShow(BODY);

focusTextArea();

document.addEventListener('keydown', (event) => {
  const someKeyDown = document.querySelector(`#${event.code}`);
  someKeyDown.classList.add('key-Up');
  if (event.code === 'Tab') {
    event.preventDefault();
    document.querySelector('#textarea').value += '    ';
  }
});
document.addEventListener('keyup', (event) => {
  const someKeyDown = document.querySelector(`#${event.code}`);
  someKeyDown.classList.remove('key-Up');
  focusTextArea();
});
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
];
const dark = ['.keys-letter-dark',
  '.keys-dark',
  '.keys-backspace-dark',
  '.keys-tab-dark',
  '.keys-del-dark',
  '.keys-100-dark',
  '.keys-86-dark',
  '.keys-40-dark',
  '.keys-space-dark', '.keyboard-dark'];
const toggle = document.querySelector('.toggle-control');
const inputToggle = document.querySelector('#toggle-input');
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
