/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/layouts/footer/footer.js":
/*!**************************************!*\
  !*** ./src/layouts/footer/footer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var footerShow = function footerShow(body) {
  var FOOTER = document.createElement('div');
  FOOTER.classList = 'footer';
  FOOTER.innerHTML = '<p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe ctrl + alt</p>';
  body.append(FOOTER);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerShow);

/***/ }),

/***/ "./src/layouts/header/header.js":
/*!**************************************!*\
  !*** ./src/layouts/header/header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HeaderShow = function HeaderShow(body) {
  var Header = document.createElement('div');
  Header.classList.add('header');
  Header.innerHTML = "\n  <div class=\"header-content\">\n       <p class=\"title\">RSS Virtual keyboard</p>\n       <div class=\"toggle\">\n           <p class=\"toggle-text\">light</p>\n           <label class=\"toggle-control\">\n               <input type=\"checkbox\" id=\"toggle-input\" >\n               <span class=\"control\"></span>\n           </label>\n           <p class=\"toggle-text\">dark</p>\n       </div>\n   </div>";
  body.append(Header);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderShow);

/***/ }),

/***/ "./src/layouts/keyboard/keyboard.js":
/*!******************************************!*\
  !*** ./src/layouts/keyboard/keyboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keyboardShow = function keyboardShow(body, keys, lang) {
  var KEYBOARD = document.createElement('div');
  var arrayKey = ['Ctrl', 'Win', 'Alt', '▲', '◄', '▼', '►'];
  KEYBOARD.classList = 'keyboard';
  KEYBOARD.id = 'keyboard'; //   64 keys //

  keys.forEach(function (el) {
    var key = document.createElement('div');

    if (el.en === 'Backspace') {
      key.classList = 'keys-backspace';
      key.id = el.code;
      key.innerText = el.en;
    } else if (el.en === 'Tab') {
      key.classList = 'keys-tab';
      key.id = el.code;
      key.innerText = el.en;
    } else if (el.en === 'Enter' || el.en === 'Shift' && el.small === 'Shift') {
      key.classList = 'keys-86';
      key.id = el.code;
      key.innerText = el.en;
    } else if (el.en === 'CapsLock' || el.en === 'Shift') {
      key.classList = 'keys-100';
      key.id = el.code;
      key.innerText = el.en;
    } else if (arrayKey.includes(el.en)) {
      key.classList = 'keys-40';
      key.id = el.code;
      key.innerText = el.en;
    } else if (el.en === 'Space') {
      key.classList = 'keys-space';
      key.id = el.code;
      key.innerText = el.en;
    } else if (el.en === 'Del') {
      key.classList = 'keys-del';
      key.id = el.code;
      key.innerText = el.en;
    } else {
      key.classList = 'keys-letter';
      key.id = el.code;
      key.dataset.ru = el.ru;
      key.dataset.ruUp = el.ruUp;
      key.dataset.en = el.en;
      key.dataset.enUp = el.enUp;

      if (lang === 'ru') {
        key.innerText = el.ru;
      } else if (lang === 'enUp') {
        key.innerText = el.enUp;
      } else if (lang === 'ruUp') {
        key.innerText = el.ruUp;
      } else {
        key.innerText = el.en;
        localStorage.setItem('language', 'en');
      }
    }

    KEYBOARD.appendChild(key);
  });
  return body.appendChild(KEYBOARD);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardShow);

/***/ }),

