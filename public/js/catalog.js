// ============================================================
//  Q-ustom — Motor de renderizado del catálogo
//  Lee perfumesData (data.js) y construye las tarjetas con un bucle.
//
//  Filtros por página:
//    Inicio    → stock: true   (disponibilidad inmediata)
//    men.html  → category: 'men' o 'unisex'
//    girl.html → category: 'women' o 'unisex'
// ============================================================

(function () {
  const gallery = document.getElementById('perfume-gallery');
  if (!gallery || typeof perfumesData === 'undefined') return;

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  const filter = gallery.dataset.filter;
  let perfumes;

  if (filter === 'men') {
    perfumes = perfumesData.filter(p => p.category === 'men' || p.category === 'unisex');
  } else if (filter === 'women') {
    perfumes = perfumesData.filter(p => p.category === 'women' || p.category === 'unisex');
  } else {
    perfumes = perfumesData.filter(p => p.stock === true);
  }

  gallery.innerHTML = perfumes.map(p => `
    <div class="perfume-card"
      data-name="${esc(p.name)}"
      data-house="${esc(p.brand)}"
      data-notes="${esc(p.notes)}"
      data-description="${esc(p.description)}"
      data-category="${p.category}">
      <div class="card-img-wrapper">
        ${p.image
          ? `<img src="${p.image}" alt="${esc(p.name)}" loading="lazy">`
          : `<div class="perfume-img-placeholder"></div>`
        }
      </div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.brand)}</p>
      <span class="card-cta">Ver detalle →</span>
    </div>
  `).join('');
})();
