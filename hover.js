console.log('test')

const container = document.getElementById('container');
const content1 = document.getElementById('before');
const content2 = document.getElementById('during');
const content3 = document.getElementById('after');
const lectureInfo = document.getElementById('lecture-info');
const wholePage = document.getElementById('body');

container.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;

  if (mouseX < window.innerWidth / 3) {
    content1.classList.add('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    lectureInfo.classList.remove('lecture-info-opacity-during');
    lectureInfo.classList.remove('lecture-info-opacity-after');
    body.style.backgroundColor = "white";
  } else if (mouseX < (2 * window.innerWidth) / 3) {
    content1.classList.remove('active');
    content2.classList.add('active');
    content3.classList.remove('active');
    lectureInfo.classList.add('lecture-info-opacity-during');
    lectureInfo.classList.remove('lecture-info-opacity-after');
    body.style.backgroundColor = "grey";
  } else {
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.add('active');
    lectureInfo.classList.add('lecture-info-opacity-after');
    lectureInfo.classList.remove('lecture-info-opacity-during');
    body.style.backgroundColor = "black";
  }
});