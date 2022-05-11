const eventKey = (addCapsLock, addDel, addBackspace, addSymbolScreen, textScreen, addShift) => {
  const inputToggle = document.querySelector('#toggle-input');

  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const someKeyDown = document.querySelector(`#${event.code}`);
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
  document.addEventListener('keyup', (event) => {
    const someKeyDown = document.querySelector(`#${event.code}`);
    if (someKeyDown !== null) {
      if (inputToggle.checked) {
        someKeyDown.classList.remove('key-Up-dark');
      } else {
        someKeyDown.classList.remove('key-Up');
      }
    }
  }, false);

  document.addEventListener('keydown', (zEvent) => {
    if (zEvent.ctrlKey && zEvent.altKey) {
      document.querySelector('#CapsLock').removeAttribute('style');
      let allKeys = document.querySelectorAll('.keys-letter');
      if (!allKeys.length) { allKeys = document.querySelectorAll('.keys-letter-dark'); }
      if (localStorage.getItem('language') === 'en') {
        localStorage.setItem('language', 'ru');
      } else if (localStorage.getItem('language') === 'ru') {
        localStorage.setItem('language', 'en');
      } else if (localStorage.getItem('language') === 'ruUp') {
        localStorage.setItem('language', 'enUp');
      } else if (localStorage.getItem('language') === 'enUp') {
        localStorage.setItem('language', 'ruUp');
      }
      allKeys.forEach((e) => {
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

  let down = false;
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (down) { return; }
      down = true;
      addShift();
      if (document.querySelector('#CapsLock').hasAttribute('style')) { addCapsLock(); }
    }
  }, false);
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      down = false;
      addShift();
      if (document.querySelector('#CapsLock').hasAttribute('style')) { addCapsLock(); }
    }
  }, false);

  let capsCount = false;
  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      if (capsCount) { return; }
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
  document.addEventListener('keyup', (event) => {
    if (event.code === 'CapsLock') {
      capsCount = false;
    }
  }, false);
};

export default eventKey;
