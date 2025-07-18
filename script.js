// Efeito de partículas brilhando ao redor do coração pixelado
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  const heart = document.getElementById('pixel-heart');
  const rect = heart.getBoundingClientRect();
  const angle = Math.random() * 2 * Math.PI;
  const radius = 60 + Math.random() * 30;
  const x = rect.left + rect.width/2 + Math.cos(angle) * radius;
  const y = rect.top + rect.height/2 + Math.sin(angle) * radius;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1200);
}
setInterval(createSparkle, 200);

// CSS para partículas
const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
.sparkle {
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 60%, #ff3c3c 100%);
  opacity: 0.8;
  pointer-events: none;
  z-index: 12;
  animation: sparkleFade 1.2s linear forwards;
}
@keyframes sparkleFade {
  from { opacity: 0.8; transform: scale(1); }
  60% { opacity: 1; transform: scale(1.3); }
  to { opacity: 0; transform: scale(0.5); }
}
`;
document.head.appendChild(sparkleStyle);

// Animação de preenchimento do coração com emojis ❤️
window.addEventListener('DOMContentLoaded', () => {
  const heartPattern = [
    0,1,0,0,0,0,1,0,
    1,1,1,0,0,1,1,1,
    1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,0,
    0,0,1,1,1,1,0,0,
    0,0,0,1,1,0,0,0,
    0,0,0,0,0,0,0,0
  ];
  const emojiHeart = document.getElementById('emoji-heart');
  emojiHeart.innerHTML = '';
  for (let i = 0; i < 64; i++) {
    const cell = document.createElement('span');
    cell.className = 'emoji-heart-cell';
    if (heartPattern[i]) cell.textContent = '❤️';
    else cell.textContent = '';
    emojiHeart.appendChild(cell);
  }
  // Animação: revela os corações da esquerda para a direita, linha a linha
  const cells = Array.from(document.querySelectorAll('.emoji-heart-cell'));
  let idx = 0;
  function showNext() {
    if (idx >= cells.length) return;
    if (heartPattern[idx]) {
      cells[idx].classList.add('visible');
    }
    idx++;
    setTimeout(showNext, 60);
  }
  showNext();
});