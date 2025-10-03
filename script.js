const toggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');
const closeBtn = document.getElementById('close-btn');  
const track = document.getElementById('carousel-track');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const modal = document.getElementById("modal-imagen");
const modalImg = document.getElementById("imagen-ampliada");
const cerrar = document.querySelector(".cerrar");
  const openSidebar = () => {
    sidebar.classList.add('active');
  };
  const closeSidebar = () => {
    sidebar.classList.remove('active');
  };
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    openSidebar();
  });
  closeBtn.addEventListener('click', closeSidebar);
  mainContent.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
      closeSidebar();
    }
  });
const getCardWidth = () => {
const card = track.querySelector('.carousel-item');
const style = window.getComputedStyle(card);
const gap = 30;
  return card.offsetWidth + gap;
};
btnLeft.addEventListener('click', () => {
  track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
});
btnRight.addEventListener('click', () => {
  track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
});
  document.querySelectorAll(".galeria-actividad img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
