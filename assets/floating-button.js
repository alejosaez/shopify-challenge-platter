document.addEventListener("DOMContentLoaded", () => {
  const scrollbar = document.querySelector("#floating-scrollbar");

  if (!scrollbar) return;

  let isDragging = false;
  let startY = 0;
  let startScrollTop = 0;

  const updateScrollbarPosition = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const viewportHeight = window.innerHeight;
    const scrollbarHeight = parseFloat(getComputedStyle(scrollbar).height);

    const scrollbarTop = (scrollTop / scrollHeight) * (viewportHeight - scrollbarHeight);
    scrollbar.style.transform = `translateY(${scrollbarTop}px)`;
  };

  scrollbar.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    startY = e.clientY;
    startScrollTop = window.scrollY;
    scrollbar.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const viewportHeight = window.innerHeight;

    const newScrollTop = Math.min(
      Math.max(startScrollTop + (deltaY * scrollHeight) / viewportHeight, 0),
      scrollHeight
    );

    window.scrollTo(0, newScrollTop);
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      scrollbar.style.cursor = "pointer";
    }
  });

  window.addEventListener("scroll", updateScrollbarPosition);

  updateScrollbarPosition();
});
