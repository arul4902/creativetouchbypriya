/**
 * =========================================================================
 * CREATIVE TOUCH BY PRIYAA — LUXURY BRIDAL WEB APPLICATION
 * High-performance interactive logic & state management
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure CMS_DATA exists
  if (typeof CMS_DATA === 'undefined') {
    console.error('CMS_DATA is not loaded. Please ensure js/cms-data.js is included.');
    return;
  }

  // --- 1. RENDER DYNAMIC CONTENT FROM CMS_DATA ---
  renderTrustMetrics();
  renderRealBrides(CMS_DATA.brides);
  renderReels(CMS_DATA.reels);
  renderServices(CMS_DATA.services);
  renderReviews(CMS_DATA.reviews);
  renderFAQs(CMS_DATA.faqs);

  // --- 2. INITIALIZE INTERACTIVE FEATURES ---
  initHeaderScroll();
  initMobileNavigation();
  initBeforeAfterSlider();
  initLookFinderQuiz();
  initDateEnquiryForm();
  initModals();
});

/* --------------------------------------------------------------------------
   RENDER FUNCTIONS
   -------------------------------------------------------------------------- */

// 1. Trust Metrics Strip
function renderTrustMetrics() {
  const container = document.getElementById('trustGrid');
  if (!container || !CMS_DATA.metrics) return;

  container.innerHTML = CMS_DATA.metrics.map(m => `
    <div class="trust-item">
      <div class="trust-number">${m.number}</div>
      <div class="trust-label">${m.label}</div>
    </div>
  `).join('');
}

