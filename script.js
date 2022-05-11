const gif = document.querySelector('.nezuko-img')
const audio = document.querySelector("audio");
audio.volume = 0.25;

gif.addEventListener('click', () => {
  // audio.setAttribute('autoplay', "true");
  audio.play()
  gif.classList.add('jump')
})