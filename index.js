class App {
    
/**
 * Constructor for the class.
 * Initializes the heroImages and texts properties.
 * Calls the _initialize and _render methods.
 */
constructor() {
  // Select all the hero images and store them in the heroImages property
  this.heroImages = [...document.querySelectorAll(".hero__images img")];

  // Select all the text elements with the text__effect class and store them in the texts property
  this.texts = [...document.querySelectorAll(".text__effect")];

  // Call the _initialize method
  this._initialize();

  // Call the _render method
  this._render();
}

/**
 * Initializes the component by setting initial states and creating necessary elements.
 */
_initialize() {
  this._setInitialStates();
  this._createLenis();
  this._createIntro();
  this._createHero();
  this._createTextAnimation();
  this._createPinnedSection();
}

/**
 * Sets the initial states of the component.
 */
_setInitialStates() {
  // Code to set initial states
}

/**
 * Creates the Lenis element.
 */
_createLenis() {
  // Code to create Lenis element
}

/**
 * Creates the Intro element.
 */
_createIntro() {
  // Code to create Intro element
}

/**
 * Creates the Hero element.
 */
_createHero() {
  // Code to create Hero element
}

/**
 * Creates the TextAnimation element.
 */
_createTextAnimation() {
  // Code to create TextAnimation element
}

/**
 * Creates the PinnedSection element.
 */
_createPinnedSection() {
  // Code to create PinnedSection element
}

/**
 * Set initial states for animation elements.
 */
 setInitialStates() {
  // Set initial states for text elements
  gsap.set(".hero__title span, .fullwidth-image__text", {
    y: 32,
    opacity: 0,
  });

  // Set initial states for image elements
  gsap.set(".hero__images img", {
    opacity: 0,
    y: gsap.utils.random(100, 50),
  });

  // Set initial scale for image element
  gsap.set(".fullwidth-image img", {
    scale: 1.3,
  });
}
  
// Create an instance of the Lenis class and assign it to the 'lenis' property of the current object.
_createLenis() {
  /**
   * @class Lenis
   * @param {number} lerp - The lerp value for the Lenis instance.
   */
  this.lenis = new Lenis({
    lerp: 0.1,
  });
}

/**
 * Creates an intro animation using GSAP timeline.
 */
_createIntro() {
  const tl = gsap.timeline();

  // Fade in the title
  tl.to(".hero__title div", {
    opacity: 1,
  })
    // Slide in each letter of the title
    .to(".hero__title span", {
      y: 0,
      opacity: 1,
      ease: "expo.out",
      duration: 2,
      stagger: 0.01,
    })
    // Fade in and slide up the images
    .to(
      ".hero__images img",
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 2,
        stagger: 0.04,
      },
      0.5
    );
}

/**
 * Create hero animation using GSAP timeline and scrollTrigger.
 */
_createHero() {
  // Create a GSAP timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero", // Set the trigger element
      start: "top top", // Set the start position of the animation
      end: "bottom top", // Set the end position of the animation
      scrub: true, // Enable scrubbing effect
    },
  });

  // Iterate over each hero image
  this.heroImages.forEach((img) => {
    // Add animation to each image
    tl.to(
      img,
      {
        ease: "none", // Set the easing of the animation
        yPercent: gsap.utils.random(-100, -50), // Set the vertical position
      },
      0 // Set the animation delay
    );
  });
}

/**
 * Creates a timeline animation for the text overlay elements.
 */
  _createTextAnimation() {
    // Create a timeline with scroll trigger options
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-block",
        start: "top center",
        end: "bottom top+=10%",
        scrub: true,
      },
    });

    // Iterate over each text element
    this.texts.forEach((text, index) => {
      // Get the overlay element
      const overlay = text.querySelector(".text__overlay");

      // Add a tween animation to the timeline
      tl.to(overlay, {
        scale: 0,
      });
    });
  }

  /**
 * Creates a pinned section with scroll animations.
 */
  _createPinnedSection() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fullwidth-image",
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
      },
    });

    // Fade out the overlay
    tl.to(".fullwidth-image__overlay", {
      opacity: 0.4,
    })

      // Clip the image to a polygon shape
      .to(
        ".fullwidth-image",
        {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0
      )

      // Scale the image
      .to(
        ".fullwidth-image img",
        {
          scale: 1,
        },
        0
      )

      // Show the text with a slide animation
      .to(".fullwidth-image__text", {
        y: 0,
        opacity: 1,
      });
  }

  /**
 * Renders the animation frame.
 * @param {number} time - The current timestamp.
 */
  _render(time) {
    // Update the animation frame
    this.lenis.raf(time);
    // Request the next animation frame
    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
