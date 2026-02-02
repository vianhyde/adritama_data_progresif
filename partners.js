// PARTNERS CONFIGURATION
// Cara pakai: Tambahkan nama file logo ke array ini
// File logo harus ada di folder: assets/images/partners/

const partners = [
    'amp.png',
    'belden.png',
    'belt.png',
    'boss.png',
    'dahua.png',
    'gree.png',
    'grundfos.png',
    'hik.png',
    'hoda.png',
    'legrand.png',
    'ls.png',
    'netviel.png',
    'onda.png',
    'penguin.png',
    'rucika.png',
    'ruijie.png',
    'sch.png',
    'supreme.png',
    'tateyama.png',
    'tdi.png',
    'toa.png',
    'tray.png'
];

// Fungsi untuk load partners
function loadPartners() {
    const track = document.getElementById('partnersTrack');
    if (!track) return;
    
    // Clear existing content
    track.innerHTML = '';
    
    // Load original logos
    partners.forEach((logo, index) => {
        const item = document.createElement('div');
        item.className = 'partner-item';
        item.innerHTML = `
            <div class="partner-logo">
                <img src="assets/images/partners/${logo}" alt="Partner ${index + 1}" onerror="this.src='assets/images/logo.png'">
            </div>
        `;
        track.appendChild(item);
    });
    
    // Duplicate for seamless loop
    partners.forEach((logo, index) => {
        const item = document.createElement('div');
        item.className = 'partner-item';
        item.innerHTML = `
            <div class="partner-logo">
                <img src="assets/images/partners/${logo}" alt="Partner ${index + 1}" onerror="this.src='assets/images/logo.png'">
            </div>
        `;
        track.appendChild(item);
    });
}

// Load when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPartners);
} else {
    loadPartners();
}
