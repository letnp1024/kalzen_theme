/**
 * Header Component with Hero Slideshow
 * Includes: Top bar, Navigation menu, and Hero section with slogan
 */

export class Header {
  private slideshowContainer: HTMLElement | null;
  private slides: NodeListOf<HTMLElement> | null;
  private heroContent: HTMLElement | null;
  private currentSlide: number = 0;
  private slideInterval: number | null = null;
  private readonly slideDuration: number = 8000; // 8 seconds per slide (slower transitions)

  constructor() {
    this.slideshowContainer = document.querySelector('.header__slideshow');
    this.slides = document.querySelectorAll('.header__slideshow-slide');
    this.heroContent = document.querySelector('.header__hero-content');
    
    this.init();
  }

  /**
   * Initialize the header component
   */
  private init(): void {
    if (this.slides && this.slides.length > 0) {
      // Set first slide as active
      this.slides[0].classList.add('active');
      
      // Add breath animation class to first slide (index 0 = breath in)
      this.slides[0].classList.add('breath-in');
      
      this.heroContent?.classList.add('active');
      
      // Start slideshow
      this.startSlideshow();
    }

    // Initialize mobile menu
    this.initMobileMenu();

    // Ripple effect is initialized in main.ts after CDN scripts load
    // this.initRippleEffect();
  }

  /**
   * Start the automatic slideshow
   */
  private startSlideshow(): void {
    if (!this.slides || this.slides.length <= 1) return;

    this.slideInterval = window.setInterval(() => {
      this.nextSlide();
    }, this.slideDuration);
  }

  /**
   * Stop the slideshow
   */
  private stopSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  /**
   * Go to next slide
   */
  private nextSlide(): void {
    if (!this.slides || this.slides.length === 0) return;

    const totalSlides = this.slides.length;
    const nextIndex = (this.currentSlide + 1) % totalSlides;
    
    this.goToSlide(nextIndex);
  }


  /**
   * Navigate to specific slide
   */
  private goToSlide(index: number): void {
    if (!this.slides || this.slides.length === 0) return;
    if (index < 0 || index >= this.slides.length) return;
    if (index === this.currentSlide) return; // Don't switch to same slide

    // Slide out current content
    if (this.heroContent) {
      this.heroContent.classList.add('content-slide-out');
      this.heroContent.classList.remove('content-slide-in');
    }

    // Get slide elements
    const currentSlideElement = this.slides[this.currentSlide];
    const newSlideElement = this.slides[index];
    
    // Update current slide index immediately
    this.currentSlide = index;
    
    // Remove breath classes and active class from current slide
    currentSlideElement.classList.remove('breath-in', 'breath-out', 'active');
    currentSlideElement.classList.add('fading-out');
    
    // Remove breath classes from new slide first
    newSlideElement.classList.remove('breath-in', 'breath-out');
    
    // Add active class to new slide immediately (will fade in)
    // Both slides will transition simultaneously for smooth cross-fade
    newSlideElement.classList.add('active');
    
    // Add breath animation class based on slide index (alternating)
    // Even index (0, 2, 4...) = breath in, Odd index (1, 3, 5...) = breath out
    if (index % 2 === 0) {
      newSlideElement.classList.add('breath-in');
    } else {
      newSlideElement.classList.add('breath-out');
    }
    
    // Update ripple layer background to match new slide
    this.updateRippleBackground(newSlideElement);
    
    // Remove 'fading-out' class after transition completes
    setTimeout(() => {
      currentSlideElement.classList.remove('fading-out');
    }, 2000); // Match transition duration (2s)
    
    // Slide in new content after fade transition starts
    setTimeout(() => {
      if (this.heroContent) {
        this.heroContent.classList.remove('content-slide-out');
        this.heroContent.classList.add('content-slide-in');
        this.heroContent.classList.add('active');
      }
    }, 100);
  }

  /**
   * Update ripple layer background when slide changes
   */
  private updateRippleBackground(slideElement: HTMLElement): void {
    const rippleLayer = document.querySelector<HTMLElement>('.header__slideshow-ripple');
    if (!rippleLayer) return;

    const bgImage = window.getComputedStyle(slideElement).backgroundImage;
    if (bgImage && bgImage !== 'none') {
      rippleLayer.style.backgroundImage = bgImage;
      
      // Update ripple texture if ripple is initialized
      const $ = (window as any).$ || (window as any).jQuery;
      if ($ && typeof ($.fn as any).ripples !== 'undefined') {
        try {
          const $ripple = $(rippleLayer);
          if ($ripple.data('ripples')) {
            // Ripple is initialized, update its texture
            $ripple.ripples('updateSize');
          }
        } catch (e) {
          // Ignore errors
        }
      }
    }
  }

  /**
   * Initialize mobile menu functionality
   * Bootstrap handles the collapse functionality automatically
   */
  private initMobileMenu(): void {
    // Close menu when clicking on nav links (mobile only)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const navCollapse = document.querySelector('.navbar-collapse');
          if (navCollapse && navCollapse.classList.contains('show')) {
            // Bootstrap will handle the collapse
            const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
            if (toggler) {
              toggler.click();
            }
          }
        }
      });
    });
  }

  /**
   * Update active navigation link based on current section
   */
  public updateActiveNav(activeSection: string): void {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeSection}`) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Pause slideshow on hover
   */
  public pauseOnHover(): void {
    if (this.slideshowContainer) {
      this.slideshowContainer.addEventListener('mouseenter', () => {
        this.stopSlideshow();
      });

      this.slideshowContainer.addEventListener('mouseleave', () => {
        this.startSlideshow();
      });
    }
  }


}