/***/ "./src/layouts/keys/keys.js":
/*!**********************************!*\
  !*** ./src/layouts/keys/keys.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keysB = [{
  en: '`',
  enUp: '~',
  ru: 'ё',
  ruUp: 'Ё',
  code: 'Backquote'
}, {
  en: '1',
  enUp: '!',
  ru: '1',
  ruUp: '!',
  code: 'Digit1'
}, {
  en: '2',
  enUp: '@',
  ru: '2',
  ruUp: '"',
  code: 'Digit2'
}, {
  en: '3',
  enUp: '#',
  ru: '3',
  ruUp: '№',
  code: 'Digit3'
}, {
  en: '4',
  enUp: '$',
  ru: '4',
  ruUp: ';',
  code: 'Digit4'
}, {
  en: '5',
  enUp: '%',
  ru: '5',
  ruUp: '%',
  code: 'Digit5'
}, {
  en: '6',
  enUp: '^',
  ru: '6',
  ruUp: ':',
  code: 'Digit6'
}, {
  en: '7',
  enUp: '&',
  ru: '7',
  ruUp: '?',
  code: 'Digit7'
}, {
  en: '8',
  enUp: '*',
  ru: '8',
  ruUp: '*',
  code: 'Digit8'
}, {
  en: '9',
  enUp: '(',
  ru: '9',
  ruUp: '(',
  code: 'Digit9'
}, {
  en: '0',
  enUp: ')',
  ru: '0',
  ruUp: ')',
  code: 'Digit0'
}, {
  en: '-',
  enUp: '_',
  ru: '-',
  ruUp: '_',
  code: 'Minus'
}, {
  en: '=',
  enUp: '+',
  ru: '=',
  ruUp: '+',
  code: 'Equal'
}, {
  en: 'Backspace',
  enUp: 'Backspace',
  ru: 'Backspace',
  ruUp: 'Backspace',
  code: 'Backspace'
}, //   2 row   //
{
  en: 'Tab',
  enUp: 'Tab',
  ru: 'Tab',
  ruUp: 'Tab',
  code: 'Tab'
}, {
  en: 'q',
  enUp: 'Q',
  ru: 'й',
  ruUp: 'Й',
  code: 'KeyQ'
}, {
  en: 'w',
  enUp: 'W',
  ru: 'ц',
  ruUp: 'Ц',
  code: 'KeyW'
}, {
  en: 'e',
  enUp: 'E',
  ru: 'у',
  ruUp: 'У',
  code: 'KeyE'
}, {
  en: 'r',
  enUp: 'R',
  ru: 'к',
  ruUp: 'К',
  code: 'KeyR'
}, {
  en: 't',
  enUp: 'T',
  ru: 'е',
  ruUp: 'Е',
  code: 'KeyT'
}, {
  en: 'y',
  enUp: 'Y',
  ru: 'н',
  ruUp: 'Н',
  code: 'KeyY'
}, {
  en: 'u',
  enUp: 'U',
  ru: 'г',
  ruUp: 'Г',
  code: 'KeyU'
}, {
  en: 'i',
  enUp: 'I',
  ru: 'ш',
  ruUp: 'Ш',
  code: 'KeyI'
}, {
  en: 'o',
  enUp: 'O',
  ru: 'щ',
  ruUp: 'Щ',
  code: 'KeyO'
}, {
  en: 'p',
  enUp: 'P',
  ru: 'з',
  ruUp: 'З',
  code: 'KeyP'
}, {
  en: '[',
  enUp: '{',
  ru: 'х',
  ruUp: 'Х',
  code: 'BracketLeft'
}, {
  en: ']',
  enUp: '}',
  ru: 'ъ',
  ruUp: 'Ъ',
  code: 'BracketRight'
}, {
  en: '\\',
  enUp: '|',
  ru: '\\',
  ruUp: '/',
  code: 'Backslash'
}, {
  en: 'Del',
  enUp: 'Del',
  ru: 'Del',
  ruUp: 'Del',
  code: 'Delete'
}, //    3 row    //
{
  en: 'CapsLock',
  enUp: 'CapsLock',
  ru: 'CapsLock',
  ruUp: 'CapsLock',
  code: 'CapsLock'
}, {
  en: 'a',
  enUp: 'A',
  ru: 'ф',
  ruUp: 'Ф',
  code: 'KeyA'
}, {
  en: 's',
  enUp: 'S',
  ru: 'ы',
  ruUp: 'Ы',
  code: 'KeyS'
}, {
  en: 'd',
  enUp: 'D',
  ru: 'в',
  ruUp: 'В',
  code: 'KeyD'
}, {
  en: 'f',
  enUp: 'F',
  ru: 'a',
  ruUp: 'A',
  code: 'KeyF'
}, {
  en: 'g',
  enUp: 'G',
  ru: 'п',
  ruUp: 'П',
  code: 'KeyG'
}, {
  en: 'h',
  enUp: 'H',
  ru: 'р',
  ruUp: 'Р',
  code: 'KeyH'
}, {
  en: 'j',
  enUp: 'J',
  ru: 'о',
  ruUp: 'О',
  code: 'KeyJ'
}, {
  en: 'k',
  enUp: 'K',
  ru: 'л',
  ruUp: 'Л',
  code: 'KeyK'
}, {
  en: 'l',
  enUp: 'L',
  ru: 'д',
  ruUp: 'Д',
  code: 'KeyL'
}, {
  en: ';',
  enUp: ':',
  ru: 'ж',
  ruUp: 'Ж',
  code: 'Semicolon'
}, {
  en: '\'',
  enUp: '"',
  ru: 'э',
  ruUp: 'Э',
  code: 'Quote'
}, {
  en: 'Enter',
  enUp: 'Enter',
  ru: 'Enter',
  ruUp: 'Enter',
  code: 'Enter'
}, //   row 4  //
{
  en: 'Shift',
  enUp: 'Shift',
  ru: 'Shift',
  ruUp: 'Shift',
  code: 'ShiftLeft'
}, {
  en: 'z',
  enUp: 'Z',
  ru: 'я',
  ruUp: 'Я',
  code: 'KeyZ'
}, {
  en: 'x',
  enUp: 'X',
  ru: 'ч',
  ruUp: 'Ч',
  code: 'KeyX'
}, {
  en: 'c',
  enUp: 'C',
  ru: 'с',
  ruUp: 'С',
  code: 'KeyC'
}, {
  en: 'v',
  enUp: 'V',
  ru: 'м',
  ruUp: 'М',
  code: 'KeyV'
}, {
  en: 'b',
  enUp: 'B',
  ru: 'и',
  ruUp: 'И',
  code: 'KeyB'
}, {
  en: 'n',
  enUp: 'N',
  ru: 'т',
  ruUp: 'Т',
  code: 'KeyN'
}, {
  en: 'm',
  enUp: 'M',
  ru: 'ь',
  ruUp: 'Ь',
  code: 'KeyM'
}, {
  en: ',',
  enUp: '<',
  ru: 'б',
  ruUp: 'Б',
  code: 'Comma'
}, {
  en: '.',
  enUp: '>',
  ru: 'ю',
  ruUp: 'Ю',
  code: 'Period'
}, {
  en: '/',
  enUp: '?',
  ru: '.',
  ruUp: ',',
  code: 'Slash'
}, {
  en: '▲',
  enUp: '▲',
  ru: '▲',
  ruUp: '▲',
  code: 'ArrowUp'
}, {
  en: 'Shift',
  enUp: 'Shift',
  ru: 'Shift',
  ruUp: 'Shift',
  small: 'Shift',
  code: 'ShiftRight'
}, //   row 5  //
{
  en: 'Ctrl',
  enUp: 'Ctrl',
  ru: 'Ctrl',
  ruUp: 'Ctrl',
  code: 'ControlLeft'
}, {
  en: 'Win',
  enUp: 'Win',
  ru: 'Win',
  ruUp: 'Win',
  code: 'MetaLeft'
}, {
  en: 'Alt',
  enUp: 'Alt',
  ru: 'Alt',
  ruUp: 'Alt',
  code: 'AltLeft'
}, {
  en: 'Space',
  enUp: 'Space',
  ru: 'Space',
  ruUp: 'Space',
  code: 'Space'
}, {
  en: 'Alt',
  enUp: 'Alt',
  ru: 'Alt',
  ruUp: 'Alt',
  code: 'AltRight'
}, {
  en: '◄',
  enUp: '◄',
  ru: '◄',
  ruUp: '◄',
  code: 'ArrowLeft'
}, {
  en: '▼',
  enUp: '▼',
  ru: '▼',
  ruUp: '▼',
  code: 'ArrowDown'
}, {
  en: '►',
  enUp: '►',
  ru: '►',
  ruUp: '►',
  code: 'ArrowRight'
}, {
  en: 'Ctrl',
  enUp: 'Ctrl',
  ru: 'Ctrl',
  ruUp: 'Ctrl',
  code: 'ControlRight'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysB);

/***/ }),

