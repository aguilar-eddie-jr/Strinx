      document.querySelectorAll('.slider-container').forEach((slider) => {
      const track = slider.querySelector('.slider-track');
      const prevBtn = slider.querySelector('.arrow.left');
      const nextBtn = slider.querySelector('.arrow.right');
      const products = track.querySelectorAll('.product');

      let index = 0;
      let visibleItems = getVisibleItems();
      const totalItems = products.length;

  // Detect screen size and adjust visible items
      function getVisibleItems() {
        if (window.innerWidth <= 500) return 1;    
        if (window.innerWidth <= 900) return 2;    
        return 3;                                  
      }

  // Update slider on resize
      window.addEventListener('resize', () => {
        const oldVisible = visibleItems;
        visibleItems = getVisibleItems();
        if (oldVisible !== visibleItems) {
          index = 0;          // reset to first slide to avoid glitches
          updateSlider();
        }
      });

      function updateSlider() {
        const offset = -(index * (100 / visibleItems));
        track.style.transform = `translateX(${offset}%)`;
      }

      nextBtn.addEventListener('click', () => {
        if (index < totalItems - visibleItems) {
          index++;
          updateSlider();
        }
      });

      prevBtn.addEventListener('click', () => {
        if (index > 0) {
          index--;
          updateSlider();
        }
      });
    });

    //For Sidebar
   function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
   }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }