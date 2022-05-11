const addShift = () => {
  let allKeys = document.querySelectorAll('.keys-letter');
  if (!allKeys.length) { allKeys = document.querySelectorAll('.keys-letter-dark'); }
  if (localStorage.getItem('language') === 'en') {
    localStorage.setItem('language', 'enUp');
  } else if (localStorage.getItem('language') === 'enUp') {
    localStorage.setItem('language', 'en');
  } else if (localStorage.getItem('language') === 'ru') {
    localStorage.setItem('language', 'ruUp');
  } else if (localStorage.getItem('language') === 'ruUp') {
    localStorage.setItem('language', 'ru');
  }

  allKeys.forEach((e) => {
    if (localStorage.getItem('language') === 'enUp') {
      e.textContent = e.dataset.enUp;
    } else if (localStorage.getItem('language') === 'en') {
      e.textContent = e.dataset.en;
    } else if (localStorage.getItem('language') === 'ruUp') {
      e.textContent = e.dataset.ruUp;
    } else if (localStorage.getItem('language') === 'ru') {
      e.textContent = e.dataset.ru;
    }
  });
};

export default addShift;
