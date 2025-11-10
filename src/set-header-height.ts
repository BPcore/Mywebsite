// measure the .header element and set the --header-height CSS variable on :root
function updateHeaderHeight() {
  try {
    const header = document.querySelector('.header') as HTMLElement | null;
    const root = document.documentElement;
    const height = header?.offsetHeight ?? 64; // fallback to 64px
    root.style.setProperty('--header-height', `${height}px`);
  } catch (err) {
    // silent fail if executed in non-browser environments
    // (e.g. during SSR or tests)
  }
}

// update on load and when window resizes — use requestAnimationFrame for smoother updates
if (typeof window !== 'undefined') {
  window.addEventListener('load', updateHeaderHeight);
  window.addEventListener('resize', () => requestAnimationFrame(updateHeaderHeight));
  // run immediately in case script is imported after load
  requestAnimationFrame(updateHeaderHeight);
}

export {};
