// Efeito de digitação da query SQL na hero
(function(){
  const el = document.getElementById('typedQuery');
  const result = document.getElementById('queryResult');
  const parts = [
    {t:'SELECT ', c:'kw'},
    {t:'nome, especialidade, cidade\n', c:''},
    {t:'FROM ', c:'kw'},
    {t:'analistas\n', c:''},
    {t:'WHERE ', c:'kw'},
    {t:"cidade = 'Recife';", c:'str'}
  ];
  const full = parts.map(p => p.t).join('');
  let i = 0;

  function typeChar(){
    if(i <= full.length){
      el.innerHTML = escapeHtml(full.slice(0, i)) + '<span class="cursor"></span>';
      i++;
      setTimeout(typeChar, 22);
    } else {
      el.innerHTML = escapeHtml(full);
      setTimeout(() => result.classList.add('show'), 300);
    }
  }
  function escapeHtml(str){
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\n/g,'<br>');
  }
  // Respeita prefers-reduced-motion
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    el.innerHTML = escapeHtml(full);
    result.classList.add('show');
  } else {
    typeChar();
  }
})();

// Reveal on scroll
(function(){
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.15 });
  items.forEach(i => io.observe(i));
})();

// Active nav highlight
(function(){
  const links = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('main section');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        links.forEach(l => l.style.color = l.getAttribute('href') === '#'+id ? 'var(--text)' : '');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => io.observe(s));
})();
