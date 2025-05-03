document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.nav.next');
  const prevButton = document.querySelector('.nav.prev');
  const playPauseButton = document.getElementById('playPause');
  
  let currentIndex = 0;
  let isPlaying = false; // Flaga czy muzyka gra

  // Tablica linków do plików audio
  const audioSources = [
    'sources/crush.mp3',
    'sources/eldest child.mp3',
    'sources/plaster.mp3',
    'sources/the light upon the surface that beckoned deep into the moment and the tiger stepped forth.mp3',
    'sources/meta.mp3',
    'sources/cliche.mp3',
    'sources/afraid.mp3',
    'sources/famous.mp3',
    'sources/hold on.mp3',
    'sources/wish.mp3',
    'sources/ouu.mp3',
    'sources/crush.mp3',
  ];

  // Utwór audio
  const audio = new Audio();
  audio.loop = true; // Muzyka zapętlona dla pojedynczego slajdu

  function updateCarousel(index) {
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * width}px)`;

    // Zmiana źródła audio bez automatycznego odtwarzania
    const newSrc = audioSources[index];
    if (audio.src !== newSrc) {
      audio.src = newSrc;
      if (isPlaying) {
        audio.play(); // Jeśli muzyka była włączona, odtwarzaj nowy utwór
      }
    }
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) currentIndex++;
    else currentIndex = 0;
    updateCarousel(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    else currentIndex = slides.length - 1;
    updateCarousel(currentIndex);
  });

  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPauseButton.textContent = '▶️'; // Zmień ikonę na play
    } else {
      // Jeśli klikamy Play i audio nie ma jeszcze ustawionego src (np. user kliknie przed przesunięciem slajdu)
      if (!audio.src) {
        audio.src = audioSources[currentIndex];
      }
      audio.play();
      playPauseButton.textContent = '⏸️'; // Zmień ikonę na pauzę
    }
    isPlaying = !isPlaying;
  });

  updateCarousel(currentIndex); // Ustaw pierwszy slajd bez odtwarzania muzyki
});

// Funkcja revealLetter zostaje bez zmian
function revealLetter() {
  document.querySelector('.reveal-button').style.display = 'none';
  document.querySelector('#letter').style.display = 'block';

  new Typed("#typed", {
    strings: [
      "Olu,<br><br> W dniu Twoich urodzin chciałbym Ci życzyć wszystkiego, co najpiękniejsze — niech każdy dzień będzie jak refren fav nutki, nie do zapomnienia.<br><br>Niech Twoje życie będzie jak beat Hollisa, najzajebistsze pod słońcem. Życzę Ci samych najlepszych momentów, ludzi, którzy będą mieli jak najlepszy vibe, i siły, która przebija nawet najmocniejszy drop.<br><br>Nigdy nie przestawaj być sobą, bo jesteś dokładnie taką osobą, którą świat potrzebuje.<br><br>Wszystkiego, co najlepsze raz jeszcze!<br><br>Z blessem i fartem,<br>Mati<p><2</p>"
    ],
    typeSpeed: 30,
    backSpeed: 0,
    startDelay: 200,
    smartBackspace: false,
    showCursor: true,
    cursorChar: "|",
    loop: false
  });
}
