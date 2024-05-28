let offset = 0;
const sliderLine = document.querySelector('.blocks-line');

document.querySelector('.arrow-next').addEventListener('click', function () {
  offset = offset + 100;
  if (offset > 200) {
    offset = 0;
  }
  sliderLine.style.left = -offset + '%';
});

document.querySelector('.arrow-prev').addEventListener('click', function () {
  offset = offset - 100;
  if (offset < 0) {
    offset = 200;
  }
  sliderLine.style.left = -offset + '%';
});
