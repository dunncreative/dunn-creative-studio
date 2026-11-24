{
  /* Placeholder art: fictional brands drawn in SVG so color comes from "work", not the UI. */
  const g = (id, a, b) => `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="600" fill="url(#${id})"/>`;
  const shadow = (cx, cy, rx) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="16" fill="#000" opacity=".12"/>`;
  const word = (x, y, t, fill, size = 30, w = 600, ls = 2) => `<text x="${x}" y="${y}" fill="${fill}" font-family="Inter Tight, Inter, sans-serif" font-size="${size}" font-weight="${w}" letter-spacing="${ls}" text-anchor="middle">${t}</text>`;
  const ART = {
    orra: id => g(id, '#F7DCCB', '#E5A48C') + shadow(400, 512, 120) +
      `<rect x="318" y="150" width="164" height="360" rx="34" fill="#FFF7F2" opacity=".92"/><rect x="356" y="104" width="88" height="58" rx="12" fill="#2B2220"/>` +
      word(400, 330, 'orra', '#2B2220', 44, 500, 1) + word(400, 362, 'DAILY SERUM', '#9B6E60', 12, 500, 3),
    lumen: id => g(id, '#C7F0DD', '#93C9F4') + shadow(400, 520, 250) +
      `<rect x="150" y="120" width="500" height="390" rx="18" fill="#fff"/><rect x="150" y="120" width="500" height="44" rx="18" fill="#F2F4F5"/><circle cx="182" cy="142" r="7" fill="#0B0B0C"/>` +
      word(260, 250, 'Ask anything.', '#0B0B0C', 34, 500, -1).replace('text-anchor="middle"', '') +
      `<rect x="188" y="278" width="300" height="12" rx="6" fill="#E3E7EA"/><rect x="188" y="302" width="220" height="12" rx="6" fill="#E3E7EA"/><rect x="188" y="400" width="420" height="58" rx="12" fill="#F2F4F5"/><rect x="540" y="410" width="58" height="38" rx="9" fill="#0B0B0C"/>`,
    kiln: id => g(id, '#3A332E', '#6B5545') + shadow(400, 500, 130) +
      `<path d="M330 180 Q300 300 320 420 Q340 500 400 500 Q460 500 480 420 Q500 300 470 180 Z" fill="#D7B08A"/><rect x="342" y="160" width="116" height="30" rx="8" fill="#C59A72"/><path d="M322 330 Q400 350 478 330" stroke="#3A332E" stroke-width="6" fill="none" opacity=".35"/>` +
      word(400, 570, 'KILN &amp; CO', '#EAD9C6', 18, 600, 6),
    fieldnote: id => g(id, '#2B57FF', '#0E2A9E') + shadow(400, 470, 210) +
      `<g transform="rotate(-8 400 300)"><rect x="200" y="170" width="400" height="250" rx="22" fill="#F6F7FB"/><circle cx="252" cy="222" r="20" fill="#2B57FF"/><rect x="232" y="352" width="160" height="14" rx="7" fill="#C9CFE6"/>` +
      `<text x="560" y="380" fill="#0B0B0C" font-family="Inter Tight, sans-serif" font-size="28" font-weight="600" text-anchor="end">fieldnote</text></g>`,
    marrow: id => g(id, '#3E4B2F', '#6F8049') + shadow(400, 540, 170) +
      `<rect x="260" y="90" width="280" height="440" rx="6" fill="#F3F0E7"/>` + word(400, 190, 'MARROW', '#3E4B2F', 34, 700, 8) +
      `<rect x="310" y="240" width="180" height="8" rx="4" fill="#C9C4B3"/><rect x="310" y="270" width="140" height="8" rx="4" fill="#C9C4B3"/><rect x="310" y="320" width="180" height="8" rx="4" fill="#C9C4B3"/><rect x="310" y="350" width="120" height="8" rx="4" fill="#C9C4B3"/><circle cx="400" cy="450" r="26" fill="none" stroke="#3E4B2F" stroke-width="4"/>`,
    tidal: id => g(id, '#FF8A3D', '#FFC560') + shadow(400, 525, 95) +
      `<rect x="320" y="130" width="160" height="390" rx="26" fill="#FFFDF8"/><rect x="320" y="130" width="160" height="34" rx="16" fill="#E9E4DA"/><path d="M332 330 q34 -26 68 0 t68 0" stroke="#FF6B1A" stroke-width="10" fill="none" stroke-linecap="round"/>` +
      word(400, 400, 'TIDAL', '#0B0B0C', 28, 700, 5) + word(400, 428, 'SPARKLING YUZU', '#8A8C90', 11, 500, 3),
    form: id => g(id, '#F4F4F2', '#ECECE8') +
      `<rect x="200" y="110" width="400" height="380" rx="16" fill="#fff" stroke="#E6E6E3"/>` + word(400, 168, 'Before kickoff', '#0B0B0C', 24, 500, -.5) +
      [0, 1, 2].map(i => `<rect x="240" y="${206 + i * 82}" width="220" height="10" rx="5" fill="#C9CBCE"/><rect x="240" y="${226 + i * 82}" width="320" height="38" rx="8" fill="#F4F4F2"/>`).join(''),
    call: id => g(id, '#0B0B0C', '#1E1E21') +
      `<rect x="120" y="120" width="270" height="200" rx="14" fill="#D7B08A"/><rect x="410" y="120" width="270" height="200" rx="14" fill="#93C9F4"/><rect x="120" y="340" width="270" height="140" rx="14" fill="#2B57FF"/><rect x="410" y="340" width="270" height="140" rx="14" fill="#E5A48C"/>` +
      word(255, 230, 'A', '#3A332E', 64, 300, 0) + word(545, 230, 'B', '#0B0B0C', 64, 300, 0) + `<rect x="330" y="512" width="140" height="36" rx="18" fill="#2FA36B"/>` + word(400, 536, 'Pick B', '#fff', 15, 600, 0),
    files: id => g(id, '#ECECE8', '#DCDCD6') +
      [0, 1, 2].map(i => `<rect x="${170 + i * 40}" y="${150 + i * 34}" width="380" height="260" rx="14" fill="${['#fff', '#fff', '#0B0B0C'][i]}" stroke="#D8D8D3"/>`).join('') +
      word(440, 330, 'Brand guidelines', '#fff', 26, 500, -.5) + word(440, 362, 'Figma · PDF · asset kit', '#A9ABAE', 14, 400, 0),
    ai: id => g(id, '#E9E6FF', '#CDEFE6') +
      [['Social post', 150, 130], ['Product shot', 420, 130], ['Deck outline', 150, 330], ['Launch email', 420, 330]].map(([t, x, y]) =>
        `<rect x="${x}" y="${y}" width="230" height="160" rx="14" fill="#fff"/><text x="${x + 22}" y="${y + 44}" fill="#0B0B0C" font-family="Inter Tight, sans-serif" font-size="20" font-weight="500">${t}</text><rect x="${x + 22}" y="${y + 70}" width="150" height="9" rx="4.5" fill="#D9DBDE"/><rect x="${x + 22}" y="${y + 90}" width="110" height="9" rx="4.5" fill="#D9DBDE"/><rect x="${x + 22}" y="${y + 116}" width="64" height="24" rx="12" fill="#0B0B0C"/>`).join(''),
    person: id => g(id, '#E9E9E6', '#D6D6D1') + `<circle cx="400" cy="250" r="90" fill="#BDBDB7"/><path d="M220 600 Q220 380 400 380 Q580 380 580 600 Z" fill="#BDBDB7"/>`
  };
  let n = 0;
  for (const el of document.querySelectorAll('[data-art]')) {
    const k = el.dataset.art, f = ART[k];
    if (!f) continue;
    el.innerHTML = `<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${el.dataset.label || 'Placeholder work'}">${f('g' + n++)}</svg>`;
  }

  /* Menus: pick up to data-max items (Brand: six applications, Web: five pages, and so on). */
  for (const picker of document.querySelectorAll('.picker')) {
    const max = +picker.dataset.max || 6;
    const out = document.getElementById(picker.dataset.out);
    const btns = [...picker.querySelectorAll('.opt')];
    const update = () => {
      const on = btns.filter(b => b.getAttribute('aria-pressed') === 'true').length;
      if (out) out.textContent = `${on} of ${max} picked`;
      btns.forEach(b => { b.disabled = max > 1 && on >= max && b.getAttribute('aria-pressed') !== 'true'; b.style.opacity = b.disabled ? .45 : 1; });
    };
    btns.forEach(b => b.addEventListener('click', () => {
      if (max === 1) btns.forEach(o => o !== b && o.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      update();
    }));
    update();
  }

  /* Work page: filter the stacked projects by sprint. */
  const chips = [...document.querySelectorAll('.chip')];
  const projs = [...document.querySelectorAll('.proj[data-tags]')];
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => x.setAttribute('aria-pressed', x === c ? 'true' : 'false'));
    const t = c.dataset.tag;
    projs.forEach(p => { p.hidden = t !== 'all' && !p.dataset.tags.split(' ').includes(t); });
  }));

  /* Start page: preselect a sprint from #hash, and show a confirmation instead of sending. */
  const form = document.querySelector('#brief');
  if (form) {
    const h = location.hash.slice(1);
    const r = form.querySelector(`input[name="sprint"][value="${h}"]`);
    if (r) r.checked = true;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const pick = form.querySelector('input[name="sprint"]:checked');
      document.querySelector('#sent-sprint').textContent = pick ? pick.dataset.label : 'your sprint';
      form.hidden = true;
      document.querySelector('#sent').hidden = false;
      document.querySelector('#sent').scrollIntoView({ block: 'start' });
    });
  }

  /* Closing band: the launch-date question carries on to the Start page. */
  for (const q of document.querySelectorAll('form.quick')) {
    q.addEventListener('submit', e => { e.preventDefault(); location.href = q.dataset.go; });
  }
}
