const gif = document.querySelector('.nezuko-img')
const audio = document.querySelector("audio");

const cloud = document.querySelector('.cloud')

gif.addEventListener('click', () => {
  // audio.setAttribute('autoplay', "true");
  audio.play()
  audio.volume = 0.2;
  gif.classList.toggle('animate')
})