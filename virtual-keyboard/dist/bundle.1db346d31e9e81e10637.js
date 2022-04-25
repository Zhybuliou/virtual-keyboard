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
  Header.innerHTML = "\n  <div class=\"header-content\">\n       <p class=\"title\">RSS Virtual keyboard</p>\n       <div class=\"toggle\">\n           <p class=\"toggle-text\">dark</p>\n           <label class=\"toggle-control\">\n               <input type=\"checkbox\" checked=\"checked\">\n               <span class=\"control\"></span>\n           </label>\n           <p class=\"toggle-text\">light</p>\n       </div>\n   </div>";
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
var keyboardShow = function keyboardShow(body, keys) {
  var KEYBOARD = document.createElement('div');
  var arrayKey = ['Ctrl', 'Win', 'Alt', '▲', '◄', '▼', '►'];
  KEYBOARD.classList = 'keyboard'; //   64 keys //

  keys.forEach(function (el) {
    var key = document.createElement('div');

    if (el.en === 'Backspace') {
      key.classList = 'keys-backspace';
      key.innerText = el.en;
    } else if (el.en === 'Tab') {
      key.classList = 'keys-tab';
      key.innerText = el.en;
    } else if (el.en === 'Enter' || el.en === 'Shift' && el.small === 'Shift') {
      key.classList = 'keys-86';
      key.innerText = el.en;
    } else if (el.en === 'CapsLock' || el.en === 'Shift') {
      key.classList = 'keys-100';
      key.innerText = el.en;
    } else if (arrayKey.includes(el.en)) {
      key.classList = 'keys-40';
      key.innerText = el.en;
    } else if (el.en === 'Space') {
      key.classList = 'keys-space';
      key.innerText = el.en;
    } else if (el.en === 'Del') {
      key.classList = 'keys-del';
      key.innerText = el.en;
    } else {
      key.classList = 'keys-letter';
      key.innerText = el.en;
    }

    KEYBOARD.appendChild(key);
  });
  return body.append(KEYBOARD);
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
  ruUp: 'Ё'
}, {
  en: '1',
  enUp: '!',
  ru: '1',
  ruUp: '!'
}, {
  en: '2',
  enUp: '@',
  ru: '2',
  ruUp: '"'
}, {
  en: '3',
  enUp: '#',
  ru: '3',
  ruUp: '№'
}, {
  en: '4',
  enUp: '$',
  ru: '4',
  ruUp: ';'
}, {
  en: '5',
  enUp: '%',
  ru: '5',
  ruUp: '%'
}, {
  en: '6',
  enUp: '^',
  ru: '6',
  ruUp: ':'
}, {
  en: '7',
  enUp: '&',
  ru: '7',
  ruUp: '?'
}, {
  en: '8',
  enUp: '*',
  ru: '8',
  ruUp: '*'
}, {
  en: '9',
  enUp: '(',
  ru: '9',
  ruUp: '('
}, {
  en: '0',
  enUp: ')',
  ru: '0',
  ruUp: ')'
}, {
  en: '-',
  enUp: '_',
  ru: '-',
  ruUp: '_'
}, {
  en: '=',
  enUp: '+',
  ru: '=',
  ruUp: '+'
}, {
  en: 'Backspace',
  enUp: 'Backspace',
  ru: 'Backspace',
  ruUp: 'Backspace'
}, //   2 row   //
{
  en: 'Tab',
  enUp: 'Tab',
  ru: 'Tab',
  ruUp: 'Tab'
}, {
  en: 'q',
  enUp: 'Q',
  ru: 'й',
  ruUp: 'Й'
}, {
  en: 'w',
  enUp: 'W',
  ru: 'ц',
  ruUp: 'Ц'
}, {
  en: 'e',
  enUp: 'E',
  ru: 'у',
  ruUp: 'У'
}, {
  en: 'r',
  enUp: 'R',
  ru: 'к',
  ruUp: 'К'
}, {
  en: 't',
  enUp: 'T',
  ru: 'е',
  ruUp: 'Е'
}, {
  en: 'y',
  enUp: 'Y',
  ru: 'н',
  ruUp: 'Н'
}, {
  en: 'u',
  enUp: 'U',
  ru: 'г',
  ruUp: 'Г'
}, {
  en: 'i',
  enUp: 'I',
  ru: 'ш',
  ruUp: 'Ш'
}, {
  en: 'o',
  enUp: 'O',
  ru: 'щ',
  ruUp: 'Щ'
}, {
  en: 'p',
  enUp: 'P',
  ru: 'з',
  ruUp: 'З'
}, {
  en: '[',
  enUp: '{',
  ru: 'х',
  ruUp: 'Х'
}, {
  en: ']',
  enUp: '}',
  ru: 'ъ',
  ruUp: 'Ъ'
}, {
  en: '\\',
  enUp: '|',
  ru: '\\',
  ruUp: '/'
}, {
  en: 'Del',
  enUp: 'Del',
  ru: 'Del',
  ruUp: 'Del'
}, //    3 row    //
{
  en: 'CapsLock',
  enUp: 'CapsLock',
  ru: 'CapsLock',
  ruUp: 'CapsLock'
}, {
  en: 'a',
  enUp: 'A',
  ru: 'ф',
  ruUp: 'Ф'
}, {
  en: 's',
  enUp: 'S',
  ru: 'ы',
  ruUp: 'Ы'
}, {
  en: 'd',
  enUp: 'D',
  ru: 'в',
  ruUp: 'В'
}, {
  en: 'f',
  enUp: 'F',
  ru: 'a',
  ruUp: 'A'
}, {
  en: 'g',
  enUp: 'G',
  ru: 'п',
  ruUp: 'П'
}, {
  en: 'h',
  enUp: 'H',
  ru: 'р',
  ruUp: 'Р'
}, {
  en: 'j',
  enUp: 'J',
  ru: 'о',
  ruUp: 'О'
}, {
  en: 'k',
  enUp: 'K',
  ru: 'л',
  ruUp: 'Л'
}, {
  en: 'l',
  enUp: 'L',
  ru: 'д',
  ruUp: 'Д'
}, {
  en: ';',
  enUp: ':',
  ru: 'ж',
  ruUp: 'Ж'
}, {
  en: '\'',
  enUp: '"',
  ru: 'э',
  ruUp: 'Э'
}, {
  en: 'Enter',
  enUp: 'Enter',
  ru: 'Enter',
  ruUp: 'Enter'
}, //   row 4  //
{
  en: 'Shift',
  enUp: 'Shift',
  ru: 'Shift',
  ruUp: 'Shift'
}, {
  en: 'z',
  enUp: 'Z',
  ru: 'я',
  ruUp: 'Я'
}, {
  en: 'x',
  enUp: 'X',
  ru: 'ч',
  ruUp: 'Ч'
}, {
  en: 'c',
  enUp: 'C',
  ru: 'с',
  ruUp: 'С'
}, {
  en: 'v',
  enUp: 'V',
  ru: 'м',
  ruUp: 'М'
}, {
  en: 'b',
  enUp: 'B',
  ru: 'и',
  ruUp: 'И'
}, {
  en: 'n',
  enUp: 'N',
  ru: 'т',
  ruUp: 'Т'
}, {
  en: 'm',
  enUp: 'M',
  ru: 'ь',
  ruUp: 'Ь'
}, {
  en: ',',
  enUp: '<',
  ru: 'б',
  ruUp: 'Б'
}, {
  en: '.',
  enUp: '>',
  ru: 'ю',
  ruUp: 'Ю'
}, {
  en: '/',
  enUp: '?',
  ru: '.',
  ruUp: ','
}, {
  en: '▲',
  enUp: '▲',
  ru: '▲',
  ruUp: '▲'
}, {
  en: 'Shift',
  enUp: 'Shift',
  ru: 'Shift',
  ruUp: 'Shift',
  small: 'Shift'
}, //   row 5  //
{
  en: 'Ctrl',
  enUp: 'Ctrl',
  ru: 'Ctrl',
  ruUp: 'Ctrl'
}, {
  en: 'Win',
  enUp: 'Win',
  ru: 'Win',
  ruUp: 'Win'
}, {
  en: 'Alt',
  enUp: 'Alt',
  ru: 'Alt',
  ruUp: 'Alt'
}, {
  en: 'Space',
  enUp: 'Space',
  ru: 'Space',
  ruUp: 'Space'
}, {
  en: 'Alt',
  enUp: 'Alt',
  ru: 'Alt',
  ruUp: 'Alt'
}, {
  en: '◄',
  enUp: '◄',
  ru: '◄',
  ruUp: '◄'
}, {
  en: '▼',
  enUp: '▼',
  ru: '▼',
  ruUp: '▼'
}, {
  en: '►',
  enUp: '►',
  ru: '►',
  ruUp: '►'
}, {
  en: 'Ctrl',
  enUp: 'Ctrl',
  ru: 'Ctrl',
  ruUp: 'Ctrl'
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

/***/ "./src/utils/focusTextArea.js":
/*!************************************!*\
  !*** ./src/utils/focusTextArea.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ focusTextArea)
/* harmony export */ });
function focusTextArea() {
  setTimeout(function () {
    document.getElementById('textarea').focus();
  }, 0);
}

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
___CSS_LOADER_EXPORT___.push([module.id, ".keys-letter, .keys, .keys-space, .keys-40, .keys-86, .keys-100, .keys-del, .keys-tab, .keys-backspace {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 40px;\n  margin-left: 3px;\n  margin-right: 3px;\n  margin-bottom: 8px;\n  background-color: #FFFFFF;\n  color: #000000;\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\n  border-radius: 9px;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 400;\n  font-size: 21px;\n  line-height: 25px;\n  letter-spacing: -0.02em;\n  cursor: pointer;\n}\n.keys-letter:hover, .keys:hover, .keys-space:hover, .keys-40:hover, .keys-86:hover, .keys-100:hover, .keys-del:hover, .keys-tab:hover, .keys-backspace:hover {\n  background-color: #0F77F0;\n  color: #FFFFFF;\n  transition: 0.2s ease;\n}\n.keys-letter:active, .keys:active, .keys-space:active, .keys-40:active, .keys-86:active, .keys-100:active, .keys-del:active, .keys-tab:active, .keys-backspace:active {\n  border-radius: 25px;\n  background-color: #0F77F0;\n  color: #FFFFFF;\n}\n\n.keys, .keys-space, .keys-40, .keys-86, .keys-100, .keys-del, .keys-tab, .keys-backspace {\n  width: 106px;\n  background-color: #AEB3BE;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  letter-spacing: -0.02em;\n}\n\n.keys-backspace {\n  width: 100px;\n}\n\n.keys-tab {\n  width: 50px;\n}\n\n.keys-del {\n  width: 44px;\n}\n\n.keys-100 {\n  width: 100px;\n}\n\n.keys-86 {\n  width: 86px;\n}\n\n.keys-40 {\n  width: 40px;\n}\n\n.keys-space {\n  width: 330px;\n}\n\n.title {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #000000;\n  font-family: \"Roboto Condensed\", sans-serif;\n  text-align: center;\n  font-weight: 700;\n  font-size: 30px;\n}\n\n.textarea {\n  display: block;\n  width: 700px;\n  height: 200px;\n  margin: 10px auto 10px;\n  padding: 10px;\n  font-size: 18px;\n  color: #000000;\n  background-color: #FFFFFF;\n}\n\n.keyboard {\n  display: flex;\n  flex-wrap: wrap;\n  width: 704px;\n  margin: 0 auto;\n  padding: 5px;\n  background-color: rgba(206, 210, 217, 0.8);\n  user-select: none;\n}\n\n.toggle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.toggle-text {\n  margin: 0 5px 0 5px;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\n.toggle-control {\n  display: block;\n  position: relative;\n  padding-left: 50px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n}\n.toggle-control input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.toggle-control input:checked ~ .control {\n  background-color: #AEB3BE;\n}\n.toggle-control input:checked ~ .control:after {\n  left: 26px;\n}\n.toggle-control .control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 26px;\n  width: 50px;\n  border-radius: 13px;\n  background-color: #0F77F0;\n  transition: background-color 0.15s ease-in;\n}\n.toggle-control .control:after {\n  content: \"\";\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  width: 22px;\n  height: 22px;\n  border-radius: 13px;\n  background: #FFFFFF;\n  transition: left 0.15s ease-in;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n}\n.header .header-content {\n  width: 700px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 5px;\n}\n.footer p {\n  font-family: \"Roboto Condensed\", sans-serif;\n  text-align: center;\n  font-weight: 400;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #E7E5F4;\n}", "",{"version":3,"sources":["webpack://./src/sass/_components/_buttons.scss","webpack://./src/sass/_abstracts/_variables.scss","webpack://./src/sass/_fonts/_fonts.scss","webpack://./src/styles/main.scss","webpack://./src/sass/_components/_title.scss","webpack://./src/sass/_components/_screen.scss","webpack://./src/sass/_components/_keyboard.scss","webpack://./src/sass/_components/_toggle.scss","webpack://./src/sass/_layout/_header.scss","webpack://./src/sass/_layout/_footer.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EAEA,yBCZW;EDaX,cCVO;EDWP,0CAAA;EACA,kBAAA;EACA,2CEfS;EFgBT,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,eAAA;AGDJ;AHEI;EACI,yBCrBM;EDsBN,cCxBO;EDyBP,qBAAA;AGAR;AHEI;EACI,mBAAA;EACA,yBC3BM;ED4BN,cC9BO;AE8Bf;;AHIA;EAEI,YAAA;EACA,yBCpCa;EDsCb,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;AGHJ;;AHKA;EAEI,YAAA;AGHJ;;AHKA;EAEI,WAAA;AGHJ;;AHKA;EAEI,WAAA;AGHJ;;AHKA;EAEI,YAAA;AGHJ;;AHKA;EAEI,WAAA;AGHJ;;AHKA;EAEI,WAAA;AGHJ;;AHKA;EAEI,YAAA;AGHJ;;ACnEA;EACI,gBAAA;EACA,mBAAA;EACA,cHDO;EGGP,2CFLS;EEMT,kBAAA;EACA,gBAAA;EACA,eAAA;ADqEJ;;AE7EA;EACI,cAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;EACA,cJLO;EIOP,yBJVW;AEyFf;;AGxFA;EACI,aAAA;EACA,eAAA;EAEA,YAAA;EAEA,cAAA;EACA,YAAA;EAEA,0CLNsB;EKOtB,iBAAA;AHwFJ;;AItFA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AJyFJ;;AIvFA;EACI,mBAAA;EACA,2CLnBS;AC6Gb;;AIxFA;EACE,cAAA;EACA,kBAAA;EACA,kBArBa;EAsBb,mBAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;AJ2FF;AIxFE;EACE,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;AJ0FJ;AIvFE;EACE,yBNxCa;AEiIjB;AIvFI;EACE,UAAA;AJyFN;AIrFE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YA/CY;EAgDZ,WAjDW;EAkDX,mBA3CY;EA4CZ,yBNrDU;EMsDV,0CAAA;AJuFJ;AIrFI;EACE,WAAA;EACA,kBAAA;EACA,SAvDU;EAwDV,QAxDU;EAyDV,WAnDgB;EAoDhB,YApDgB;EAqDhB,mBAtDU;EAuDV,mBNlES;EMmET,8BAAA;AJuFN;;AK1JA;EACI,aAAA;EACA,uBAAA;AL6JJ;AK5JC;EACI,YAAA;EACA,aAAA;EACA,8BAAA;AL8JL;;AMpKA;EACI,gBAAA;EACA,cAAA;EACA,YAAA;ANuKJ;AMtKI;EACI,2CPJK;EOKL,kBAAA;EACA,gBAAA;EACA,eAAA;ANwKR;;AAvKA;EACG,SAAA;EACA,UAAA;EACA,sBAAA;EACA,yBFRe;AEkLlB","sourcesContent":["@import \"../_fonts/fonts\";\r\n\r\n.keys-letter{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    margin-bottom: 8px;\r\n\r\n    background-color: $LightPrimary;\r\n    color: $LightInk;\r\n    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);\r\n    border-radius: 9px;\r\n    font-family: $font-stack;\r\n    font-weight: 400;\r\n    font-size: 21px;\r\n    line-height: 25px;\r\n    letter-spacing: -0.02em;\r\n    cursor: pointer;\r\n    &:hover{\r\n        background-color: $LightAction;\r\n        color: $LightPrimary;\r\n        transition: 0.2s ease;\r\n    }\r\n    &:active{\r\n        border-radius: 25px;\r\n        background-color: $LightAction;\r\n        color: $LightPrimary;\r\n    }\r\n}\r\n\r\n.keys{\r\n    @extend .keys-letter;\r\n    width: 106px;\r\n    background-color: $LightSecondary;\r\n\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n    line-height: 20px;\r\n    letter-spacing: -0.02em;\r\n}\r\n.keys-backspace{\r\n    @extend .keys;\r\n    width: 100px;\r\n}\r\n.keys-tab{\r\n    @extend .keys;\r\n    width: 50px;\r\n}\r\n.keys-del{\r\n    @extend .keys;\r\n    width: 44px;\r\n}\r\n.keys-100{\r\n    @extend .keys;\r\n    width: 100px;\r\n}\r\n.keys-86{\r\n    @extend .keys;\r\n    width: 86px;\r\n}\r\n.keys-40{\r\n    @extend .keys;\r\n    width: 40px;\r\n}\r\n.keys-space{\r\n    @extend .keys;\r\n    width: 330px;\r\n}","$LightPrimary: #FFFFFF;\r\n$LightSecondary: #AEB3BE;\r\n$LightAction: #0F77F0;\r\n$LightInk: #000000;\r\n$LightBackgroundKeyBoard: rgba(206, 210, 217, 0.8);\r\n$LightBackground: #E7E5F4;\r\n\r\n$DarkPrimary: #646464;\r\n$DarkSecondary: #3F3F3F;\r\n$DarkAction: #D3D3D3;\r\n$DarkInk: #FFFFFF;\r\n\r\n","@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');\r\n$font-stack: 'Roboto Condensed', sans-serif;","@import \"../sass/_abstracts/variables\";\r\n@import \"../sass/_components/buttons\";\r\n@import \"../sass/_components/title\";\r\n@import \"../sass/_components/screen\";\r\n@import \"../sass/_components/keyboard\";\r\n@import \"../sass/_components/toggle\";\r\n@import \"../sass/_layout/header\";\r\n@import \"../sass/_layout/footer\";\r\n\r\nbody{\r\n   margin: 0;  \r\n   padding: 0;\r\n   box-sizing: border-box;\r\n   background-color: $LightBackground;\r\n}","\r\n.title{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    color: $LightInk;\r\n\r\n    font-family: $font-stack;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n}","\r\n.textarea{\r\n    display: block;\r\n    width: 700px;\r\n    height: 200px;\r\n    margin: 10px auto 10px;\r\n    padding: 10px;\r\n    font-size: 18px;\r\n    color: $LightInk;\r\n\r\n    background-color: $LightPrimary;\r\n}\r\n","\r\n.keyboard{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    width: 704px;\r\n\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n\r\n    background-color: $LightBackgroundKeyBoard;\r\n    user-select: none;\r\n}","\r\n$toggle-background-color-on: $LightSecondary;\r\n$toggle-background-color-off: $LightAction;\r\n$toggle-control-color: $LightPrimary;\r\n$toggle-width: 50px;\r\n$toggle-height: 26px;\r\n$toggle-gutter: 2px;\r\n$toggle-radius: 50%;\r\n$toggle-control-speed: .15s;\r\n$toggle-control-ease: ease-in;\r\n\r\n$toggle-radius: calc($toggle-height / 2);\r\n$toggle-control-size: $toggle-height - ($toggle-gutter * 2);\r\n.toggle{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.toggle-text{\r\n    margin: 0 5px 0 5px;\r\n    font-family: $font-stack;\r\n}\r\n.toggle-control {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: $toggle-width;\r\n  margin-bottom: 25px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  user-select: none;\r\n\r\n\r\n  input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n\r\n  input:checked ~ .control {\r\n    background-color: $toggle-background-color-on;\r\n    \r\n    &:after {\r\n      left: $toggle-width - $toggle-control-size - $toggle-gutter;\r\n    }\r\n  }\r\n\r\n  .control {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: $toggle-height;\r\n    width: $toggle-width;\r\n    border-radius: $toggle-radius;\r\n    background-color: $toggle-background-color-off;\r\n    transition: background-color $toggle-control-speed $toggle-control-ease;\r\n\r\n    &:after {\r\n      content: \"\";\r\n      position: absolute;\r\n      left: $toggle-gutter;\r\n      top: $toggle-gutter;\r\n      width: $toggle-control-size;\r\n      height: $toggle-control-size;\r\n      border-radius: $toggle-radius;\r\n      background: $toggle-control-color;\r\n      transition: left $toggle-control-speed $toggle-control-ease;\r\n    }\r\n  }\r\n}",".header{\r\n    display: flex;\r\n    justify-content: center;\r\n .header-content{\r\n     width: 700px;\r\n     display: flex;\r\n     justify-content: space-between;\r\n }\r\n\r\n}\r\n",".footer{\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n    p{\r\n        font-family: $font-stack;\r\n        text-align: center;\r\n        font-weight: 400;\r\n        font-size: 16px;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _utils_focusTextArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/focusTextArea */ "./src/utils/focusTextArea.js");
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/header/header */ "./src/layouts/header/header.js");
/* harmony import */ var _layouts_textarea_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/textarea/textarea */ "./src/layouts/textarea/textarea.js");
/* harmony import */ var _layouts_keys_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/keys/keys */ "./src/layouts/keys/keys.js");
/* harmony import */ var _layouts_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/keyboard/keyboard */ "./src/layouts/keyboard/keyboard.js");
/* harmony import */ var _layouts_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/footer/footer */ "./src/layouts/footer/footer.js");







var BODY = document.getElementsByTagName('body')[0];
(0,_layouts_header_header__WEBPACK_IMPORTED_MODULE_2__["default"])(BODY);
(0,_layouts_textarea_textarea__WEBPACK_IMPORTED_MODULE_3__["default"])(BODY);
(0,_layouts_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_5__["default"])(BODY, _layouts_keys_keys__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_layouts_footer_footer__WEBPACK_IMPORTED_MODULE_6__["default"])(BODY);
(0,_utils_focusTextArea__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.1db346d31e9e81e10637.js.map