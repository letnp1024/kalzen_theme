/**
 * About Us Component
 * Handles video play button click and YouTube video modal
 */

export class AboutUs {
  private playButton: HTMLElement | null;
  private videoUrl: string | null;

  constructor() {
    this.playButton = document.querySelector('.about-us__play-button');
    this.videoUrl = this.playButton?.getAttribute('data-video-url') || null;
    
    this.init();
  }

  /**
   * Initialize the component
   */
  private init(): void {
    // Initialize play button
    if (this.playButton && this.videoUrl) {
      this.playButton.addEventListener('click', () => {
        this.openYouTubeVideo(this.videoUrl!);
      });
    }

    // Initialize FAQ accordion
    this.initFAQ();
  }

  /**
   * Initialize FAQ accordion functionality
   */
  private initFAQ(): void {
    const faqQuestions = document.querySelectorAll('.about-us__faq-question');
    
    faqQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        const faqItem = question.closest('.about-us__faq-item');
        
        if (faqItem) {
          const isCurrentlyActive = faqItem.classList.contains('active');
          
          // Close all other open items first
          const allFaqItems = document.querySelectorAll('.about-us__faq-item');
          let hasOpenItems = false;
          
          allFaqItems.forEach((item) => {
            if (item !== faqItem && item.classList.contains('active')) {
              item.classList.remove('active');
              hasOpenItems = true;
            }
          });

          // Wait for closing animation to complete before opening new item
          if (hasOpenItems && !isCurrentlyActive) {
            setTimeout(() => {
              faqItem.classList.add('active');
            }, 400); // Match transition duration
          } else if (!isCurrentlyActive) {
            // If no items were open, open immediately
            faqItem.classList.add('active');
          } else {
            // If clicking on active item, just close it (already handled above)
            faqItem.classList.remove('active');
          }
        }
      });
    });
  }

  /**
   * Convert YouTube URL to embed format and open in modal or new tab
   */
  private openYouTubeVideo(url: string): void {
    // Extract video ID from YouTube URL
    const videoId = this.extractVideoId(url);
    
    if (videoId) {
      // Option 1: Open in new tab
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      
      // Option 2: Open in modal (uncomment if you want modal instead)
      // this.openVideoModal(videoId);
    }
  }

  /**
   * Extract video ID from YouTube URL
   */
  private extractVideoId(url: string): string | null {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  /**
   * Open YouTube video in modal (optional - not used by default)
   */
  private openVideoModal(videoId: string): void {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'about-us__video-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    // Create iframe container
    const iframeContainer = document.createElement('div');
    iframeContainer.style.cssText = `
      position: relative;
      width: 90%;
      max-width: 900px;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      height: 0;
    `;

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    `;
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      font-size: 2rem;
      cursor: pointer;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    `;

    // Close modal function
    const closeModal = () => {
      modal.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      }, 300);
    };

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Escape key to close
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);

    // Assemble modal
    iframeContainer.appendChild(iframe);
    modal.appendChild(iframeContainer);
    modal.appendChild(closeButton);

    // Append to body
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Fade in
    setTimeout(() => {
      modal.style.opacity = '1';
    }, 10);
  }
}

