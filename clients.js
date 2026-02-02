// CLIENTS CONFIGURATION
// Cara pakai: Tambahkan nama file logo ke array ini
// File logo harus ada di folder: assets/images/clients/

const clients = [
    'bbx.png',
    'bjb.png',
    'bsp.png',
    'ip.png',
    'pta.png',
    'sanbe.png',
    'smc.png',
    'garandiri.png',
    'sei.png',
    'marvee.png'
];

// Fungsi untuk load clients
function loadClients() {
    const track = document.getElementById('clientsTrack');
    if (!track) return;
    
    // Clear existing content
    track.innerHTML = '';
    
    // Load original logos
    clients.forEach((logo, index) => {
        const item = document.createElement('div');
        item.className = 'client-item';
        item.innerHTML = `
            <div class="client-logo">
                <img src="assets/images/clients/${logo}" alt="Client ${index + 1}" onerror="this.src='assets/images/logo.png'">
            </div>
        `;
        track.appendChild(item);
    });
    
    // Duplicate for seamless loop
    clients.forEach((logo, index) => {
        const item = document.createElement('div');
        item.className = 'client-item';
        item.innerHTML = `
            <div class="client-logo">
                <img src="assets/images/clients/${logo}" alt="Client ${index + 1}" onerror="this.src='assets/images/logo.png'">
            </div>
        `;
        track.appendChild(item);
    });
}

// Load when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadClients);
} else {
    loadClients();
}
