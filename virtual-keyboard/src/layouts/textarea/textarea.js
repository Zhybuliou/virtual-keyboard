const textAreaShow = (body) => {
  const TEXTAREA = document.createElement('textarea');
  TEXTAREA.className = 'body--textarea textarea';
  TEXTAREA.id = 'textarea';
  TEXTAREA.setAttribute('rows', '5');
  TEXTAREA.setAttribute('cols', '50');

  body.append(TEXTAREA);
};

export default textAreaShow;
