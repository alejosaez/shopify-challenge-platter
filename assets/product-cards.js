  document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('show-more-btn');
    const productContainer = document.getElementById('product-container');
    const productCards = Array.from(productContainer.children);
    const maxVisibleCards = 4; //12

    function updateVisibility() {
      if (window.innerWidth < 768) {
        productCards.forEach((card, index) => {
          card.classList.toggle('hidden', index >= maxVisibleCards);
        });
        showMoreBtn.style.display = 'block';
      } else {
        productCards.forEach((card) => card.classList.remove('hidden'));
        showMoreBtn.style.display = 'none';
      }
    }

    let isExpanded = false;

    showMoreBtn.addEventListener('click', () => {
      if (!isExpanded) {
        productCards.forEach((card) => card.classList.remove('hidden'));
        showMoreBtn.textContent = 'Show Less';
      } else {
        productCards.forEach((card, index) => {
          card.classList.toggle('hidden', index >= maxVisibleCards);
        });
        showMoreBtn.textContent = 'Show More';

        productContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      isExpanded = !isExpanded;
    });

    updateVisibility();
    window.addEventListener('resize', updateVisibility);
  });
