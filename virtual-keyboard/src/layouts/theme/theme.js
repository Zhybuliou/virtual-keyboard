const theme = () => {
  const toggle = document.querySelector('.toggle-control');
  const inputToggle = document.querySelector('#toggle-input');
  const white = ['.keys-letter',
    '.keys',
    '.keys-backspace',
    '.keys-tab',
    '.keys-del',
    '.keys-100',
    '.keys-86',
    '.keys-40',
    '.keys-space',
    '.keyboard',
    '.key-Up',
  ];
  const dark = ['.keys-letter-dark',
    '.keys-dark',
    '.keys-backspace-dark',
    '.keys-tab-dark',
    '.keys-del-dark',
    '.keys-100-dark',
    '.keys-86-dark',
    '.keys-40-dark',
    '.keys-space-dark',
    '.keyboard-dark',
    '.key-Up-dark'];

  toggle.addEventListener('click', () => {
    if (inputToggle.checked) {
      const styleButton = document.querySelectorAll(white);
      styleButton.forEach((el) => {
        const lightClass = el.className.split(' ')[0];
        el.classList.remove(lightClass);
        el.classList.add(`${lightClass}-dark`);
      });
    } else {
      const styleButton = document.querySelectorAll(dark);
      styleButton.forEach((el) => {
        const lightClass = el.className.split(' ')[0];
        el.classList.remove(lightClass);
        el.classList.add(lightClass.slice(0, -5));
      });
    }
  });
};

export default theme;
