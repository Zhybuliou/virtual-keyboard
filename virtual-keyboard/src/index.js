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

const KeyDown = [];

document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlLeft' || event.code === 'AltLeft') {
    event.preventDefault();
  }
  const someKeyDown = document.querySelector(`#${event.code}`);
  someKeyDown.classList.add('key-Up');
  if (!KeyDown.includes(event.code)) KeyDown.push(event.code);
  if (event.code === 'Tab') {
    event.preventDefault();
    document.querySelector('#textarea').value += '    ';
  }
});
document.addEventListener('keyup', (event) => {
  const someKeyDown = document.querySelector(`#${event.code}`);
  KeyDown.pop(event.code);
  someKeyDown.classList.remove('key-Up');
  focusTextArea();
});
