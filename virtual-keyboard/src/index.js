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
import addCapsLock from './utils/addCapsLock';
import textScreen from './utils/textScreen';
import addShift from './utils/addShift';
import theme from './layouts/theme/theme';
import eventKey from './utils/eventKey';
import eventClick from './utils/eventClick';

const BODY = document.getElementsByTagName('body')[0];
const language = localStorage.getItem('language');

HeaderShow(BODY);
textAreaShow(BODY);
keyboardShow(BODY, keysB, language);
footerShow(BODY);

theme();
eventKey(addCapsLock, addDel, addBackspace, addSymbolScreen, textScreen, addShift);
eventClick(
  addSymbolScreen,
  addCapsLock,
  addBackspace,
  addDel,
  clickTextScreen,
  addShift,
);
