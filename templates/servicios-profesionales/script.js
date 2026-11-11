const motionButton = document.querySelector('.motion-control');
motionButton.addEventListener('click', () => {
  const paused = document.querySelector('.record-area').classList.toggle('paused');
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.innerHTML = paused ? 'Girar vinilo <span aria-hidden="true">▷</span>' : 'Pausar vinilo <span aria-hidden="true">Ⅱ</span>';
});