/***/ "./src/layouts/textarea/textarea.js":
/*!******************************************!*\
  !*** ./src/layouts/textarea/textarea.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var textAreaShow = function textAreaShow(body) {
  var TEXTAREA = document.createElement('textarea');
  TEXTAREA.className = 'body--textarea textarea';
  TEXTAREA.id = 'textarea';
  TEXTAREA.setAttribute('rows', '5');
  TEXTAREA.setAttribute('cols', '50');
  body.append(TEXTAREA);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textAreaShow);

/***/ }),

/***/ "./src/layouts/theme/theme.js":
/*!************************************!*\
  !*** ./src/layouts/theme/theme.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var theme = function theme() {
  var toggle = document.querySelector('.toggle-control');
  var inputToggle = document.querySelector('#toggle-input');
  var white = ['.keys-letter', '.keys', '.keys-backspace', '.keys-tab', '.keys-del', '.keys-100', '.keys-86', '.keys-40', '.keys-space', '.keyboard', '.key-Up'];
  var dark = ['.keys-letter-dark', '.keys-dark', '.keys-backspace-dark', '.keys-tab-dark', '.keys-del-dark', '.keys-100-dark', '.keys-86-dark', '.keys-40-dark', '.keys-space-dark', '.keyboard-dark', '.key-Up-dark'];
  toggle.addEventListener('click', function () {
    if (inputToggle.checked) {
      var styleButton = document.querySelectorAll(white);
      styleButton.forEach(function (el) {
        var lightClass = el.className.split(' ')[0];
        el.classList.remove(lightClass);
        el.classList.add("".concat(lightClass, "-dark"));
      });
    } else {
      var _styleButton = document.querySelectorAll(dark);

      _styleButton.forEach(function (el) {
        var lightClass = el.className.split(' ')[0];
        el.classList.remove(lightClass);
        el.classList.add(lightClass.slice(0, -5));
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/utils/addBackspace.js":
/*!***********************************!*\
  !*** ./src/utils/addBackspace.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addBackspace = function addBackspace() {
  var SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  var start = SCREEN.selectionStart;
  var end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end - 1) + SCREEN.value.slice(end, SCREEN.value.length);
  SCREEN.setSelectionRange(start - 1, start - 1);
  SCREEN.focus();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addBackspace);

/***/ }),

/***/ "./src/utils/addCapsLock.js":
/*!**********************************!*\
  !*** ./src/utils/addCapsLock.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addCapsLock = function addCapsLock() {
  var allKeys = document.querySelectorAll('.keys-letter');

  if (!allKeys.length) {
    allKeys = document.querySelectorAll('.keys-letter-dark');
  }

  if (['ф', 'a'].includes(document.querySelector('#KeyA').textContent)) {
    allKeys.forEach(function (e) {
      e.textContent = e.textContent.toUpperCase();
    });
  } else {
    allKeys.forEach(function (e) {
      e.textContent = e.textContent.toLowerCase();
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCapsLock);

/***/ }),

/***/ "./src/utils/addDel.js":
/*!*****************************!*\
  !*** ./src/utils/addDel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addDel = function addDel() {
  var SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  var start = SCREEN.selectionStart;
  var end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end) + SCREEN.value.slice(end + 1, SCREEN.value.length);
  SCREEN.setSelectionRange(start, start);
  SCREEN.focus();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDel);

/***/ }),

/***/ "./src/utils/addShift.js":
/*!*******************************!*\
  !*** ./src/utils/addShift.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addShift = function addShift() {
  var allKeys = document.querySelectorAll('.keys-letter');

  if (!allKeys.length) {
    allKeys = document.querySelectorAll('.keys-letter-dark');
  }

  if (localStorage.getItem('language') === 'en') {
    localStorage.setItem('language', 'enUp');
  } else if (localStorage.getItem('language') === 'enUp') {
    localStorage.setItem('language', 'en');
  } else if (localStorage.getItem('language') === 'ru') {
    localStorage.setItem('language', 'ruUp');
  } else if (localStorage.getItem('language') === 'ruUp') {
    localStorage.setItem('language', 'ru');
  }

  allKeys.forEach(function (e) {
    if (localStorage.getItem('language') === 'enUp') {
      e.textContent = e.dataset.enUp;
    } else if (localStorage.getItem('language') === 'en') {
      e.textContent = e.dataset.en;
    } else if (localStorage.getItem('language') === 'ruUp') {
      e.textContent = e.dataset.ruUp;
    } else if (localStorage.getItem('language') === 'ru') {
      e.textContent = e.dataset.ru;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addShift);

/***/ }),

/***/ "./src/utils/addSymbolScreen.js":
/*!**************************************!*\
  !*** ./src/utils/addSymbolScreen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addSymbolScreen = function addSymbolScreen(text) {
  var SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  var start = SCREEN.selectionStart;
  var end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end) + text + SCREEN.value.slice(end, SCREEN.value.length);
  SCREEN.setSelectionRange(start + text.length, start + text.length);
  SCREEN.focus();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addSymbolScreen);

/***/ }),

