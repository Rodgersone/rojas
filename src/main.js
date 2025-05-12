document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});
   // Fade-in on page load
   window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });

  // Smooth page transition on link click
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", function (e) {
      const url = new URL(link.href);
      const isSameOrigin = url.origin === window.location.origin;
      const isAnchor = url.hash && url.pathname === window.location.pathname;

      if (isSameOrigin && !isAnchor) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = link.href;
        }, 300);
      }
    });
  });

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
  });
  
