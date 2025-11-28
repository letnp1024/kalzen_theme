/**
 * Services Component with Carousel
 */

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { ParallaxScroll } from '../../helpers/ParallaxScroll';

export class Services {
  private swiper: Swiper | null = null;
  private parallaxInstances: ParallaxScroll[] = [];

  constructor() {
    this.init();
  }

  /**
   * Initialize the services carousel
   */
  private init(): void {
    const carouselElement = document.querySelector<HTMLElement>('.services__carousel');
    if (!carouselElement) return;

    // Register Swiper modules
    Swiper.use([Navigation]);

    // Initialize Swiper
    this.swiper = new Swiper(carouselElement, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.services__carousel-btn--next',
        prevEl: '.services__carousel-btn--prev',
      },
      breakpoints: {
        // Mobile
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Tablet
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        // Desktop
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize parallax for service card images
    this.initParallax();
  }

  /**
   * Initialize parallax scroll effect for service card images
   */
  private initParallax(): void {
    // Get all service card images
    const cardImages = document.querySelectorAll<HTMLElement>('.services__card-image');
    const cardImageWrappers = document.querySelectorAll<HTMLElement>('.services__card-image-wrapper');

    cardImages.forEach((image, index) => {
      const wrapper = cardImageWrappers[index];
      if (image && wrapper) {
        const parallaxInstance = new ParallaxScroll(image, wrapper, {
          speed: 0.25,
          scale: 1.25,
          centered: false
        });
        this.parallaxInstances.push(parallaxInstance);
      }
    });
  }

  /**
   * Destroy the carousel instance
   */
  public destroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }

    // Destroy parallax instances
    this.parallaxInstances.forEach(instance => {
      instance.destroy();
    });
    this.parallaxInstances = [];
  }
}

