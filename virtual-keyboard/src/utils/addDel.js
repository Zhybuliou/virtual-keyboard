const addDel = () => {
  const SCREEN = document.querySelector('#textarea');
  SCREEN.setAttribute('wrap', 'physical');
  const start = SCREEN.selectionStart;
  const end = SCREEN.selectionEnd;
  SCREEN.value = SCREEN.value.slice(0, end) + SCREEN.value.slice(end + 1, SCREEN.value.length);
  SCREEN.setSelectionRange(start, start);
  SCREEN.focus();
};

export default addDel;
