/**
 * Contact Component
 * Handles parallax scroll effect for contact image
 */

import { ParallaxScroll } from '../../helpers/ParallaxScroll';

export class Contact {
  private imageElement: HTMLElement | null;
  private imageWrapper: HTMLElement | null;
  private parallaxInstance: ParallaxScroll | null = null;

  constructor() {
    this.imageElement = document.querySelector('.contact__image');
    this.imageWrapper = document.querySelector('.contact__image-wrapper');
    
    this.init();
  }

  /**
   * Initialize the component
   */
  private init(): void {
    // Initialize parallax scroll effect
    this.initParallax();
  }

  /**
   * Initialize parallax scroll effect for the image
   */
  private initParallax(): void {
    if (!this.imageElement || !this.imageWrapper) {
      console.warn('Contact: Image element or wrapper not found for parallax');
      return;
    }

    // Sử dụng ParallaxScroll helper
    this.parallaxInstance = new ParallaxScroll(this.imageElement, this.imageWrapper, {
      speed: 0.25,
      scale: 1.25,
      centered: true
    });
  }

  /**
   * Destroy the parallax instance
   */
  public destroy(): void {
    if (this.parallaxInstance) {
      this.parallaxInstance.destroy();
      this.parallaxInstance = null;
    }
  }
}

