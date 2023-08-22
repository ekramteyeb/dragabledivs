const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const middleLine = document.getElementById('middleLine');

let isDragging = false;
let startMouseX, startWidth1, startWidth2;

middleLine.addEventListener('mousedown', (e) => {
  isDragging = true;
  startMouseX = e.clientX;
  startWidth1 = parseInt(getComputedStyle(div1).width, 10);
  startWidth2 = parseInt(getComputedStyle(div2).width, 10);
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const offset = e.clientX - startMouseX;
  const newWidth1 = startWidth1 + offset;
  const newWidth2 = startWidth2 - offset;

  if (newWidth1 >= 0 && newWidth2 >= 0) {
    div1.style.width = `${newWidth1}px`;
    div2.style.width = `${newWidth2}px`;
    middleLine.style.left = `calc(${newWidth1}px - 3px)`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