/***/ "./src/utils/clickTextScreen.js":
/*!**************************************!*\
  !*** ./src/utils/clickTextScreen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clickTextScreen = function clickTextScreen(event) {
  var SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  var start = SCREEN.selectionStart;
  var end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end) + event.target.textContent + SCREEN.value.slice(end, SCREEN.value.length);
  SCREEN.setSelectionRange(start + event.target.textContent.length, start + event.target.textContent.length);
  SCREEN.focus();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickTextScreen);

/***/ }),

/***/ "./src/utils/eventClick.js":
/*!*********************************!*\
  !*** ./src/utils/eventClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var eventClick = function eventClick(addSymbolScreen, addCapsLock, addBackspace, addDel, clickTextScreen, addShift) {
  var KEYBOARD = document.querySelector('.keyboard');
  KEYBOARD.addEventListener('click', function (event) {
    if (event.target.id === 'Space') {
      addSymbolScreen(' ');
    } else if (event.target.id === 'Backspace') {
      addBackspace();
    } else if (event.target.id === 'CapsLock') {
      if (!document.querySelector('#CapsLock').hasAttribute('style')) {
        addCapsLock();
        document.querySelector('#CapsLock').style.backgroundColor = '#0F77F0';
        document.querySelector('#CapsLock').style.color = '#FFF';
      } else {
        addCapsLock();
        document.querySelector('#CapsLock').removeAttribute('style');
      }
    } else if (event.target.id === 'Delete') {
      addDel();
    } else if (event.target.id === 'Enter') {
      addSymbolScreen('\n');
    } else if (event.target.id === 'Tab') {
      addSymbolScreen('    ');
    } else if (['ControlLeft', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlRight', 'MetaLeft'].includes(event.target.id)) {
      event.preventDefault();
    } else if (event.target.id !== 'keyboard') {
      clickTextScreen(event);
    }
  }, false);
  KEYBOARD.addEventListener('mousedown', function (event) {
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      addShift();

      if (document.querySelector('#CapsLock').hasAttribute('style')) {
        addCapsLock();
      }
    }
  }, false);
  KEYBOARD.addEventListener('mouseup', function (event) {
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      addShift();

      if (document.querySelector('#CapsLock').hasAttribute('style')) {
        addCapsLock();
      }
    }
  }, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventClick);

/***/ }),

/***/ "./src/utils/eventKey.js":
/*!*******************************!*\
  !*** ./src/utils/eventKey.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var eventKey = function eventKey(addCapsLock, addDel, addBackspace, addSymbolScreen, textScreen, addShift) {
  var inputToggle = document.querySelector('#toggle-input');
  document.addEventListener('keydown', function (event) {
    event.preventDefault();
    var someKeyDown = document.querySelector("#".concat(event.code));

    if (someKeyDown !== null) {
      if (event.code === 'Tab') {
        document.querySelector('#textarea').value += '    ';
      } else if (event.code === 'Delete') {
        addDel();
      } else if (event.code === 'Backspace') {
        addBackspace();
      } else if (event.code === 'Enter') {
        addSymbolScreen('\n');
      } else if (event.code === 'Space') {
        addSymbolScreen(' ');
      } else if (['ControlLeft', 'CapsLock', 'AltLeft', 'ShiftRight', 'ShiftLeft', 'AltRight', 'ControlRight', 'MetaLeft'].includes(event.code)) {
        event.preventDefault();
      } else if (someKeyDown.textContent) {
        textScreen(someKeyDown.textContent);
      }

      if (inputToggle.checked) {
        someKeyDown.classList.add('key-Up-dark');
      } else {
        someKeyDown.classList.add('key-Up');
      }
    }
  }, false);
  document.addEventListener('keyup', function (event) {
    var someKeyDown = document.querySelector("#".concat(event.code));

    if (someKeyDown !== null) {
      if (inputToggle.checked) {
        someKeyDown.classList.remove('key-Up-dark');
      } else {
        someKeyDown.classList.remove('key-Up');
      }
    }
  }, false);
  document.addEventListener('keydown', function (zEvent) {
    if (zEvent.ctrlKey && zEvent.altKey) {
      var allKeys = document.querySelectorAll('.keys-letter');

      if (!allKeys.length) {
        allKeys = document.querySelectorAll('.keys-letter-dark');
      }

      if (localStorage.getItem('language') === 'en') {
        localStorage.setItem('language', 'ru');
      } else if (localStorage.getItem('language') === 'ru') {
        localStorage.setItem('language', 'en');
      } else if (localStorage.getItem('language') === 'ruUp') {
        localStorage.setItem('language', 'enUp');
      } else if (localStorage.getItem('language') === 'enUp') {
        localStorage.setItem('language', 'ruUp');
      }

      allKeys.forEach(function (e) {
        if (localStorage.getItem('language') === 'en') {
          e.textContent = e.dataset.en;
        } else if (localStorage.getItem('language') === 'ru') {
          e.textContent = e.dataset.ru;
        } else if (localStorage.getItem('language') === 'ruUp') {
          e.textContent = e.dataset.ruUp;
        } else if (localStorage.getItem('language') === 'enUp') {
          e.textContent = e.dataset.enUp;
        }
      });
    }
  }, false);
  var down = false;
  document.addEventListener('keydown', function (event) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (down) {
        return;
      }

      down = true;
      addShift();

      if (document.querySelector('#CapsLock').hasAttribute('style')) {
        addCapsLock();
      }
    }
  }, false);
  document.addEventListener('keyup', function (event) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      down = false;
      addShift();

      if (document.querySelector('#CapsLock').hasAttribute('style')) {
        addCapsLock();
      }
    }
  }, false);
  var capsCount = false;
  document.addEventListener('keydown', function (event) {
    if (event.code === 'CapsLock') {
      if (capsCount) {
        return;
      }

      capsCount = true;

      if (['ф', 'a'].includes(document.querySelector('#KeyA').textContent)) {
        document.querySelector('#CapsLock').style.backgroundColor = '#0F77F0';
        document.querySelector('#CapsLock').style.color = '#FFF';
        addCapsLock();
      } else {
        document.querySelector('#CapsLock').removeAttribute('style');
        addCapsLock();
      }
    }
  }, false);
  document.addEventListener('keyup', function (event) {
    if (event.code === 'CapsLock') {
      capsCount = false;
    }
  }, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventKey);

/***/ }),

