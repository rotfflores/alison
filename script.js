const scene = document.querySelector('.scene');
const details = document.querySelector('.details');
const triggers = document.querySelectorAll('.invitation-trigger, .pearl-button');
const closeButton = document.querySelector('.details__close');
const invitationPage = document.querySelector('.invitation-page');
const openInvitationButton = document.querySelector('.details__cta');
const invitationBackButton = document.querySelector('.invitation-page__back');
const musicButton = document.querySelector('.record-player__button');

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

openInvitationButton.addEventListener('click', () => {
  scene.classList.add('is-invitation');
  details.setAttribute('aria-hidden', 'true');
  invitationPage.setAttribute('aria-hidden', 'false');
  window.setTimeout(() => invitationBackButton.focus(), 650);
});

invitationBackButton.addEventListener('click', () => {
  scene.classList.remove('is-invitation');
  invitationPage.setAttribute('aria-hidden', 'true');
  details.setAttribute('aria-hidden', 'false');
  openInvitationButton.focus();
});

musicButton.addEventListener('click', () => {
  const playing = musicButton.getAttribute('aria-pressed') !== 'true';
  musicButton.setAttribute('aria-pressed', String(playing));
  musicButton.setAttribute('aria-label', playing ? 'Pausar música' : 'Reproducir música');
  document.querySelector('.record-player').classList.toggle('is-playing', playing);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (scene.classList.contains('is-invitation')) invitationBackButton.click();
  else if (scene.classList.contains('is-open')) setOpen(false);
});
