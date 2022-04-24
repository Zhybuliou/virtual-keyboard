import './styles/main.scss';
import focusTextArea from './utils/focusTextArea';
import HeaderShow from './layouts/header/header';
import textAreaShow from './layouts/textarea/textarea';
import keysB from './layouts/keys/keys';
import keyboardShow from './layouts/keyboard/keyboard';
import footerShow from './layouts/footer/footer';

const BODY = document.getElementsByTagName('body')[0];

HeaderShow(BODY);
textAreaShow(BODY);
keyboardShow(BODY, keysB);
footerShow(BODY);

focusTextArea();
