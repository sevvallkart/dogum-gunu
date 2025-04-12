function blowCandle() {
    document.getElementById('flame').style.display = 'none';
  
    setTimeout(() => {
      document.getElementById('wishMsg').style.opacity = 1;
    }, 1000);
  
    setTimeout(() => {
      startSlideshow();
    }, 2000);
  }
  
  const images = [
    'resimler/gl0.jpg',
    'resimler/gl1.jpg',
    'resimler/gl2.jpg',

  ];
  
  let currentImage = 0;
  
  function startSlideshow() {
    const slideshow = document.getElementById('slideshow');

    const img = document.createElement('img');
    slideshow.appendChild(img);

    img.src = images[currentImage];

    const interval = setInterval(() => {
        currentImage++;

        if (currentImage < images.length) {
            img.src = images[currentImage];
        } else {
            clearInterval(interval);

            // Fotoğrafı gizle
            img.style.display = 'none';

            document.getElementById('bigHeart').style.opacity = 1;
            document.getElementById('finalMsg').style.opacity = 1;
        }
    }, 3000);

    const music = new Audio('music/music.mp3');
    music.play();
}
