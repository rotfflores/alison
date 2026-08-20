const scene = document.querySelector('.scene');
const details = document.querySelector('.details');
const triggers = document.querySelectorAll('.invitation-trigger, .pearl-button');
const closeButton = document.querySelector('.details__close');

function setOpen(open) {
  scene.classList.toggle('is-open', open);
  details.setAttribute('aria-hidden', String(!open));
  document.querySelector('.invitation-trigger').setAttribute('aria-expanded', String(open));
  if (open) window.setTimeout(() => closeButton.focus(), 450);
}

triggers.forEach((trigger) => trigger.addEventListener('click', () => setOpen(true)));
closeButton.addEventListener('click', () => {
  setOpen(false);
  document.querySelector('.invitation-trigger').focus();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && scene.classList.contains('is-open')) setOpen(false);
});