/***/ "./src/utils/textScreen.js":
/*!*********************************!*\
  !*** ./src/utils/textScreen.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var textScreen = function textScreen(text) {
  var SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  var start = SCREEN.selectionStart;
  var end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end) + text + SCREEN.value.slice(end, SCREEN.value.length);
  SCREEN.setSelectionRange(start + text.length, start + text.length);
  SCREEN.focus();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textScreen);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".keys-letter, .keys, .keys-space, .keys-40, .keys-86, .keys-100, .keys-del, .keys-tab, .keys-backspace, .keys-letter-dark, .keys-dark, .keys-space-dark, .keys-40-dark, .keys-86-dark, .keys-100-dark, .keys-del-dark, .keys-tab-dark, .keys-backspace-dark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 40px;\n  margin-left: 3px;\n  margin-right: 3px;\n  margin-bottom: 8px;\n  background-color: #FFFFFF;\n  color: #000000;\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\n  border-radius: 9px;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 25px;\n  letter-spacing: -0.02em;\n  cursor: pointer;\n}\n.keys-letter:hover, .keys:hover, .keys-space:hover, .keys-40:hover, .keys-86:hover, .keys-100:hover, .keys-del:hover, .keys-tab:hover, .keys-backspace:hover, .keys-letter-dark:hover, .keys-dark:hover, .keys-space-dark:hover, .keys-40-dark:hover, .keys-86-dark:hover, .keys-100-dark:hover, .keys-del-dark:hover, .keys-tab-dark:hover, .keys-backspace-dark:hover {\n  background-color: #0F77F0;\n  color: #FFFFFF;\n  transition: 0.2s ease;\n}\n.keys-letter:active, .keys:active, .keys-space:active, .keys-40:active, .keys-86:active, .keys-100:active, .keys-del:active, .keys-tab:active, .keys-backspace:active, .keys-letter-dark:active, .keys-dark:active, .keys-space-dark:active, .keys-40-dark:active, .keys-86-dark:active, .keys-100-dark:active, .keys-del-dark:active, .keys-tab-dark:active, .keys-backspace-dark:active {\n  border-radius: 25px;\n  background-color: #0F77F0;\n  color: #FFFFFF;\n}\n\n.keys-letter-dark, .keys-dark, .keys-space-dark, .keys-40-dark, .keys-86-dark, .keys-100-dark, .keys-del-dark, .keys-tab-dark, .keys-backspace-dark {\n  background-color: #646464;\n  color: #FFFFFF;\n  box-shadow: 0px 1px 0px rgba(255, 254, 254, 0.613);\n}\n.keys-letter-dark:hover, .keys-dark:hover, .keys-space-dark:hover, .keys-40-dark:hover, .keys-86-dark:hover, .keys-100-dark:hover, .keys-del-dark:hover, .keys-tab-dark:hover, .keys-backspace-dark:hover {\n  background-color: #D3D3D3;\n  color: #646464;\n  transition: 0.2s ease;\n}\n.keys-letter-dark:active, .keys-dark:active, .keys-space-dark:active, .keys-40-dark:active, .keys-86-dark:active, .keys-100-dark:active, .keys-del-dark:active, .keys-tab-dark:active, .keys-backspace-dark:active {\n  border-radius: 25px;\n  background-color: #D3D3D3;\n  color: #646464;\n}\n\n.keys, .keys-space, .keys-40, .keys-86, .keys-100, .keys-del, .keys-tab, .keys-backspace {\n  width: 106px;\n  background-color: #AEB3BE;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  letter-spacing: -0.02em;\n}\n\n.keys-dark, .keys-space-dark, .keys-40-dark, .keys-86-dark, .keys-100-dark, .keys-del-dark, .keys-tab-dark, .keys-backspace-dark {\n  width: 106px;\n  background-color: #3F3F3F;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  letter-spacing: -0.02em;\n}\n\n.keys-backspace {\n  width: 100px;\n}\n\n.keys-backspace-dark {\n  width: 100px;\n}\n\n.keys-tab {\n  width: 50px;\n}\n\n.keys-tab-dark {\n  width: 50px;\n}\n\n.keys-del {\n  width: 44px;\n}\n\n.keys-del-dark {\n  width: 44px;\n}\n\n.keys-100 {\n  width: 100px;\n}\n\n.keys-100-dark {\n  width: 100px;\n}\n\n.keys-86 {\n  width: 86px;\n}\n\n.keys-86-dark {\n  width: 86px;\n}\n\n.keys-40 {\n  width: 40px;\n}\n\n.keys-40-dark {\n  width: 40px;\n}\n\n.keys-space {\n  width: 330px;\n}\n\n.keys-space-dark {\n  width: 330px;\n}\n\n.key-Up {\n  border-radius: 25px !important;\n  background-color: #0F77F0 !important;\n  color: #FFFFFF !important;\n}\n\n.key-Up-dark {\n  border-radius: 25px !important;\n  background-color: #D3D3D3 !important;\n  color: #646464 !important;\n}\n\n.title {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #000000;\n  font-family: \"Roboto Condensed\", sans-serif;\n  text-align: center;\n  font-weight: 700;\n  font-size: 30px;\n}\n\n.textarea {\n  display: block;\n  width: 700px;\n  height: 200px;\n  margin: 10px auto 10px;\n  padding: 10px;\n  font-size: 18px;\n  color: #000000;\n  background-color: #FFFFFF;\n}\n\n.textarea:focus {\n  outline: none !important;\n  border-color: none !important;\n  box-shadow: none !important;\n}\n\n.keyboard, .keyboard-dark {\n  display: flex;\n  flex-wrap: wrap;\n  width: 704px;\n  margin: 0 auto;\n  padding: 5px;\n  background-color: rgba(206, 210, 217, 0.8);\n  user-select: none;\n}\n\n.keyboard-dark {\n  background-color: #000000;\n}\n\n.toggle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toggle-text {\n  margin: 0 5px 0 5px;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\n.toggle-control {\n  display: block;\n  position: relative;\n  padding-left: 50px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n}\n.toggle-control input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.toggle-control input:checked ~ .control {\n  background-color: #0F77F0;\n}\n.toggle-control input:checked ~ .control:after {\n  left: 26px;\n}\n.toggle-control .control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 26px;\n  width: 50px;\n  border-radius: 13px;\n  background-color: #AEB3BE;\n  transition: background-color 0.15s ease-in;\n}\n.toggle-control .control:after {\n  content: \"\";\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  width: 22px;\n  height: 22px;\n  border-radius: 13px;\n  background: #FFFFFF;\n  transition: left 0.15s ease-in;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n}\n.header .header-content {\n  width: 700px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 5px;\n}\n.footer p {\n  font-family: \"Roboto Condensed\", sans-serif;\n  text-align: center;\n  font-weight: 400;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #E7E5F4;\n}", "",{"version":3,"sources":["webpack://./src/sass/_components/_buttons.scss","webpack://./src/sass/_abstracts/_variables.scss","webpack://./src/sass/_fonts/_fonts.scss","webpack://./src/styles/main.scss","webpack://./src/sass/_components/_title.scss","webpack://./src/sass/_components/_screen.scss","webpack://./src/sass/_components/_keyboard.scss","webpack://./src/sass/_components/_toggle.scss","webpack://./src/sass/_layout/_header.scss","webpack://./src/sass/_layout/_footer.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EAEA,yBCZW;EDaX,cCVO;EDWP,0CAAA;EACA,kBAAA;EACA,2CEfS;EFgBT,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,eAAA;AGDJ;AHEI;EACI,yBCrBM;EDsBN,cCxBO;EDyBP,qBAAA;AGAR;AHEI;EACI,mBAAA;EACA,yBC3BM;ED4BN,cC9BO;AE8Bf;;AHIA;EAEI,yBC7BU;ED8BV,cC3BM;ED4BN,kDAAA;AGFJ;AHGI;EACI,yBC/BK;EDgCL,cClCM;EDmCN,qBAAA;AGDR;AHGI;EACI,mBAAA;EACA,yBCrCK;EDsCL,cCxCM;AEuCd;;AHKA;EAEI,YAAA;EACA,yBCrDa;EDuDb,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;AGJJ;;AHMA;EAEI,YAAA;EACA,yBCzDY;ED2DZ,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;AGLJ;;AHOA;EAEI,YAAA;AGLJ;;AHOA;EAEI,YAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,YAAA;AGLJ;;AHOA;EAEI,YAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,WAAA;AGLJ;;AHOA;EAEI,YAAA;AGLJ;;AHOA;EAEI,YAAA;AGLJ;;AHQA;EACI,8BAAA;EACA,oCAAA;EACA,yBAAA;AGLJ;;AHOA;EACI,8BAAA;EACA,oCAAA;EACA,yBAAA;AGJJ;;ACrIA;EACI,gBAAA;EACA,mBAAA;EACA,cHDO;EGGP,2CFLS;EEMT,kBAAA;EACA,gBAAA;EACA,eAAA;ADuIJ;;AE/IA;EACI,cAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;EACA,cJLO;EIOP,yBJVW;AE2Jf;;AE/IA;EACI,wBAAA;EACA,6BAAA;EACA,2BAAA;AFkJJ;;AGhKA;EACI,aAAA;EACA,eAAA;EAEA,YAAA;EAEA,cAAA;EACA,YAAA;EAEA,0CLNsB;EKOtB,iBAAA;AHgKJ;;AG9JA;EAEI,yBLJqB;AEoKzB;;AIlKA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AJqKJ;;AInKA;EACI,mBAAA;EACA,2CLnBS;ACyLb;;AIpKA;EACE,cAAA;EACA,kBAAA;EACA,kBArBa;EAsBb,mBAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;AJuKF;AIpKE;EACE,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;AJsKJ;AInKE;EACE,yBNvCU;AE4Md;AInKI;EACE,UAAA;AJqKN;AIjKE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YA/CY;EAgDZ,WAjDW;EAkDX,mBA3CY;EA4CZ,yBNtDa;EMuDb,0CAAA;AJmKJ;AIjKI;EACE,WAAA;EACA,kBAAA;EACA,SAvDU;EAwDV,QAxDU;EAyDV,WAnDgB;EAoDhB,YApDgB;EAqDhB,mBAtDU;EAuDV,mBNlES;EMmET,8BAAA;AJmKN;;AKtOA;EACI,aAAA;EACA,uBAAA;ALyOJ;AKxOC;EACI,YAAA;EACA,aAAA;EACA,8BAAA;AL0OL;;AMhPA;EACI,gBAAA;EACA,cAAA;EACA,YAAA;ANmPJ;AMlPI;EACI,2CPJK;EOKL,kBAAA;EACA,gBAAA;EACA,eAAA;ANoPR;;AAnPA;EACG,SAAA;EACA,UAAA;EACA,sBAAA;EACA,yBFRe;AE8PlB","sourcesContent":["@import \"../_fonts/fonts\";\r\n\r\n.keys-letter{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    margin-bottom: 8px;\r\n\r\n    background-color: $LightPrimary;\r\n    color: $LightInk;\r\n    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\r\n    border-radius: 9px;\r\n    font-family: $font-stack;\r\n    font-weight: 400;\r\n    font-size: 21px;\r\n    line-height: 25px;\r\n    letter-spacing: -0.02em;\r\n    cursor: pointer;\r\n    &:hover{\r\n        background-color: $LightAction;\r\n        color: $LightPrimary;\r\n        transition: 0.2s ease;\r\n    }\r\n    &:active{\r\n        border-radius: 25px;\r\n        background-color: $LightAction;\r\n        color: $LightPrimary;\r\n    }\r\n}\r\n\r\n.keys-letter-dark{\r\n    @extend .keys-letter;\r\n    background-color: $DarkPrimary;\r\n    color: $DarkInk;\r\n    box-shadow: 0px 1px 0px rgba(255, 254, 254, 0.613);\r\n    &:hover{\r\n        background-color: $DarkAction;\r\n        color: $DarkPrimary;\r\n        transition: 0.2s ease;\r\n    }\r\n    &:active{\r\n        border-radius: 25px;\r\n        background-color: $DarkAction;\r\n        color: $DarkPrimary;\r\n    }\r\n}\r\n\r\n.keys{\r\n    @extend .keys-letter;\r\n    width: 106px;\r\n    background-color: $LightSecondary;\r\n\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n    line-height: 20px;\r\n    letter-spacing: -0.02em;\r\n}\r\n.keys-dark{\r\n    @extend .keys-letter-dark;\r\n    width: 106px;\r\n    background-color: $DarkSecondary;\r\n\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n    line-height: 20px;\r\n    letter-spacing: -0.02em;\r\n}\r\n.keys-backspace{\r\n    @extend .keys;\r\n    width: 100px;\r\n}\r\n.keys-backspace-dark{\r\n    @extend .keys-dark;\r\n    width: 100px;\r\n}\r\n.keys-tab{\r\n    @extend .keys;\r\n    width: 50px;\r\n}\r\n.keys-tab-dark{\r\n    @extend .keys-dark;\r\n    width: 50px;\r\n}\r\n.keys-del{\r\n    @extend .keys;\r\n    width: 44px;\r\n}\r\n.keys-del-dark{\r\n    @extend .keys-dark;\r\n    width: 44px;\r\n}\r\n.keys-100{\r\n    @extend .keys;\r\n    width: 100px;\r\n}\r\n.keys-100-dark{\r\n    @extend .keys-dark;\r\n    width: 100px;\r\n}\r\n.keys-86{\r\n    @extend .keys;\r\n    width: 86px;\r\n}\r\n.keys-86-dark{\r\n    @extend .keys-dark;\r\n    width: 86px;\r\n}\r\n.keys-40{\r\n    @extend .keys;\r\n    width: 40px;\r\n}\r\n.keys-40-dark{\r\n    @extend .keys-dark;\r\n    width: 40px;\r\n}\r\n.keys-space{\r\n    @extend .keys;\r\n    width: 330px;\r\n}\r\n.keys-space-dark{\r\n    @extend .keys-dark;\r\n    width: 330px;\r\n}\r\n\r\n.key-Up{\r\n    border-radius: 25px !important;\r\n    background-color: $LightAction !important;\r\n    color: $LightPrimary !important;\r\n}\r\n.key-Up-dark{\r\n    border-radius: 25px !important;\r\n    background-color: $DarkAction !important;\r\n    color: $DarkPrimary !important;\r\n}","$LightPrimary: #FFFFFF;\r\n$LightSecondary: #AEB3BE;\r\n$LightAction: #0F77F0;\r\n$LightInk: #000000;\r\n$LightBackgroundKeyBoard: rgba(206, 210, 217, 0.8);\r\n$LightBackground: #E7E5F4;\r\n\r\n$DarkPrimary: #646464;\r\n$DarkSecondary: #3F3F3F;\r\n$DarkAction: #D3D3D3;\r\n$DarkInk: #FFFFFF;\r\n$DarkBackgroundKeyBoard: #000000;\r\n\r\n","@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');\r\n$font-stack: 'Roboto Condensed', sans-serif;","@import \"../sass/_abstracts/variables\";\r\n@import \"../sass/_components/buttons\";\r\n@import \"../sass/_components/title\";\r\n@import \"../sass/_components/screen\";\r\n@import \"../sass/_components/keyboard\";\r\n@import \"../sass/_components/toggle\";\r\n@import \"../sass/_layout/header\";\r\n@import \"../sass/_layout/footer\";\r\n\r\nbody{\r\n   margin: 0;  \r\n   padding: 0;\r\n   box-sizing: border-box;\r\n   background-color: $LightBackground;\r\n}","\r\n.title{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    color: $LightInk;\r\n\r\n    font-family: $font-stack;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n}","\r\n.textarea{\r\n    display: block;\r\n    width: 700px;\r\n    height: 200px;\r\n    margin: 10px auto 10px;\r\n    padding: 10px;\r\n    font-size: 18px;\r\n    color: $LightInk;\r\n\r\n    background-color: $LightPrimary;\r\n}\r\n.textarea:focus { \r\n    outline: none !important;\r\n    border-color: none !important;\r\n    box-shadow: none !important;\r\n}","\r\n.keyboard{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    width: 704px;\r\n\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n\r\n    background-color: $LightBackgroundKeyBoard;\r\n    user-select: none;\r\n}\r\n.keyboard-dark{\r\n    @extend .keyboard;\r\n    background-color: $DarkBackgroundKeyBoard;\r\n}","\r\n$toggle-background-color-on: $LightAction;\r\n$toggle-background-color-off: $LightSecondary;\r\n$toggle-control-color: $LightPrimary;\r\n$toggle-width: 50px;\r\n$toggle-height: 26px;\r\n$toggle-gutter: 2px;\r\n$toggle-radius: 50%;\r\n$toggle-control-speed: .15s;\r\n$toggle-control-ease: ease-in;\r\n\r\n$toggle-radius: calc($toggle-height / 2);\r\n$toggle-control-size: $toggle-height - ($toggle-gutter * 2);\r\n.toggle{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.toggle-text{\r\n    margin: 0 5px 0 5px;\r\n    font-family: $font-stack;\r\n}\r\n.toggle-control {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: $toggle-width;\r\n  margin-bottom: 25px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  user-select: none;\r\n\r\n\r\n  input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n\r\n  input:checked ~ .control {\r\n    background-color: $toggle-background-color-on;\r\n    \r\n    &:after {\r\n      left: $toggle-width - $toggle-control-size - $toggle-gutter;\r\n    }\r\n  }\r\n\r\n  .control {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: $toggle-height;\r\n    width: $toggle-width;\r\n    border-radius: $toggle-radius;\r\n    background-color: $toggle-background-color-off;\r\n    transition: background-color $toggle-control-speed $toggle-control-ease;\r\n\r\n    &:after {\r\n      content: \"\";\r\n      position: absolute;\r\n      left: $toggle-gutter;\r\n      top: $toggle-gutter;\r\n      width: $toggle-control-size;\r\n      height: $toggle-control-size;\r\n      border-radius: $toggle-radius;\r\n      background: $toggle-control-color;\r\n      transition: left $toggle-control-speed $toggle-control-ease;\r\n    }\r\n  }\r\n}",".header{\r\n    display: flex;\r\n    justify-content: center;\r\n .header-content{\r\n     width: 700px;\r\n     display: flex;\r\n     justify-content: space-between;\r\n }\r\n\r\n}\r\n",".footer{\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n    p{\r\n        font-family: $font-stack;\r\n        text-align: center;\r\n        font-weight: 400;\r\n        font-size: 16px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/header/header */ "./src/layouts/header/header.js");
