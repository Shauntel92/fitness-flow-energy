// REPLACE each gumroadUrl with the direct URL of that published Gumroad product.
// Keep gumroadUrl empty for tracks that aren't on sale yet.
const tracks = [
  { slug:'fire-of-persepolis', title:'Fire of Persepolis', energy:'HIGH ENERGY', activity:'HIIT · Cardio', gumroadUrl:'' },
  { slug:'hypnotic-groove', title:'Hypnotic Groove', energy:'STEADY RHYTHM', activity:'Pilates · Barre', gumroadUrl:'' },
  { slug:'imperial-fire', title:'Imperial Fire', energy:'HIGH ENERGY', activity:'Cardio · Strength', gumroadUrl:'' },
  { slug:'saffron', title:'Saffron', energy:'UPBEAT', activity:'Dance · Movement', gumroadUrl:'' },
  { slug:'persian-energy', title:'Persian Energy', energy:'HIGH ENERGY', activity:'Cardio · Movement', gumroadUrl:'' },
  { slug:'night-race', title:'Night Race', energy:'DRIVING RHYTHM', activity:'Strength · Cardio', gumroadUrl:'' }
];
const grid = document.getElementById('track-grid');
tracks.forEach(t => {
  const card=document.createElement('article'); card.className='track-card';
  const link=t.gumroadUrl ? `<a class="btn btn-small" href="${t.gumroadUrl}" target="_blank" rel="noopener noreferrer">License track · $14.99 ↗</a>` : '<span class="coming-soon">Coming soon</span>';
  card.innerHTML=`<img src="assets/covers/${t.slug}.jpg" alt="${t.title} cover art" loading="lazy"><div class="track-details"><p class="track-category">${t.energy} <span>·</span> ${t.activity}</p><h3>${t.title}</h3><audio controls preload="none" aria-label="Listen to a preview of ${t.title}"><source src="assets/previews/${t.slug}.mp3" type="audio/mpeg">Your browser does not support audio playback.</audio><div class="track-action">${link}</div></div>`;
  grid.appendChild(card);
});
document.getElementById('year').textContent=new Date().getFullYear();
