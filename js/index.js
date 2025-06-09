  if (window.location.pathname == '/' || window.location.pathname.endsWith('/')) { window.location.replace(window.location.origin + window.location.pathname + 'index.html')}
  const currentPath = window.location.pathname.split('/').filter(seg => seg).pop() || 'index.html';
  document.querySelectorAll('.menu li a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').filter(seg => seg).pop();

    if (currentPath == linkPath) {
      link.classList.add('active')
    }
  });