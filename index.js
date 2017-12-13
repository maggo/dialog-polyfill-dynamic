const setUpApp = () => {
  const dialog = document.getElementById('dialog');
  const toggle = document.getElementById('dialog-toggle');
  const close = document.getElementById('dialog-close');
  toggle.addEventListener('click', () => dialog.showModal());
  close.addEventListener('click', () => dialog.close());
};

if (window.HTMLDialogElement === undefined) {
  console.log('No native dialog support! Loading polyfill…');
  
  import('dialog-polyfill').then(dialogPolyfill => {
    Array.from(document.getElementsByTagName('dialog')).forEach(dialog => {
      dialogPolyfill.registerDialog(dialog);
    });
    console.log('dialog polyfill loaded!');
    setUpApp();
  });
} else {
  setUpApp();
}
