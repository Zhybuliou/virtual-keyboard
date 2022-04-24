const keyboardShow = (body, keys) => {
  const KEYBOARD = document.createElement('div');
  const arrayKey = ['Ctrl', 'Win', 'Alt', '▲', '◄', '▼', '►'];
  KEYBOARD.classList = 'keyboard';
  //   64 keys //
  keys.forEach((el) => {
    const key = document.createElement('div');
    if (el.en === 'Backspace') {
      key.classList = 'keys-backspace';
      key.innerText = el.en;
    } else if (el.en === 'Tab') {
      key.classList = 'keys-tab';
      key.innerText = el.en;
    } else if (el.en === 'Enter' || (el.en === 'Shift' && el.small === 'Shift')) {
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

export default keyboardShow;
