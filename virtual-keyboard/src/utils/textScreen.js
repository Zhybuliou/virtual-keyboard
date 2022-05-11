const textScreen = (text) => {
  const SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  const start = SCREEN.selectionStart;
  const end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end)
      + text
      + SCREEN.value.slice(end, SCREEN.value.length);
  SCREEN.setSelectionRange(start
        + text.length, start
        + text.length);
  SCREEN.focus();
};

export default textScreen;
