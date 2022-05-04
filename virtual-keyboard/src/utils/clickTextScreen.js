const clickTextScreen = (event) => {
  const SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  const start = SCREEN.selectionStart;
  const end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end)
    + event.target.textContent
    + SCREEN.value.slice(end, SCREEN.value.length);
  SCREEN.setSelectionRange(start
      + event.target.textContent.length, start
      + event.target.textContent.length);
  SCREEN.focus();
};

export default clickTextScreen;
