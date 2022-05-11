const eventClick = (
  addSymbolScreen,
  addCapsLock,
  addBackspace,
  addDel,
  clickTextScreen,
  addShift,
) => {
  const KEYBOARD = document.querySelector('.keyboard');

  KEYBOARD.addEventListener('click', (event) => {
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

  KEYBOARD.addEventListener('mousedown', (event) => {
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      addShift();
      if (document.querySelector('#CapsLock').hasAttribute('style')) { addCapsLock(); }
    }
  }, false);
  KEYBOARD.addEventListener('mouseup', (event) => {
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      addShift();
      if (document.querySelector('#CapsLock').hasAttribute('style')) { addCapsLock(); }
    }
  }, false);
};

export default eventClick;