// 2. Real Brides Gallery with Filters
function renderRealBrides(bridesList) {
  const container = document.getElementById('bridesGrid');
  if (!container) return;

  container.innerHTML = bridesList.map(bride => `
    <article class="bride-card" data-category="${bride.category}" data-id="${bride.id}">
      <div class="bride-media-wrap">
        <img src="${bride.image}" alt="${bride.name} — ${bride.tag}" loading="lazy" />
        <span class="bride-tag-badge">${bride.tag}</span>
      </div>
      <div class="bride-details">
        <h3 class="bride-name font-serif">${bride.name}</h3>
        <p class="bride-summary">${bride.summary}</p>
        <button class="btn-story-trigger" onclick="openBridalStory('${bride.id}')">
          View Bridal Story &rarr;
        </button>
      </div>
    </article>
  `).join('');

  initPortfolioFilter();
}

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.bride-card');

      cards.forEach(card => {
        if (filter === 'All' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 3. Real Video Reels
function renderReels(reelsList) {
  const container = document.getElementById('reelsGrid');
  if (!container || !reelsList) return;

  container.innerHTML = reelsList.map(reel => `
    <div class="reel-card" onclick="openReelPlayer('${reel.videoSrc}', '${reel.title}', '${reel.caption}')">
      <video class="reel-video-element" muted loop playsinline preload="metadata">
        <source src="${reel.videoSrc}" type="video/mp4">
      </video>
      <div class="reel-overlay">
        <div class="reel-top-bar">
          <span class="badge-luxury">${reel.event}</span>
          <span class="reel-views">👁️ ${reel.views}</span>
        </div>
        <div class="reel-play-btn" aria-label="Play Reel">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div class="reel-bottom-info">
          <h4 class="reel-title">${reel.title}</h4>
          <p class="reel-caption">${reel.caption}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Hover play preview on desktop
  const reelCards = document.querySelectorAll('.reel-card');
  reelCards.forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    });
    card.addEventListener('mouseleave', () => {
      if (video && !video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });
}

// 4. Bridal Services
function renderServices(servicesList) {
  const container = document.getElementById('servicesGrid');
  if (!container || !servicesList) return;

  container.innerHTML = servicesList.map(s => `
    <div class="service-card">
      <div class="service-media">
        <img src="${s.image}" alt="${s.title}" loading="lazy" />
      </div>
      <div class="service-content">
        <span class="service-subtitle">${s.subtitle}</span>
        <h3 class="service-title font-serif">${s.title}</h3>
        <p class="service-desc">${s.description}</p>
        <ul class="service-features-list">
          ${s.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="#enquire" class="btn btn-outline" style="margin-top:auto;" onclick="prefillService('${s.title}')">
          ${s.cta} &rarr;
        </a>
      </div>
    </div>
  `).join('');
}

// 5. Client Reviews
function renderReviews(reviewsList) {
  const container = document.getElementById('reviewsGrid');
  if (!container || !reviewsList) return;

  container.innerHTML = reviewsList.map(r => `
    <div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-quote">${r.quote}</p>
      <div class="review-author-wrap">
        <div class="review-avatar">
          <img src="${r.image}" alt="${r.name}" loading="lazy" />
        </div>
        <div>
          <h4 class="review-name">${r.name}</h4>
          <span class="review-event">${r.event} • ${r.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 6. Frequently Asked Questions Accordion
function renderFAQs(faqsList) {
  const container = document.getElementById('faqAccordion');
  if (!container || !faqsList) return;

  container.innerHTML = faqsList.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question" type="button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" style="${idx === 0 ? 'max-height: 250px;' : ''}">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   INTERACTIVE FEATURE #1: BRIDAL LOOK FINDER QUIZ
   -------------------------------------------------------------------------- */
let quizStep = 1;
const quizAnswers = {
  event: '',
  finish: '',
  priority: ''
};

function initLookFinderQuiz() {
  const questions = CMS_DATA.lookFinder.questions;
  const questionTitle = document.getElementById('quizQuestionTitle');
  const optionsGrid = document.getElementById('quizOptionsGrid');
  const prevBtn = document.getElementById('quizPrevBtn');
  const nextBtn = document.getElementById('quizNextBtn');
  const progressBar = document.getElementById('quizProgressFill');

  if (!questionTitle || !optionsGrid) return;

  renderCurrentQuestion();

  function renderCurrentQuestion() {
    const qData = questions[quizStep - 1];
    questionTitle.textContent = qData.question;

    // Update Progress bar & Bubbles
    if (progressBar) {
      progressBar.style.width = `${(quizStep / 3) * 100}%`;
    }
    document.querySelectorAll('.step-bubble').forEach((b, idx) => {
      b.classList.remove('active', 'completed');
      if (idx + 1 === quizStep) b.classList.add('active');
      else if (idx + 1 < quizStep) b.classList.add('completed');
    });

    // Render 4 Options
    optionsGrid.innerHTML = qData.options.map(opt => `
      <div class="quiz-option-card ${quizAnswers[qData.id] === opt.value ? 'selected' : ''}" onclick="selectQuizOption('${qData.id}', '${opt.value}')">
        <h4 class="quiz-option-title">${opt.label}</h4>
        <p class="quiz-option-desc">${opt.desc}</p>
      </div>
    `).join('');

    // Toggle Back button
    if (prevBtn) {
      prevBtn.style.visibility = quizStep === 1 ? 'hidden' : 'visible';
    }
    if (nextBtn) {
      nextBtn.textContent = quizStep === 3 ? 'Reveal My Bridal Look ✨' : 'Continue &rarr;';
    }
  }

  window.selectQuizOption = function(questionId, value) {
    quizAnswers[questionId] = value;
    renderCurrentQuestion();
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const qData = questions[quizStep - 1];
      if (!quizAnswers[qData.id]) {
        alert('Please choose an option to continue.');
        return;
      }

      if (quizStep < 3) {
        quizStep++;
        renderCurrentQuestion();
      } else {
        showQuizResult();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (quizStep > 1) {
        quizStep--;
        renderCurrentQuestion();
      }
    });
  }
}

function showQuizResult() {
  const quizForm = document.getElementById('quizStepContainer');
  const resultBox = document.getElementById('quizResultBox');
  if (!quizForm || !resultBox) return;

  quizForm.style.display = 'none';
  resultBox.style.display = 'block';

  // Determine Personalized Recommendation
  let directionTitle = "Signature Natural Glam Muhurtham";
  let directionDesc = "A seamless blend of authentic South Indian heritage with weightless, camera-ready dewy skin. Your look centers on radiant complexion, soft winged kohl liner, and heirloom jewelry harmony.";
  let recImage = "assets/images/brides/real-bride-peacock-blue.png";

  if (quizAnswers.event === 'Reception' || quizAnswers.finish === 'Defined Glam') {
    directionTitle = "Modern Rose Gold Reception Glam";
    directionDesc = "Sculpted cheekbones, champagne glass skin finish, and romantic waves tailored for evening ballroom elegance and chandelier reflection.";
    recImage = "assets/images/brides/real-bride-twirling-lehenga.png";
  } else if (quizAnswers.event === 'Engagement' || quizAnswers.finish === 'Very Natural') {
    directionTitle = "Pastel Ethereal Radiance";
    directionDesc = "Delicate watercolor blush, soft tightlined fluttery lashes, and featherlight hydration tailored for natural daylight ceremonies.";
    recImage = "assets/images/brides/engagement-glow.jpg";
  }

  document.getElementById('resultDirectionTitle').textContent = directionTitle;
  document.getElementById('resultDirectionDesc').textContent = directionDesc;
  document.getElementById('resultRecImage').src = recImage;

  // Build 1-click WhatsApp message with prefilled quiz answers
  const waMsg = encodeURIComponent(
    `Hi Priyaa,\n\nI just completed the Bridal Look Finder on your website!\n\n✨ My Bridal Direction: ${directionTitle}\n👰 Event: ${quizAnswers.event}\n💄 Preferred Finish: ${quizAnswers.finish}\n⭐ Key Priority: ${quizAnswers.priority}\n\nI'd love to discuss booking this bridal look for my wedding!`
  );
  const waBtn = document.getElementById('quizWhatsAppBtn');
  if (waBtn) {
    waBtn.href = `https://wa.me/${CMS_DATA.brand.whatsappNumber}?text=${waMsg}`;
  }
}

window.restartQuiz = function() {
  quizStep = 1;
  quizAnswers.event = '';
  quizAnswers.finish = '';
  quizAnswers.priority = '';
  document.getElementById('quizStepContainer').style.display = 'block';
  document.getElementById('quizResultBox').style.display = 'none';
  initLookFinderQuiz();
};

/* --------------------------------------------------------------------------
   INTERACTIVE FEATURE #2: BEFORE ↔ BRIDAL GLAM DUAL SLIDER
   -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
  const container = document.getElementById('comparisonContainer');
  const afterImage = document.getElementById('afterImageWrap');
  const handle = document.getElementById('sliderHandle');

  if (!container || !afterImage || !handle) return;

  let isDragging = false;

  function updateSlider(xPos) {
    const rect = container.getBoundingClientRect();
    let position = ((xPos - rect.left) / rect.width) * 100;

    // Constrain position between 5% and 95%
    position = Math.max(5, Math.min(95, position));

    container.style.setProperty('--slider-pos', `${position}%`);
  }

  // Pointer & Mouse Events
  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  // Touch Events for Mobile & Tablet
  handle.addEventListener('touchstart', () => isDragging = true, { passive: true });
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  // Direct container click
  container.addEventListener('click', (e) => {
    updateSlider(e.clientX);
  });
}

/* --------------------------------------------------------------------------
   INTERACTIVE FEATURE #3: DATE AVAILABILITY ENQUIRY ENGINE
   -------------------------------------------------------------------------- */
function initDateEnquiryForm() {
  const form = document.getElementById('bridalEnquiryForm');
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById('weddingDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('brideName').value.trim();
    const date = document.getElementById('weddingDate').value;
    const eventType = document.getElementById('eventType').value;
    const venue = document.getElementById('venueLocation').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const look = document.getElementById('preferredLook').value;
    const notes = document.getElementById('additionalNotes').value.trim();

    if (!name || !date || !phone) {
      alert('Please fill in your Name, Wedding Date, and Phone Number.');
      return;
    }

    // Format clean luxury WhatsApp message
    const waText = encodeURIComponent(
      `Hello Priyaa,\n\nI would like to enquire about bridal makeup availability for my wedding.\n\n👰 Bride Name: ${name}\n📅 Wedding Date: ${date}\n✨ Event Type: ${eventType}\n📍 Venue / Location: ${venue || 'Chennai'}\n💄 Preferred Style: ${look}\n📱 Phone: ${phone}\n${notes ? `📝 Notes: ${notes}\n` : ''}\nI found your work through your website and love your Natural Glam artistry.`
    );

    const waUrl = `https://wa.me/${CMS_DATA.brand.whatsappNumber}?text=${waText}`;

    // Display confirmation modal with direct WhatsApp link
    openEnquiryConfirmation(name, date, waUrl);
  });
}

function openEnquiryConfirmation(name, date, waUrl) {
  const modal = document.getElementById('enquiryModal');
  if (!modal) {
    window.open(waUrl, '_blank');
    return;
  }

  document.getElementById('confBrideName').textContent = name;
  document.getElementById('confWeddingDate').textContent = date;
  document.getElementById('confWhatsAppBtn').href = waUrl;

  modal.showModal();
}

window.prefillService = function(serviceName) {
  const eventSelect = document.getElementById('eventType');
  if (eventSelect) {
    if (serviceName.includes('Muhurtham')) eventSelect.value = 'Muhurtham';
    else if (serviceName.includes('Reception')) eventSelect.value = 'Reception';
    else if (serviceName.includes('Consultation')) eventSelect.value = 'Consultation';
    else if (serviceName.includes('Training') || serviceName.includes('Grooming')) eventSelect.value = 'Self-Grooming / Masterclass';
  }
};

/* --------------------------------------------------------------------------
   INTERACTIVE FEATURE #4: BRIDAL STORY & REEL MODALS
   -------------------------------------------------------------------------- */
window.openBridalStory = function(brideId) {
  const bride = CMS_DATA.brides.find(b => b.id === brideId);
  const modal = document.getElementById('bridalStoryModal');
  if (!bride || !modal) return;

  document.getElementById('storyModalImage').src = bride.image;
  document.getElementById('storyModalName').textContent = bride.name;
  document.getElementById('storyModalEvent').textContent = bride.story.event;
  document.getElementById('storyModalVision').textContent = bride.story.vision;
  document.getElementById('storyModalSkin').textContent = bride.story.skinFinish;
  document.getElementById('storyModalEyes').textContent = bride.story.eyeMakeup;
  document.getElementById('storyModalHair').textContent = bride.story.hairDraping;
  document.getElementById('storyModalQuote').textContent = `“${bride.story.testimonial}”`;

  // Prefill WhatsApp for this specific bride's look
  const waMsg = encodeURIComponent(`Hi Priyaa, I love the bridal look of ${bride.name} (${bride.tag}) on your website. Is a similar look possible for my wedding?`);
  document.getElementById('storyWhatsAppBtn').href = `https://wa.me/${CMS_DATA.brand.whatsappNumber}?text=${waMsg}`;

  modal.showModal();
};

window.openReelPlayer = function(videoSrc, title, caption) {
  const modal = document.getElementById('reelPlayerModal');
  const video = document.getElementById('reelModalVideo');
  if (!modal || !video) return;

  video.src = videoSrc;
  document.getElementById('reelModalTitle').textContent = title;
  document.getElementById('reelModalCaption').textContent = caption;

  modal.showModal();
  video.play().catch(() => {});
};

function initModals() {
  // Light dismiss on backdrop click for all <dialog> elements
  const dialogs = document.querySelectorAll('dialog.editorial-modal');
  dialogs.forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal(dialog);
      }
    });

    const closeBtn = dialog.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(dialog));
    }
  });
}

function closeModal(dialog) {
  // Pause any playing videos
  const video = dialog.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
  }
  dialog.close();
}

/* --------------------------------------------------------------------------
   NAVIGATION & UTILITIES
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileNavigation() {
  const toggle = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      toggle.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}
