/*
  Archivo LEGO Star Wars 1999–2002: render del catálogo, filtros y ficha técnica.
  Depende de sets-data.js (SW_SETS, SW_ERAS, swFindSet).
*/
'use strict';

(function () {
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function src(set, kind) {
    if (kind === 'box') return 'assets/img/sets/' + set.num + '-box.png';
    if (kind === 'alt') return 'assets/img/sets/' + set.num + '-alt.jpg';
    return 'assets/img/sets/' + set.num + '.png';
  }

  function isCutout(set, kind) {
    return (SW_CUTOUTS[kind] || []).indexOf(set.num) >= 0;
  }

  // Imagen principal: el recorte limpio si existe; si no, la foto del modelo
  function mainKind(set) {
    if (isCutout(set, 'png')) return 'png';
    if (isCutout(set, 'alt')) return 'alt';
    return 'png';
  }

  function img(set) {
    return src(set, mainKind(set));
  }

  // Recortes sobre blanco se funden con el panel; fotos de caja o escena llevan marco
  function imgClass(set, kind) {
    return isCutout(set, kind || mainKind(set)) ? 'sw-blend' : 'sw-photo';
  }

  function eraBadge(set) {
    return '<span class="sw-era sw-era--' + set.era + '">' + esc(SW_ERAS[set.era].short) + '</span>';
  }

  function figLabel(n) {
    return n === 1 ? 'minifig' : 'minifigs';
  }

  function card(set) {
    return '' +
      '<article class="sw-card">' +
        '<a href="shop-single.html?set=' + set.num + '" aria-label="' + esc(set.num + ' ' + set.name) + '">' +
          '<div class="sw-panel"><div class="sw-panel__inner">' +
            '<div class="sw-card__head">' +
              '<div><span class="sw-num">' + set.num + '</span>' +
              '<h3 class="sw-card__title">' + esc(set.name) + '</h3>' +
              (set.es !== set.name ? '<p class="sw-card__es">' + esc(set.es) + '</p>' : '') + '</div>' +
              '<span class="sw-age" title="Edad recomendada">' + esc(set.ages) + '</span>' +
            '</div>' +
            '<div class="sw-card__img"><img class="' + imgClass(set) + '" src="' + img(set) + '" alt="" loading="lazy" width="500" height="500"></div>' +
            '<div class="sw-card__meta">' +
              '<span class="sw-chip"><b>' + set.pieces + '</b> piezas</span>' +
              '<span class="sw-chip"><b>' + set.minifigs.length + '</b> ' + figLabel(set.minifigs.length) + '</span>' +
              '<span class="sw-card__year">' + set.year + '</span>' +
            '</div>' +
            '<div class="mt-2">' + eraBadge(set) + '</div>' +
          '</div></div>' +
        '</a>' +
      '</article>';
  }

  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* ---------- Portada ---------- */
  function initHome() {
    var featured = $('#sw-featured');
    if (!featured) return;

    var picks = ['7140', '7190', '7151', '7180', '7161', '7163'];
    featured.innerHTML = picks.map(function (n) { return card(swFindSet(n)); }).join('');

    var strip = $('#sw-strip');
    if (strip) {
      strip.innerHTML = ['7104', '7111', '7115', '7124', '7127', '7134', '7143', '7166'].map(function (n) {
        var s = swFindSet(n);
        return '<a href="shop-single.html?set=' + s.num + '" title="' + esc(s.num + ' ' + s.name) + '">' +
          '<div class="sw-panel"><div class="sw-panel__inner">' +
          '<img class="' + imgClass(s) + '" src="' + img(s) + '" alt="' + esc(s.name) + '" width="500" height="500">' +
          '<span>' + s.num + '</span></div></div></a>';
      }).join('');
    }

    var pieces = SW_SETS.reduce(function (t, s) { return t + s.pieces; }, 0);
    var figs = SW_SETS.reduce(function (t, s) { return t + s.minifigs.length; }, 0);
    setText('#stat-sets', SW_SETS.length);
    setText('#stat-pieces', String(pieces).replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
    setText('#stat-figs', figs);

    $all('[data-era-count]').forEach(function (el) {
      var era = el.getAttribute('data-era-count');
      var n = SW_SETS.filter(function (s) { return s.era === era; }).length;
      el.textContent = n + ' sets en el archivo';
    });
    $all('[data-year-count]').forEach(function (el) {
      var y = +el.getAttribute('data-year-count');
      var n = SW_SETS.filter(function (s) { return s.year === y; }).length;
      el.textContent = 'Ver los ' + n + ' sets de ' + y;
    });
  }

  function setText(sel, v) {
    var el = $(sel);
    if (el) el.textContent = v;
  }

  /* ---------- Catálogo ---------- */
  var PIECE_RANGES = {
    s: { label: 'Menos de 100', min: 0, max: 99 },
    m: { label: '100 a 299', min: 100, max: 299 },
    l: { label: '300 o más', min: 300, max: Infinity }
  };

  function initShop() {
    var grid = $('#sw-grid');
    if (!grid) return;
    var form = $('#sw-filters');
    var params = new URLSearchParams(location.search);

    // Contadores junto a cada opción
    $all('[data-count-era]').forEach(function (el) {
      var e = el.getAttribute('data-count-era');
      el.textContent = SW_SETS.filter(function (s) { return s.era === e; }).length;
    });
    $all('[data-count-range]').forEach(function (el) {
      var r = PIECE_RANGES[el.getAttribute('data-count-range')];
      el.textContent = SW_SETS.filter(function (s) { return s.pieces >= r.min && s.pieces <= r.max; }).length;
    });

    // Estado inicial desde la URL (enlaces de la portada y del buscador)
    if (params.get('q')) form.q.value = params.get('q');
    (params.get('era') || '').split(',').forEach(function (e) {
      var box = form.querySelector('input[name="era"][value="' + e + '"]');
      if (box) box.checked = true;
    });
    (params.get('year') || '').split(',').forEach(function (y) {
      var box = form.querySelector('input[name="year"][value="' + y + '"]');
      if (box) box.checked = true;
    });
    if (params.get('pieces')) {
      var r = form.querySelector('input[name="pieces"][value="' + params.get('pieces') + '"]');
      if (r) r.checked = true;
    }
    if (params.get('sort')) $('#sw-sort').value = params.get('sort');

    function checked(name) {
      return $all('#sw-filters input[name="' + name + '"]:checked').map(function (i) { return i.value; });
    }

    function render() {
      var q = form.q.value.trim().toLowerCase();
      var eras = checked('era');
      var years = checked('year');
      var range = PIECE_RANGES[(checked('pieces')[0]) || ''] || null;
      var sort = $('#sw-sort').value;

      var list = SW_SETS.filter(function (s) {
        if (eras.length && eras.indexOf(s.era) < 0) return false;
        if (years.length && years.indexOf(String(s.year)) < 0) return false;
        if (range && (s.pieces < range.min || s.pieces > range.max)) return false;
        if (q) {
          var hay = (s.num + ' ' + s.name + ' ' + s.es + ' ' + s.film + ' ' + s.minifigs.join(' ')).toLowerCase();
          if (hay.indexOf(q) < 0) return false;
        }
        return true;
      });

      list.sort(function (a, b) {
        if (sort === 'pieces-desc') return b.pieces - a.pieces;
        if (sort === 'pieces-asc') return a.pieces - b.pieces;
        if (sort === 'name') return a.name.localeCompare(b.name);
        return a.year - b.year || a.num.localeCompare(b.num);
      });

      $('#sw-count').innerHTML = '<b>' + list.length + '</b> de ' + SW_SETS.length + ' sets';
      grid.innerHTML = list.length ? list.map(card).join('') :
        '<div class="sw-empty"><strong>Ningún set coincide</strong>Quita algún filtro o busca por número de set, por ejemplo 7144.</div>';

      // Mantener la URL compartible
      var p = new URLSearchParams();
      if (q) p.set('q', form.q.value.trim());
      if (eras.length) p.set('era', eras.join(','));
      if (years.length) p.set('year', years.join(','));
      if (checked('pieces')[0]) p.set('pieces', checked('pieces')[0]);
      if (sort !== 'year') p.set('sort', sort);
      var qs = p.toString();
      history.replaceState(null, '', qs ? '?' + qs : location.pathname);
    }

    form.addEventListener('input', render);
    form.addEventListener('change', render);
    form.addEventListener('submit', function (e) { e.preventDefault(); render(); });
    $('#sw-sort').addEventListener('change', render);
    $('#sw-reset').addEventListener('click', function () {
      form.reset();
      $('#sw-sort').value = 'year';
      render();
    });
    render();
  }

  /* ---------- Ficha técnica ---------- */
  function initSingle() {
    var root = $('#sw-single');
    if (!root) return;
    var num = new URLSearchParams(location.search).get('set') || '7144';
    var set = swFindSet(num);

    if (!set) {
      root.innerHTML = '<div class="sw-notfound"><h1>Set ' + esc(num) + ' no encontrado</h1>' +
        '<p>El archivo solo cubre sets de 1999 a 2002. Busca otro número en el catálogo.</p>' +
        '<a class="sw-btn" href="shop.html">Ir al catálogo</a></div>';
      return;
    }

    document.title = set.num + ' ' + set.name + ' | Archivo LEGO Star Wars';
    var era = SW_ERAS[set.era];
    var idx = SW_SETS.indexOf(set);
    var prev = SW_SETS[(idx - 1 + SW_SETS.length) % SW_SETS.length];
    var next = SW_SETS[(idx + 1) % SW_SETS.length];

    var main = mainKind(set);
    var other = main === 'png' ? 'alt' : 'png';
    var shots = [
      { src: src(set, main), cap: isCutout(set, main) ? 'Modelo montado' : 'Foto promocional del set', blend: isCutout(set, main) },
      { src: src(set, 'box'), cap: 'Caja original de ' + set.year, blend: false },
      { src: src(set, other), cap: other === 'alt' ? 'Contenido completo del set' : 'Foto de catálogo', blend: isCutout(set, other) }
    ];

    var figs = set.minifigs.length ?
      '<ul class="sw-figs">' + set.minifigs.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' :
      '<p class="sw-figs__empty">Este set no incluye minifiguras: el propio caza droide es la figura.</p>';

    var notes = set.notes.length ?
      '<ul class="sw-notes">' + set.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' :
      '<p>No hay curiosidades registradas para este set todavía. <a href="contact.html?set=' + set.num + '">Aporta un dato</a>.</p>';

    root.innerHTML = '' +
      '<nav class="sw-crumbs" aria-label="Ruta"><a href="index.html">Inicio</a> / <a href="shop.html">Catálogo</a> / ' +
        '<a href="shop.html?era=' + set.era + '">' + esc(era.name) + '</a> / ' + set.num + '</nav>' +

      '<div class="sw-folder">' +
        '<section class="sw-gallery sw-panel" aria-label="Galería de fotos"><div class="sw-panel__inner">' +
          '<div class="sw-gallery__main"><img id="sw-main-img" class="' + (shots[0].blend ? 'sw-blend' : 'sw-photo') + '" src="' + shots[0].src + '" alt="' + esc(set.name + ', ' + shots[0].cap) + '"></div>' +
          '<p class="sw-gallery__caption" id="sw-main-cap">' + esc(shots[0].cap) + '</p>' +
          '<div class="sw-gallery__thumbs">' + shots.map(function (s, i) {
            return '<button type="button" aria-pressed="' + (i === 0) + '" data-src="' + s.src + '" data-cap="' + esc(s.cap) + '" data-blend="' + s.blend + '">' +
              '<img src="' + s.src + '" alt="' + esc(s.cap) + '"></button>';
          }).join('') + '</div>' +
        '</div></section>' +

        '<section class="sw-spec sw-panel"><div class="sw-panel__inner">' +
          '<div class="d-flex justify-content-between align-items-start gap-2">' +
            '<span class="sw-num" style="font-size:1.5rem">' + set.num + '</span>' +
            '<span class="sw-age" title="Edad recomendada">' + esc(set.ages) + '</span>' +
          '</div>' +
          '<h1>' + esc(set.name) + '</h1>' +
          (set.es !== set.name ? '<p class="sw-spec__es">' + esc(set.es) + '</p>' : '') +
          eraBadge(set) +
          '<p class="sw-spec__summary">' + esc(set.summary) + '</p>' +
          '<dl>' +
            '<dt>Año de lanzamiento</dt><dd>' + set.year + '</dd>' +
            '<dt>Era</dt><dd>' + esc(era.name) + '</dd>' +
            '<dt>Película</dt><dd>' + esc(set.film) + '</dd>' +
            '<dt>Piezas</dt><dd>' + set.pieces + '</dd>' +
            '<dt>Minifiguras</dt><dd>' + set.minifigs.length + '</dd>' +
            '<dt>Edad en la caja</dt><dd>' + esc(set.ages) + ' años</dd>' +
            '<dt>PVP original (EE. UU.)</dt><dd>$' + esc(set.rrp) + '</dd>' +
          '</dl>' +
          '<div class="sw-spec__nav">' +
            '<a href="shop-single.html?set=' + prev.num + '">&larr; ' + prev.num + ' ' + esc(prev.name) + '</a>' +
            '<a href="shop-single.html?set=' + next.num + '">' + next.num + ' ' + esc(next.name) + ' &rarr;</a>' +
          '</div>' +
        '</div></section>' +
      '</div>' +

      '<div class="sw-brochure">' +
        window98('Minifiguras incluidas', 'minifigs', set, '<h3>' + set.minifigs.length + ' ' + figLabel(set.minifigs.length) + ' en la caja</h3>' + figs) +
        window98('Detalles del set', 'detalles', set, '<h3>Lo que hay que saber</h3>' + notes) +
      '</div>';

    // Galería interactiva
    var mainImg = $('#sw-main-img');
    $all('.sw-gallery__thumbs button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        mainImg.src = btn.getAttribute('data-src');
        mainImg.alt = set.name + ', ' + btn.getAttribute('data-cap');
        var cut = btn.getAttribute('data-blend') === 'true';
        mainImg.classList.toggle('sw-blend', cut);
        mainImg.classList.toggle('sw-photo', !cut);
        $('#sw-main-cap').textContent = btn.getAttribute('data-cap');
        $all('.sw-gallery__thumbs button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      });
    });

    // Sets relacionados de la misma era
    var related = $('#sw-related');
    if (related) {
      related.innerHTML = SW_SETS.filter(function (s) { return s.era === set.era && s !== set; })
        .slice(0, 4).map(card).join('');
    }
  }

  function window98(title, slug, set, body) {
    return '<section class="sw-window" aria-label="' + esc(title) + '">' +
      '<div class="sw-window__title"><span>LEGO.com Star Wars - ' + esc(title) + ' - Microsoft Internet Explorer</span>' +
        '<span class="sw-window__btns" aria-hidden="true"><i>_</i><i>&#9633;</i><i>&times;</i></span></div>' +
      '<div class="sw-window__bar" aria-hidden="true">Dirección <span class="sw-window__addr">http://www.lego.com/starwars/' + set.num + '/' + slug + '.asp</span></div>' +
      '<div class="sw-window__body">' + body + '</div>' +
      '<div class="sw-window__status" aria-hidden="true">Listo</div>' +
    '</section>';
  }

  /* ---------- Formulario de contribución ---------- */
  function initContact() {
    var form = $('#sw-contrib');
    if (!form) return;
    var pre = new URLSearchParams(location.search).get('set');
    var select = form.querySelector('select[name="set"]');
    select.innerHTML += SW_SETS.slice().sort(function (a, b) { return a.num.localeCompare(b.num); }).map(function (s) {
      return '<option value="' + s.num + '"' + (s.num === pre ? ' selected' : '') + '>' + s.num + ' ' + esc(s.name) + '</option>';
    }).join('');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var subject = 'Archivo LEGO SW: ' + (select.value || 'set nuevo') + ' (' + form.tipo.value + ')';
      var body = form.mensaje.value + '\n\nFuente: ' + form.fuente.value + '\nFirma: ' + form.nombre.value;
      location.href = 'mailto:archivo@legoswretro.org?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      $('#sw-contrib-status').textContent = 'Se abrió tu programa de correo con la corrección lista para enviar.';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHome();
    initShop();
    initSingle();
    initContact();
  });
})();
