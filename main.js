// Player data
const players = [
    {
        name: "MS Dhoni",
        role: "Captain / Wicket-keeper",
        Matches: "264",
        Average: "39.13",
        Runs: "5243",
        image: "57.jpg",
        stats: "Most successful IPL captain"
    },
    {
        name: "Ravindra Jadeja",
        role: "All-rounder",
        Matches: "240",
        Average: "27.40",
        Runs: "2959",
        image: "46.jpg",
        stats: "Key all-rounder"
    },
    {
        name: "Ruturaj Gaikwad",
        role: "Batsman",
        Matches: "66",
        Average: "41.75",
        Runs: "2380",
        image: "102.jpg",
        stats: "Orange Cap winner"
    },
    {
        name: "Matheesha Pathirana",
        role: "Bowler",
        Matches: "20",
        Wickets:"34",
        image: "1014.jpg",
        stats: "151 kmph Thunderbolt"
    }
    
];

// Gallery images
const galleryImages = [
    "https://img.jagranjosh.com/images/2023/May/3052023/ipl-2023-winner-chennai-super-kings-csk.webp",
    "https://m.media-amazon.com/images/I/81SaO6dcOZS.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/328700/328778.jpg",
    "https://images.firstpost.com/wp-content/uploads/2018/05/Final-5.jpg"
];

// Populate players
const playersContainer = document.getElementById('players-container');
players.forEach(player => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';
    playerCard.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="player-image">
        <div class="player-info">
            <h3 class="player-name">${player.name}</h3>
            <p>${player.role}</p>
            <p>${player.stats}</p>
        </div>
    `;
    playersContainer.appendChild(playerCard);
});

// Populate gallery
const galleryContainer = document.getElementById('gallery-container');
galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${image}" alt="CSK Gallery Image">`;
    galleryContainer.appendChild(galleryItem);
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});