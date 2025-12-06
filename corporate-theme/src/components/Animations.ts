/**
 * Animations Utility
 * Centralized animation class management
 * Provides methods to add/remove animation classes consistently
 */

export class Animations {
  /**
   * Slide in content from below
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static slideInUp(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('content-slide-in');
        element.classList.add('active');
      }, delay);
    } else {
      element.classList.add('content-slide-in');
      element.classList.add('active');
    }
  }

  /**
   * Slide out content downward
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static slideOutDown(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('content-slide-out');
        element.classList.remove('content-slide-in', 'active');
      }, delay);
    } else {
      element.classList.add('content-slide-out');
      element.classList.remove('content-slide-in', 'active');
    }
  }

  /**
   * Fade in element
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static fadeIn(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('slide-fade-enter');
      }, delay);
    } else {
      element.classList.add('slide-fade-enter');
    }
  }

  /**
   * Fade out element
   * @param element - Element to animate
   * @param delay - Optional delay in milliseconds
   */
  static fadeOut(element: HTMLElement | null, delay: number = 0): void {
    if (!element) return;

    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('slide-fade-exit');
        element.classList.remove('slide-fade-enter');
      }, delay);
    } else {
      element.classList.add('slide-fade-exit');
      element.classList.remove('slide-fade-enter');
    }
  }

  /**
   * Add breath-in animation to slideshow slide
   * @param element - Slide element to animate
   */
  static breathIn(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove('breath-out');
    element.classList.add('breath-in');
  }

  /**
   * Add breath-out animation to slideshow slide
   * @param element - Slide element to animate
   */
  static breathOut(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove('breath-in');
    element.classList.add('breath-out');
  }

  /**
   * Remove all animation classes from element
   * @param element - Element to reset
   */
  static reset(element: HTMLElement | null): void {
    if (!element) return;
    element.classList.remove(
      'content-slide-in',
      'content-slide-out',
      'slide-fade-enter',
      'slide-fade-exit',
      'active',
      'breath-in',
      'breath-out',
      'fading-out'
    );
  }

  /**
   * Toggle active state for hero content
   * @param element - Hero content element
   * @param isActive - Whether to activate or deactivate
   */
  static setHeroContentActive(element: HTMLElement | null, isActive: boolean): void {
    if (!element) return;

    if (isActive) {
      element.classList.add('active');
      // Remove slide-out if present
      element.classList.remove('content-slide-out');
      // Add slide-in after a short delay to trigger animation
      setTimeout(() => {
        element.classList.add('content-slide-in');
      }, 10);
    } else {
      element.classList.remove('active', 'content-slide-in');
      element.classList.add('content-slide-out');
    }
  }
}

