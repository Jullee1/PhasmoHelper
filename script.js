
const ghostData = [
    {
        "name": "Spirit",
        "evidence": ["EMF 5", "Spirit Box", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "No unique strengths. Smudge sticks stop it hunting for 180s instead of 90s.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Wraith",
        "evidence": ["EMF 5", "Spirit Box", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Does not leave footprints when stepping in salt. Can teleport near players.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Phantom",
        "evidence": ["Spirit Box", "Ultraviolet", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Looking at it drains sanity faster. Disappears briefly when taking a photo.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Poltergeist",
        "evidence": ["Spirit Box", "Ultraviolet", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Can throw multiple objects at once, draining more sanity.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Banshee",
        "evidence": ["Ultraviolet", "Ghost Orbs", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Prefers a single target until they leave or die. Unique scream on parabolic mic.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Jinn",
        "evidence": ["EMF 5", "Ultraviolet", "Freezing Temps"],
        "speed": 2.5,
        "speedCategory": "Fast",
        "huntSanity": 50,
        "behavior": "Moves faster if far from players and breaker is on. Cannot turn breaker off.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "2.5 m/s when breaker is on and player is >3m away + LoS. Standard LoS acceleration applies otherwise"
        }
    },
    {
        "name": "Mare",
        "evidence": ["Spirit Box", "Ghost Orbs", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 60,
        "behavior": "Prefers darkness. More likely to turn off lights.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Revenant",
        "evidence": ["Ghost Orbs", "Ghost Writing", "Freezing Temps"],
        "speed": 3.0,
        "speedCategory": "Fast",
        "huntSanity": 50,
        "behavior": "Very slow when not chasing, but extremely fast when a player is visible.",
        "speedDetails": {
            "normal": "1.0 m/s when not seeing anyone",
            "special": "3.0 m/s when player is visible until sight is broken. NO LoS acceleration - speed is fixed"
        }
    },
    {
        "name": "Shade",
        "evidence": ["EMF 5", "Ghost Writing", "Freezing Temps"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 35,
        "behavior": "Shy ghost. Less likely to hunt with multiple players nearby.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Demon",
        "evidence": ["Ultraviolet", "Ghost Writing", "Freezing Temps"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 70,
        "behavior": "Can hunt at higher sanity than most ghosts. Smudge sticks reduce hunt for only 60s.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Yurei",
        "evidence": ["Ghost Orbs", "Freezing Temps", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Strong sanity drain ability. Can close doors fully.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Oni",
        "evidence": ["EMF 5", "Freezing Temps", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "More active when players nearby. Throws objects with more force.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Hantu",
        "evidence": ["Ghost Orbs", "Ultraviolet", "Freezing Temps"],
        "speed": 2.7,
        "speedCategory": "Fast",
        "huntSanity": 50,
        "behavior": "Faster in colder rooms, slower in warmer ones. Freezing breath visible during hunts.",
        "speedDetails": {
            "normal": "1.44 m/s in warm rooms",
            "special": "2.7 m/s in cold rooms. NO LoS acceleration - speed based on temperature only"
        }
    },
    {
        "name": "Yokai",
        "evidence": ["Spirit Box", "Ghost Orbs", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 80,
        "behavior": "Talking near it can trigger hunts. Limited hearing during hunts.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Goryo",
        "evidence": ["EMF 5", "Ultraviolet", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "DOTS only visible through camera when no players are near.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Myling",
        "evidence": ["EMF 5", "Ultraviolet", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Quieter footsteps during hunts. More frequent parabolic sounds.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Onryo",
        "evidence": ["Spirit Box", "Ghost Orbs", "Freezing Temps"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 60,
        "behavior": "Can hunt when extinguishing a flame. Treats extinguished fire as a hunt chance.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "The Twins",
        "evidence": ["EMF 5", "Spirit Box", "Freezing Temps"],
        "speed": 1.5,
        "speedCategory": "Slow",
        "huntSanity": 50,
        "behavior": "Two ghosts act independently. One moves slightly faster, the other slower.",
        "speedDetails": {
            "normal": "1.5 m/s (Main ghost)",
            "special": "1.9 m/s (Decoy ghost). Both have standard LoS acceleration from their base speeds"
        }
    },
    {
        "name": "Raiju",
        "evidence": ["EMF 5", "Ghost Orbs", "DOTS Projector"],
        "speed": 2.5,
        "speedCategory": "Fast",
        "huntSanity": 65,
        "behavior": "Moves faster near active electronics. Can disrupt electrical equipment.",
        "speedDetails": {
            "normal": "1.7 m/s when electronics are off",
            "special": "2.5 m/s when near active electronics. Standard LoS acceleration applies otherwise"
        }
    },
    {
        "name": "Obake",
        "evidence": ["EMF 5", "Ultraviolet", "Ghost Orbs"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Fingerprints have unique patterns and may disappear quicker. They have a chance of leaving fingerprints with 6 fingers instead of 5. Shapeshifts into other ghost models during hunt on some blinks.",
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "The Mimic",
        "evidence": ["Spirit Box", "Ultraviolet", "Freezing Temps", "Ghost Orbs (fake)"],
        "speed": 1.7,
        "speedCategory": "Medium",
        "huntSanity": 50,
        "behavior": "Mimics abilities and traits of other ghosts. Always shows fake Ghost Orbs.",
        "speedDetails": {
            "normal": "Varies based on mimicked ghost",
            "special": "Follows LoS rules of mimicked ghost: standard LoS if mimicking standard ghost, special rules if mimicking special ghost"
        }
    },
    {
        "name": "Moroi",
        "evidence": ["Spirit Box", "Ghost Writing", "Freezing Temps"],
        "speed": 2.25,
        "speedCategory": "Fast",
        "huntSanity": 50,
        "behavior": "Curses players through Spirit Box, increasing sanity drain. Moves faster at lower player sanity.",
        "speedDetails": {
            "normal": "1.5 m/s at high sanity",
            "special": "2.25 m/s at low sanity, up to 3.71 m/s with LoS acceleration (dangerous combination!)"
        }
    },
    {
        "name": "Deogen",
        "evidence": ["Spirit Box", "Ghost Writing", "DOTS Projector"],
        "speed": 3.0,
        "speedCategory": "Fast",
        "huntSanity": 40,
        "behavior": "Always knows player location. Moves very fast when far, extremely slow when close.",
        "speedDetails": {
            "normal": "3.0 m/s when player is far away (>6m)",
            "special": "0.4 m/s when close to player (<2.5m). NO LoS acceleration - speed based on distance only"
        }
    },
    {
        "name": "Thaye",
        "evidence": ["Ghost Orbs", "Ghost Writing", "DOTS Projector"],
        "speed": 2.75,
        "speedCategory": "Fast",
        "huntSanity": 75,
        "behavior": "Very aggressive when young, slows down and weakens with time in the area.",
        "speedDetails": {
            "normal": "2.75 m/s when young",
            "special": "1.0 m/s when aged. NO LoS acceleration - speed based on age only"
        }
    }
];

const ghostSearch = document.getElementById('ghostSearch');
const ghostResults = document.getElementById('ghostResults');
const allGhosts = document.getElementById('allGhosts');
const resultCount = document.getElementById('resultCount');
const clearFiltersBtn = document.getElementById('clearFilters');

const evidenceCheckboxes = document.querySelectorAll('.sidebar-evidence-grid input[type="checkbox"]');

const speedFilterBtns = document.querySelectorAll('.sidebar-speed-buttons .sidebar-speed-btn');

document.addEventListener('DOMContentLoaded', function() {
    displayAllGhosts();
    setupEventListeners();
});

function setupEventListeners() {
    ghostSearch.addEventListener('input', performSearch);
    
    evidenceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterGhosts);
    });
    
    speedFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleSpeedFilter(btn));
    });
    
    clearFiltersBtn.addEventListener('click', () => {
        ghostSearch.value = '';
        
        evidenceCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        speedFilterBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.sidebar-speed-buttons .sidebar-speed-btn[data-speed="all"]').classList.add('active');
        
        filterGhosts();
    });
}

function displayAllGhosts() {
    allGhosts.innerHTML = '';
    ghostData.forEach(ghost => {
        const ghostCard = createGhostCard(ghost);
        allGhosts.appendChild(ghostCard);
    });
}

function createGhostCard(ghost) {
    const card = document.createElement('div');
    card.className = 'ghost-card';
    
    let speedDisplay = '';
    if (ghost.speedDetails && ghost.speedDetails.special) {
        speedDisplay = `
            <div class="stat-item">
                <span class="stat-label">Speed:</span>
                <span class="stat-value">${ghost.speedDetails.normal}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Special:</span>
                <span class="stat-value">${ghost.speedDetails.special}</span>
            </div>`;
    } else {
        speedDisplay = `
            <div class="stat-item">
                <span class="stat-label">Speed:</span>
                <span class="stat-value">${ghost.speed} m/s</span>
            </div>`;
    }
    
    let speedCategory = '';
    let isVariableSpeed = false;
    
    const canBeSlow = ghost.speed < 1.7 || 
        (ghost.speedDetails && ghost.speedDetails.special && 
         (ghost.speedDetails.special.includes('1.0') || 
          ghost.speedDetails.special.includes('1.44') ||
          ghost.speedDetails.special.includes('0.4'))) ||
        (ghost.speedDetails && ghost.speedDetails.normal && 
         ghost.speedDetails.normal.includes('1.0'));
    
    const canBeFast = ghost.speed > 1.7 || 
        (ghost.speedDetails && ghost.speedDetails.special && 
         (ghost.speedDetails.special.includes('2.5') || 
          ghost.speedDetails.special.includes('2.7') ||
          ghost.speedDetails.special.includes('2.75') ||
          ghost.speedDetails.special.includes('3.0')));
    
    const canBeMedium = ghost.speed === 1.7 && 
        (!ghost.speedDetails || 
         !ghost.speedDetails.special || 
         (!ghost.speedDetails.special.includes('2.5') &&
          !ghost.speedDetails.special.includes('2.7') &&
          !ghost.speedDetails.special.includes('2.75') &&
          !ghost.speedDetails.special.includes('3.0')));
    
    if (canBeSlow && canBeFast) {
        speedCategory = 'variable';
        isVariableSpeed = true;
    } else if (canBeSlow) {
        speedCategory = 'slow';
    } else if (canBeFast) {
        speedCategory = 'fast';
    } else {
        speedCategory = 'medium';
    }
    
    card.innerHTML = `
        <div class="ghost-header">
            <h3 class="ghost-name">${ghost.name}</h3>
        </div>
        <div class="ghost-stats">
            ${speedDisplay}
            <div class="stat-item">
                <span class="stat-label">Speed Category:</span>
                ${isVariableSpeed ? 
                    `<span class="stat-value speed-variable">Variable (Slow/Fast)</span>` :
                    `<span class="stat-value speed-${speedCategory}">${speedCategory.charAt(0).toUpperCase() + speedCategory.slice(1)}</span>`
                }
            </div>
            <div class="stat-item">
                <span class="stat-label">Hunt Sanity:</span>
                <span class="stat-value">${ghost.huntSanity}</span>
            </div>
        </div>
        <div class="evidence-list">
            <h4>Evidence:</h4>
            <div class="evidence-tags">
                ${ghost.evidence.map(evidence => `<span class="evidence-tag">${evidence}</span>`).join('')}
            </div>
        </div>
        <div class="ghost-behavior">
            <h4>Behavior:</h4>
            <p>${ghost.behavior}</p>
        </div>
    `;
    
    return card;
}

function filterGhosts() {
    const selectedEvidence = Array.from(evidenceCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    if (selectedEvidence.length === 0) {
        ghostResults.innerHTML = '';
        resultCount.textContent = '0 ghosts found';
        updateSpeedFilterAvailability('all');
        updateEvidenceCheckboxAvailability([]);
        return;
    }
    
    const filteredGhosts = ghostData.filter(ghost => {
        return selectedEvidence.every(evidence => 
            ghost.evidence.includes(evidence)
        );
    });
    
    displayFilteredResults(filteredGhosts);
    
    updateSpeedFilterAvailability(filteredGhosts);
    
    updateEvidenceCheckboxAvailability(selectedEvidence);
}

function displayFilteredResults(ghosts) {
    ghostResults.innerHTML = '';
    
    if (ghosts.length === 0) {
        ghostResults.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 40px; color: #b8b8b8;">
                <h3>No ghosts match the selected evidence</h3>
                <p>Try selecting different evidence combinations</p>
            </div>
        `;
    } else {
        ghosts.forEach(ghost => {
            const ghostCard = createGhostCard(ghost);
            ghostCard.classList.add('highlighted');
            ghostResults.appendChild(ghostCard);
        });
    }
    
    resultCount.textContent = `${ghosts.length} ghost${ghosts.length !== 1 ? 's' : ''} found`;
}

function performSearch() {
    const searchTerm = ghostSearch.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Remove all highlighting when search is cleared
        const allGhostCards = allGhosts.querySelectorAll('.ghost-card');
        allGhostCards.forEach(card => {
            card.classList.remove('highlighted');
        });
        
        filterGhosts();
        return;
    }
    
    const searchResults = ghostData.filter(ghost => 
        ghost.name.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredResults(searchResults);
    
    highlightSearchResults(searchTerm);
}

function highlightSearchResults(searchTerm) {
    const allGhostCards = allGhosts.querySelectorAll('.ghost-card');
    
    allGhostCards.forEach(card => {
        const ghostName = card.querySelector('.ghost-name').textContent.toLowerCase();
        
        const isMatch = ghostName.includes(searchTerm);
        
        if (isMatch) {
            card.classList.add('highlighted');
        } else {
            card.classList.remove('highlighted');
        }
    });
}

function handleSpeedFilter(clickedBtn) {
    const selectedSpeed = clickedBtn.dataset.speed;
    
    speedFilterBtns.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    
    applySpeedFilter(selectedSpeed);
}

function applySpeedFilter(speed) {
    const allGhostCards = allGhosts.querySelectorAll('.ghost-card');
    
    allGhostCards.forEach(card => {
        const ghostName = card.querySelector('.ghost-name').textContent;
        const ghost = ghostData.find(g => g.name === ghostName);
        let shouldShow = true;
        
        if (speed !== 'all' && ghost) {
            if (speed === 'slow') {
                shouldShow = ghost.speed < 1.7 || 
                            (ghost.speedDetails && ghost.speedDetails.special && 
                             (ghost.speedDetails.special.includes('1.0') || 
                              ghost.speedDetails.special.includes('1.44') ||
                              ghost.speedDetails.special.includes('0.4'))) ||
                            (ghost.speedDetails && ghost.speedDetails.normal && 
                             ghost.speedDetails.normal.includes('1.0'));
            } else if (speed === 'medium') {
                shouldShow = ghost.speed === 1.7 && 
                            (!ghost.speedDetails || 
                             !ghost.speedDetails.special || 
                             (!ghost.speedDetails.special.includes('2.5') &&
                              !ghost.speedDetails.special.includes('2.7') &&
                              !ghost.speedDetails.special.includes('2.75') &&
                              !ghost.speedDetails.special.includes('3.0')));
            } else if (speed === 'fast') {
                shouldShow = ghost.speed > 1.7 || 
                            (ghost.speedDetails && ghost.speedDetails.special && 
                             (ghost.speedDetails.special.includes('2.5') || 
                              ghost.speedDetails.special.includes('2.7') ||
                              ghost.speedDetails.special.includes('2.75') ||
                              ghost.speedDetails.special.includes('3.0')));
            }
        }
        
        if (shouldShow) {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
    
    if (hasActiveEvidenceFilters()) {
        filterGhosts();
    }
}

function hasActiveEvidenceFilters() {
    return Array.from(evidenceCheckboxes).some(checkbox => checkbox.checked);
}

function updateSpeedFilterAvailability(filteredGhosts) {
    const speedCategories = {
        slow: false,
        medium: false,
        fast: false
    };
    
    const ghosts = Array.isArray(filteredGhosts) ? filteredGhosts : ghostData;
    
    ghosts.forEach(ghost => {
        if (ghost.speed < 1.7 || 
            (ghost.speedDetails && ghost.speedDetails.special && 
             (ghost.speedDetails.special.includes('1.0') || 
              ghost.speedDetails.special.includes('1.44') ||
              ghost.speedDetails.special.includes('0.4'))) ||
            (ghost.speedDetails && ghost.speedDetails.normal && 
             ghost.speedDetails.normal.includes('1.0'))) {
            speedCategories.slow = true;
        }
        
        if (ghost.speed === 1.7 && 
            (!ghost.speedDetails || 
             !ghost.speedDetails.special || 
             (!ghost.speedDetails.special.includes('2.5') &&
              !ghost.speedDetails.special.includes('2.7') &&
              !ghost.speedDetails.special.includes('2.75') &&
              !ghost.speedDetails.special.includes('3.0')))) {
            speedCategories.medium = true;
        }
        
        if (ghost.speed > 1.7 || 
            (ghost.speedDetails && ghost.speedDetails.special && 
             (ghost.speedDetails.special.includes('2.5') || 
              ghost.speedDetails.special.includes('2.7') ||
              ghost.speedDetails.special.includes('2.75') ||
              ghost.speedDetails.special.includes('3.0')))) {
            speedCategories.fast = true;
        }
    });
    
    speedFilterBtns.forEach(btn => {
        const speedType = btn.dataset.speed;
        if (speedType === 'all') {
            btn.disabled = false;
            btn.style.opacity = '1';
        } else if (speedCategories[speedType]) {
            btn.disabled = false;
            btn.style.opacity = '1';
        } else {
            btn.disabled = true;
            btn.style.opacity = '0.4';
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                document.querySelector('.sidebar-speed-buttons .sidebar-speed-btn[data-speed="all"]').classList.add('active');
                applySpeedFilter('all');
            }
        }
    });
}

function updateEvidenceCheckboxAvailability(selectedEvidence) {
    evidenceCheckboxes.forEach(checkbox => {
        const evidenceType = checkbox.value;
        
        if (selectedEvidence.length === 0) {
            checkbox.disabled = false;
            checkbox.parentElement.style.opacity = '1';
            checkbox.parentElement.style.cursor = 'pointer';
        } else {
            const canCombine = ghostData.some(ghost => {
                const requiredEvidence = [...selectedEvidence, evidenceType];
                return requiredEvidence.every(evidence => 
                    ghost.evidence.includes(evidence)
                );
            });
            
            if (canCombine) {
                checkbox.disabled = false;
                checkbox.parentElement.style.opacity = '1';
                checkbox.parentElement.style.cursor = 'pointer';
            } else {
                checkbox.disabled = true;
                checkbox.parentElement.style.opacity = '0.4';
                checkbox.parentElement.style.cursor = 'not-allowed';
            }
        }
    });
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('.ghost-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

let timerInterval = null;
let timeRemaining = 180;
let isTimerRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const timerStatus = document.getElementById('timerStatus');
const timerStart = document.getElementById('timerStart');
const timerReset = document.getElementById('timerReset');
const nextMilestone = document.getElementById('nextMilestone');
const milestone60 = document.getElementById('milestone60');
const milestone90 = document.getElementById('milestone90');
const milestone180 = document.getElementById('milestone180');

document.addEventListener('DOMContentLoaded', function() {
    setupSmudgeTimer();
});

function setupSmudgeTimer() {
    timerStart.addEventListener('click', toggleTimer);
    timerReset.addEventListener('click', resetTimer);
    
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && (e.target === document.body || e.target === timerStart)) {
            e.preventDefault();
            toggleTimer();
        } else if (e.code === 'KeyR' && (e.target === document.body || e.target === timerReset)) {
            e.preventDefault();
            resetTimer();
        }
    });
    
    updateTimerDisplay();
    updateTimerState();
}

function toggleTimer() {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    if (timeRemaining <= 0) {
        resetTimer();
        return;
    }
    
    isTimerRunning = true;
    timerStart.textContent = 'Stop';
    timerStart.classList.add('active');
    timerStatus.textContent = 'Timer running...';
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        updateTimerState();
        
        if (timeRemaining <= 0) {
            stopTimer();
            timerStatus.textContent = 'Timer finished!';
        }
    }, 1000);
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    timerStart.textContent = 'Start';
    timerStart.classList.remove('active');
    
    if (timeRemaining > 0) {
        timerStatus.textContent = 'Timer paused';
    }
}

function resetTimer() {
    stopTimer();
    timeRemaining = 180;
    timerStatus.textContent = 'Ready to start';
    updateTimerDisplay();
    updateTimerState();
    resetMilestones();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function updateTimerState() {
    const timerContainer = document.querySelector('.timer-display');
    const elapsedTime = 180 - timeRemaining;
    
    timerContainer.classList.remove('timer-safe', 'timer-warning', 'timer-danger');
    
    if (elapsedTime < 60) {
        timerContainer.classList.add('timer-safe');
    } else if (elapsedTime < 90) {
        timerContainer.classList.add('timer-warning');
    } else {
        timerContainer.classList.add('timer-danger');
    }
    
    updateMilestones(elapsedTime);
    
    updateNextMilestone(elapsedTime);
}

function updateMilestones(elapsedTime) {
    milestone60.classList.remove('reached', 'active');
    milestone90.classList.remove('reached', 'active');
    milestone180.classList.remove('reached', 'active');
    
    if (elapsedTime >= 180) {
        milestone60.classList.add('reached');
        milestone90.classList.add('reached');
        milestone180.classList.add('reached');
    } else if (elapsedTime >= 90) {
        milestone60.classList.add('reached');
        milestone90.classList.add('reached');
        milestone180.classList.add('active');
    } else if (elapsedTime >= 60) {
        milestone60.classList.add('reached');
        milestone90.classList.add('active');
    } else {
        milestone60.classList.add('active');
    }
}

function updateNextMilestone(elapsedTime) {
    if (elapsedTime >= 180) {
        nextMilestone.textContent = 'ALL GHOSTS CAN HUNT!';
        nextMilestone.style.color = '#ef4444';
        nextMilestone.style.fontWeight = '700';
    } else if (elapsedTime >= 90) {
        const timeToSpirit = 180 - elapsedTime;
        nextMilestone.textContent = `Spirit in ${timeToSpirit}s`;
        nextMilestone.style.color = '#ef4444';
        nextMilestone.style.fontWeight = '600';
    } else if (elapsedTime >= 60) {
        const timeToAll = 90 - elapsedTime;
        nextMilestone.textContent = `All except Spirit in ${timeToAll}s`;
        nextMilestone.style.color = '#f59e0b';
        nextMilestone.style.fontWeight = '600';
    } else {
        const timeToDemon = 60 - elapsedTime;
        nextMilestone.textContent = `Demon in ${timeToDemon}s`;
        nextMilestone.style.color = '#22c55e';
        nextMilestone.style.fontWeight = '500';
    }
}

function resetMilestones() {
    milestone60.classList.remove('reached', 'active');
    milestone90.classList.remove('reached', 'active');
    milestone180.classList.remove('reached', 'active');
    
    nextMilestone.textContent = 'Demon in 60s';
    nextMilestone.style.color = '#ffffff';
    nextMilestone.style.fontWeight = '500';
}
