const addBackspace = () => {
  const SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  const start = SCREEN.selectionStart;
  const end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end - 1)
  + SCREEN.value.slice(end, SCREEN.value.length);
  SCREEN.setSelectionRange(start - 1, start - 1);
  SCREEN.focus();
};

export default addBackspace;
