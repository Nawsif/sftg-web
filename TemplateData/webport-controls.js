(() => {
  const container = document.getElementById('unity-container');
  const button = document.createElement('button');
  button.id = 'webport-fullscreen';
  button.textContent = 'Fullscreen';
  button.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await container.requestFullscreen();
    } catch (error) { console.warn('Fullscreen unavailable:', error.message); }
  });
  document.addEventListener('fullscreenchange', () => {
    button.textContent = document.fullscreenElement ? 'Exit fullscreen' : 'Fullscreen';
  });
  container.appendChild(button);
})();