/* harmony import */ var _layouts_textarea_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/textarea/textarea */ "./src/layouts/textarea/textarea.js");
/* harmony import */ var _layouts_keys_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/keys/keys */ "./src/layouts/keys/keys.js");
/* harmony import */ var _layouts_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/keyboard/keyboard */ "./src/layouts/keyboard/keyboard.js");
/* harmony import */ var _layouts_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/footer/footer */ "./src/layouts/footer/footer.js");
/* harmony import */ var _utils_clickTextScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/clickTextScreen */ "./src/utils/clickTextScreen.js");
/* harmony import */ var _utils_addSymbolScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/addSymbolScreen */ "./src/utils/addSymbolScreen.js");
/* harmony import */ var _utils_addBackspace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/addBackspace */ "./src/utils/addBackspace.js");
/* harmony import */ var _utils_addDel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/addDel */ "./src/utils/addDel.js");
/* harmony import */ var _utils_addCapsLock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/addCapsLock */ "./src/utils/addCapsLock.js");
/* harmony import */ var _utils_textScreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/textScreen */ "./src/utils/textScreen.js");
/* harmony import */ var _utils_addShift__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/addShift */ "./src/utils/addShift.js");
/* harmony import */ var _layouts_theme_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/theme/theme */ "./src/layouts/theme/theme.js");
/* harmony import */ var _utils_eventKey__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/eventKey */ "./src/utils/eventKey.js");
/* harmony import */ var _utils_eventClick__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/eventClick */ "./src/utils/eventClick.js");
















