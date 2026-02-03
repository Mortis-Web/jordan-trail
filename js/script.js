        document.addEventListener('DOMContentLoaded', () => {
            const nav = document.querySelector('nav');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const mobileMenu = document.querySelector('.mobile-menu');
            const icon = menuBtn.querySelector('svg');

            // Scroll Effect
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial state

            // Toggle Logic
            menuBtn.addEventListener('click', () => {
                const isOpen = mobileMenu.classList.toggle('active');

                // Change Icon
                if (isOpen) {
                    icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'; // X icon
                    document.body.style.overflow = 'hidden'; // Lock scroll
                } else {
                    icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>'; // Menu icon
                    document.body.style.overflow = ''; // Unlock scroll
                }
            });

            // Close when clicking a link
            document.querySelectorAll('.mobile-link-large, .btn-mobile-large').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>';
                    document.body.style.overflow = '';
                });
            });
        });

  const lenis = new Lenis({
    duration: 1.5, // close to native (default ~0.4–0.5)
    smooth: true,
    lerp: 0.5, // very small easing factor (0.05–0.1 is subtle)
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
// <!-- 3. Your own scripts (that depend on libs being loaded) -->

// <!-- 4. Init AOS after everything -->
  AOS.init({
    duration: 1000,
    once: false,
  });
