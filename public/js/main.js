const menuToggle    = document.querySelector('.menu-toggle');
const navigation    = document.querySelector('.navigation');
const submenuToggle = document.querySelector('.menu-item-with-submenu');

// Hamburguesa: abre/cierra el menú móvil y resetea el submenú
menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.textContent = navigation.classList.contains('active') ? '✖' : '☰';
    if (!navigation.classList.contains('active')) {
        submenuToggle.classList.remove('active');
    }
});

// Submenú: solo se activa con clic en móvil (desktop lo maneja el hover de CSS)
submenuToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        submenuToggle.classList.toggle('active');
    }
});

// Cierra el menú al hacer clic en ítem del submenú (móvil)
document.querySelectorAll('.submenu a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navigation.classList.remove('active');
            submenuToggle.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});

// ── Modal de perfume ──
const modal = document.getElementById('perfumeModal');
if (modal) {
    const modalImg    = document.getElementById('modalImg');
    const modalName   = document.getElementById('modalName');
    const modalHouse  = document.getElementById('modalHouse');
    const modalNotes  = document.getElementById('modalNotes');
    const modalDesc   = document.getElementById('modalDesc');
    const modalGender = document.getElementById('modalGender');
    const modalClose  = document.querySelector('.modal-close');

    const genderLabel = { men: 'Caballero', women: 'Dama', unisex: 'Unisex' };
    const genderClass = { men: 'modal-gender--men', women: 'modal-gender--women', unisex: 'modal-gender--unisex' };

    function openModal(card) {
        const img = card.querySelector('img');
        modalImg.src           = img ? img.src : '';
        modalImg.alt           = img ? img.alt : card.dataset.name;
        modalName.textContent  = card.dataset.name;
        modalHouse.textContent = card.dataset.house;
        modalNotes.textContent = card.dataset.notes;
        modalDesc.textContent  = card.dataset.description;
        if (modalGender) {
            const cat = card.dataset.category || 'unisex';
            modalGender.textContent = genderLabel[cat] || cat;
            modalGender.className   = `modal-gender ${genderClass[cat] || ''}`;
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.perfume-card').forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
}
