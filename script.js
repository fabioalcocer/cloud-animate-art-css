const gif = document.querySelector('.nezuko-img')
const audio = document.querySelector("audio");

gif.addEventListener('click', () => {
  // audio.setAttribute('autoplay', "true");
  audio.play()
  audio.volume = 0.2;
  gif.classList.add('jump')
})