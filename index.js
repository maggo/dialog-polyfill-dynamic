const setUpApp = () => {
  const dialog = document.getElementById('dialog');
  const toggle = document.getElementById('dialog-toggle');
  const close = document.getElementById('dialog-close');
  toggle.addEventListener('click', () => dialog.showModal());
  close.addEventListener('click', () => dialog.close());
};

if (window.HTMLDialogElement === undefined) {
  console.log('No dialog present');
  
  import('dialog-polyfill').then(dialogPolyfill => {
    console.log('dialog loaded', dialogPolyfill);
    Array.from(document.getElementsByTagName('dialog')).forEach(dialog => {
      dialogPolyfill.registerDialog(dialog);
    });
    console.log('dialogs polyfilled!');
    setUpApp();
  });
} else {
  setUpApp();
}
