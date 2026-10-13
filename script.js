// One place to update the music collection. All tracks link to your YouTube channel.
// To link individual videos later, replace the youtubeUrl for that track.
const youtubeChannel = 'https://www.youtube.com/@fitness_flow_energy';
const tracks = [
  { slug:'fire-of-persepolis', title:'Fire of Persepolis', energy:'HIGH ENERGY', activity:'HIIT · Cardio', youtubeUrl:youtubeChannel },
  { slug:'hypnotic-groove', title:'Hypnotic Groove', energy:'STEADY RHYTHM', activity:'Pilates · Barre', youtubeUrl:youtubeChannel },
  { slug:'imperial-fire', title:'Imperial Fire', energy:'HIGH ENERGY', activity:'Cardio · Strength', youtubeUrl:youtubeChannel },
  { slug:'saffron', title:'Saffron', energy:'UPBEAT', activity:'Dance · Movement', youtubeUrl:youtubeChannel },
  { slug:'persian-energy', title:'Persian Energy', energy:'HIGH ENERGY', activity:'Cardio · Movement', youtubeUrl:youtubeChannel },
  { slug:'night-race', title:'Night Race', energy:'DRIVING RHYTHM', activity:'Strength · Cardio', youtubeUrl:youtubeChannel }
];
const grid = document.getElementById('track-grid');
tracks.forEach(t => {
  const card = document.createElement('article');
  card.className = 'track-card';
  card.innerHTML = `<img src="assets/covers/${t.slug}.jpg" alt="${t.title} cover art" loading="lazy"><div class="track-details"><p class="track-category">${t.energy} <span>·</span> ${t.activity}</p><h3>${t.title}</h3><div class="track-action"><a class="btn btn-small" href="${t.youtubeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Listen to ${t.title} on YouTube">Listen on YouTube ↗</a></div></div>`;
  grid.appendChild(card);
});
document.getElementById('year').textContent = new Date().getFullYear();
