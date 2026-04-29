const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
});

elements.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
