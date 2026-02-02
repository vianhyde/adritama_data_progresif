// PARTNERS CONFIGURATION
// Cara pakai: Tambahkan nama file logo ke array ini
// File logo harus ada di folder: assets/images/partners/

const partners = [
    'partner-1.png',
    'partner-2.png',
    'partner-3.png',
    'partner-4.png',
    'partner-5.png',
    'partner-6.png',
    'partner-7.png',
    'partner-8.png',
    'partner-9.png',
    'partner-10.png'
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
