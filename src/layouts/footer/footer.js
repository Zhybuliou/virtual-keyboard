const footerShow = (body) => {
  const FOOTER = document.createElement('div');
  FOOTER.classList = 'footer';
  FOOTER.innerHTML = '<p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe ctrl + alt</p>';
  body.append(FOOTER);
};

export default footerShow;
