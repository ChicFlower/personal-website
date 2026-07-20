document.querySelectorAll('.photos img').forEach(img => {
  img.addEventListener('load', () => {
    if (img.naturalWidth > img.naturalHeight) {
        img.classList.add('landscape');
    } else {
        img.classList.add('portrait');
    }
  });
});