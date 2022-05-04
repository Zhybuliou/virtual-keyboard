const keyboardShow = (body, keys, lang) => {
  const KEYBOARD = document.createElement('div');
  const arrayKey = ['Ctrl', 'Win', 'Alt', '▲', '◄', '▼', '►'];
  KEYBOARD.classList = 'keyboard';
  //   64 keys //
  keys.forEach((el) => {
    const key = document.createElement('div');
    if (el.en === 'Backspace') {
      key.classList = 'keys-backspace';
      key.id = el.code;
      key.innerText = el.en;
    } else if (el.en === 'Tab') {
      key.classList = 'keys-tab';
      key.id = el.code;
      key.innerText = el.en;
    } else if (el.en === 'Enter' || (el.en === 'Shift' && el.small === 'Shift')) {
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
      } else {
        key.innerText = el.en;
      }
    }
    KEYBOARD.appendChild(key);
  });

  return body.appendChild(KEYBOARD);
};

export default keyboardShow;
