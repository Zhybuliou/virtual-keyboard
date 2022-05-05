const addCapsLock = () => {
  let allKeys = document.querySelectorAll('.keys-letter');
  if (!allKeys.length) { allKeys = document.querySelectorAll('.keys-letter-dark'); }
  if (['ф', 'a'].includes(document.querySelector('#KeyA').textContent)) {
    allKeys.forEach((e) => {
      e.textContent = e.textContent.toUpperCase();
    });
  } else {
    allKeys.forEach((e) => {
      e.textContent = e.textContent.toLowerCase();
    });
  }
};

export default addCapsLock;
