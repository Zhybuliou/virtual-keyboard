export default function focusTextArea() {
  setTimeout(() => {
    const textarea = document.getElementById('textarea');
    textarea.focus();
  }, 0);
}