var BODY = document.getElementsByTagName('body')[0];
var language = localStorage.getItem('language');
(0,_layouts_header_header__WEBPACK_IMPORTED_MODULE_1__["default"])(BODY);
(0,_layouts_textarea_textarea__WEBPACK_IMPORTED_MODULE_2__["default"])(BODY);
(0,_layouts_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_4__["default"])(BODY, _layouts_keys_keys__WEBPACK_IMPORTED_MODULE_3__["default"], language);
(0,_layouts_footer_footer__WEBPACK_IMPORTED_MODULE_5__["default"])(BODY);
(0,_layouts_theme_theme__WEBPACK_IMPORTED_MODULE_13__["default"])();
(0,_utils_eventKey__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_addCapsLock__WEBPACK_IMPORTED_MODULE_10__["default"], _utils_addDel__WEBPACK_IMPORTED_MODULE_9__["default"], _utils_addBackspace__WEBPACK_IMPORTED_MODULE_8__["default"], _utils_addSymbolScreen__WEBPACK_IMPORTED_MODULE_7__["default"], _utils_textScreen__WEBPACK_IMPORTED_MODULE_11__["default"], _utils_addShift__WEBPACK_IMPORTED_MODULE_12__["default"]);
(0,_utils_eventClick__WEBPACK_IMPORTED_MODULE_15__["default"])(_utils_addSymbolScreen__WEBPACK_IMPORTED_MODULE_7__["default"], _utils_addCapsLock__WEBPACK_IMPORTED_MODULE_10__["default"], _utils_addBackspace__WEBPACK_IMPORTED_MODULE_8__["default"], _utils_addDel__WEBPACK_IMPORTED_MODULE_9__["default"], _utils_clickTextScreen__WEBPACK_IMPORTED_MODULE_6__["default"], _utils_addShift__WEBPACK_IMPORTED_MODULE_12__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=bundle.be652598394acfbf36f7.js.map