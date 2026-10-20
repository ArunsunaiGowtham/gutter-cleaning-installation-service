/**
 * ApexGutter - Main Application JavaScript
 * Controls: Navigation, Dropdowns, Theme Switcher (Dark/Light), RTL Toggle,
 * Before-After Comparison, Blog Search/Filter, Dynamic Page Renderers
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Theme Management (Light / Dark Mode)
  // --------------------------------------------------------------------------
  function initTheme() {
    let savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem('apexgutter_theme');
      if (!savedTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          savedTheme = 'dark';
        } else {
          savedTheme = 'light';
        }
      }
    } catch (e) {
      savedTheme = 'light';
    }

    applyTheme(savedTheme);

    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    try {
      localStorage.setItem('apexgutter_theme', theme);
    } catch (e) {
      // Safe fallback if localStorage is disabled or restricted
    }

    // Update icons and text
    const themeIcons = document.querySelectorAll('.theme-icon');
    themeIcons.forEach(icon => {
      if (theme === 'dark') {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-sun-fill');
      } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-stars-fill');
      }
    });

    // Update Header / Navigation Brand Logos to match theme
    const headerBrandLogos = document.querySelectorAll('.site-header .brand-logo-img, .offcanvas .brand-logo-img');
    headerBrandLogos.forEach(logo => {
      if (theme === 'dark') {
        logo.src = 'assets/images/logo/logo-dark.svg';
      } else {
        logo.src = 'assets/images/logo/logo.svg';
      }
    });

    // The footer has a dark background (#091a2b) across all themes,
    // so the footer brand logo must ALWAYS remain high-contrast logo-dark.svg
    const footerBrandLogos = document.querySelectorAll('.site-footer .brand-logo-img, .footer-brand-wrap img');
    footerBrandLogos.forEach(logo => {
      logo.src = 'assets/images/logo/logo-dark.svg';
    });
  }

  // --------------------------------------------------------------------------
  // 2. RTL Management (Right-to-Left Layout)
  // --------------------------------------------------------------------------
  function initRtl() {
    let savedRtl = false;
    try {
      savedRtl = localStorage.getItem('apexgutter_rtl') === 'true';
    } catch (e) {
      // Safe fallback if localStorage is unavailable
    }
    applyRtl(savedRtl);

    const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCurrentRtl = document.documentElement.getAttribute('dir') === 'rtl';
        applyRtl(!isCurrentRtl);
      });
    });
  }

  function applyRtl(isRtl) {
    const html = document.documentElement;
    const rtlLink = document.getElementById('rtlStylesheet');

    if (isRtl) {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      if (rtlLink) rtlLink.removeAttribute('disabled');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      if (rtlLink) rtlLink.setAttribute('disabled', 'true');
    }

    try {
      localStorage.setItem('apexgutter_rtl', isRtl);
    } catch (e) {
      // Safe fallback if localStorage is unavailable
    }

    // Update badge text and button titles
    const rtlBadges = document.querySelectorAll('.rtl-badge-text');
    rtlBadges.forEach(badge => {
      badge.textContent = isRtl ? 'LTR' : 'RTL';
    });

    const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlToggleBtns.forEach(btn => {
      btn.setAttribute('title', isRtl ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
      btn.setAttribute('aria-label', isRtl ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
    });
  }

  // --------------------------------------------------------------------------
  // 3. Sticky Navbar & Header Management
  // --------------------------------------------------------------------------
  function initStickyNavbar() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 15) {
        header.classList.add('scrolled', 'shadow-sm');
      } else {
        header.classList.remove('scrolled', 'shadow-sm');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --------------------------------------------------------------------------
  // 4. Dropdown & Navigation Integrity
  // Guaranteeing Home dropdown is CLOSED by default and operates smoothly
  // --------------------------------------------------------------------------
  function initNavigation() {
    // Explicitly verify all dropdown-menus start closed
    const allDropdowns = document.querySelectorAll('.dropdown-menu');
    allDropdowns.forEach(menu => {
      menu.classList.remove('show');
    });

    const allDropdownToggles = document.querySelectorAll('.dropdown-toggle');
    allDropdownToggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });

    // Close mobile offcanvas on link click
    const mobileLinks = document.querySelectorAll('.offcanvas-body a:not(.dropdown-toggle)');
    const mobileOffcanvasEl = document.getElementById('mobileNav');
    if (mobileOffcanvasEl && typeof bootstrap !== 'undefined') {
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          const instance = bootstrap.Offcanvas.getInstance(mobileOffcanvasEl);
          if (instance) instance.hide();
        });
      });
    }

    // Active page highlighter
    highlightActivePage();
  }

  function highlightActivePage() {
    let currentPath = decodeURIComponent(window.location.pathname.split('/').pop() || 'index.html');
    if (!currentPath || currentPath === '/') currentPath = 'index.html';

    // Map sub-detail pages to their primary parent nav item
    const pageMapping = {
      'service-details.html': 'services.html',
      'blog-details.html': 'blog.html'
    };
    const targetPath = pageMapping[currentPath] || currentPath;

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .home-dropdown-item');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const cleanHref = href.split('?')[0].split('#')[0];

      // Exact match for target path or home variants
      const isMatch = cleanHref === targetPath || 
                     (targetPath === 'index.html' && cleanHref === 'index.html') ||
                     (targetPath === 'index-2.html' && cleanHref === 'index-2.html');

      if (isMatch) {
        link.classList.add('active');
        // If it is in home dropdown, highlight parent dropdown toggle
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const parentToggle = parentDropdown.querySelector('.dropdown-toggle');
          if (parentToggle) parentToggle.classList.add('active');
        }
      }
    });

    // If current path is index.html or index-2.html, ensure Home toggle is active
    if (targetPath === 'index.html' || targetPath === 'index-2.html') {
      const homeToggle = document.getElementById('homeMenuDropdown');
      if (homeToggle) homeToggle.classList.add('active');
    }
  }

  // --------------------------------------------------------------------------
  // 5. Back to Top Button
  // --------------------------------------------------------------------------
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Interactive Before & After Slider
  // --------------------------------------------------------------------------
  function initBeforeAfterSlider() {
    const containers = document.querySelectorAll('.before-after-container');
    containers.forEach(container => {
      const afterWrapper = container.querySelector('.after-image-wrapper');
      const sliderHandle = container.querySelector('.slider-handle');
      if (!afterWrapper || !sliderHandle) return;

      let isDragging = false;

      function updateSlider(xPos) {
        const rect = container.getBoundingClientRect();
        let offsetX = xPos - rect.left;
        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width) offsetX = rect.width;

        const percentage = (offsetX / rect.width) * 100;
        afterWrapper.style.width = percentage + '%';
        sliderHandle.style.left = percentage + '%';
      }

      sliderHandle.addEventListener('mousedown', () => isDragging = true);
      window.addEventListener('mouseup', () => isDragging = false);
      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
      });

      // Touch events for mobile
      sliderHandle.addEventListener('touchstart', () => isDragging = true);
      window.addEventListener('touchend', () => isDragging = false);
      window.addEventListener('touchmove', (e) => {
        if (!isDragging || !e.touches[0]) return;
        updateSlider(e.touches[0].clientX);
      });

      // Click anywhere to jump
      container.addEventListener('click', (e) => {
        updateSlider(e.clientX);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Dynamic Service Details Page Loader
  // --------------------------------------------------------------------------
  function initServiceDetailsPage() {
    const serviceDetailsRoot = document.getElementById('serviceDetailsContainer');
    if (!serviceDetailsRoot || typeof SERVICES_DATA === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('service') || 'residential-cleaning';

    const service = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];

    // Update document title
    document.title = `${service.title} | ApexGutter Professional Services`;

    // 1. Hero / Header info
    const heroTitle = document.getElementById('serviceHeroTitle');
    const heroSubtitle = document.getElementById('serviceHeroSubtitle');
    const breadcrumbCurrent = document.getElementById('breadcrumbServiceTitle');
    const serviceBadge = document.getElementById('serviceCategoryBadge');

    if (heroTitle) heroTitle.textContent = service.title;
    if (heroSubtitle) heroSubtitle.textContent = service.subtitle;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = service.title;
    if (serviceBadge) serviceBadge.textContent = service.badge || service.category;

    // 2. Main featured image
    const mainImg = document.getElementById('serviceMainImage');
    if (mainImg) {
      mainImg.src = service.image;
      mainImg.alt = `${service.title} - Professional Gutter Work`;
    }

    // 3. Overview
    const overviewEl = document.getElementById('serviceFullOverview');
    if (overviewEl) overviewEl.innerHTML = `<p class="lead">${service.fullOverview}</p>`;

    // 4. Key Benefits
    const benefitsList = document.getElementById('serviceBenefitsList');
    if (benefitsList && service.keyBenefits) {
      benefitsList.innerHTML = service.keyBenefits.map(b => `
        <div class="col-md-6 mb-3">
          <div class="d-flex align-items-start gap-3 p-3 rounded-3 bg-body-tertiary border h-100">
            <div class="p-2 rounded-circle bg-primary-subtle text-primary flex-shrink-0">
              <i class="bi bi-check2-circle fs-5"></i>
            </div>
            <div>
              <p class="mb-0 fw-semibold text-body">${b}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 5. Problems Solved
    const problemsContainer = document.getElementById('serviceProblemsList');
    if (problemsContainer && service.problemsSolved) {
      problemsContainer.innerHTML = service.problemsSolved.map(p => `
        <div class="col-md-6 mb-3">
          <div class="card h-100 border-danger-subtle bg-danger-subtle bg-opacity-10 shadow-sm">
            <div class="card-body p-3">
              <h6 class="fw-bold text-danger d-flex align-items-center gap-2 mb-2">
                <i class="bi bi-exclamation-octagon-fill"></i>
                <span>${p.title}</span>
              </h6>
              <p class="small text-secondary mb-0">${p.desc}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 6. Process Steps
    const processStepsEl = document.getElementById('serviceProcessSteps');
    if (processStepsEl && service.processSteps) {
      processStepsEl.innerHTML = service.processSteps.map(step => `
        <div class="col-lg col-md-6 mb-3">
          <div class="card h-100 border-0 bg-body-tertiary shadow-sm text-center p-3">
            <div class="step-num mx-auto mb-2 fw-bold rounded-pill bg-primary text-white d-flex align-items-center justify-content-center" style="width:42px;height:42px;">
              ${step.step}
            </div>
            <h6 class="fw-bold mb-2">${step.name}</h6>
            <p class="small text-secondary mb-0">${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 7. Specifications Table
    const specsTable = document.getElementById('serviceSpecsTable');
    if (specsTable && service.specs) {
      specsTable.innerHTML = Object.entries(service.specs).map(([key, val]) => `
        <tr>
          <th scope="row" class="text-secondary fw-semibold w-50 py-2 border-bottom">${key}</th>
          <td class="text-body fw-bold py-2 border-bottom">${val}</td>
        </tr>
      `).join('');
    }

    // 8. Pricing Estimate
    const priceDisplay = document.getElementById('servicePriceEstimate');
    if (priceDisplay && service.pricingEstimate) {
      priceDisplay.textContent = service.pricingEstimate;
    }

    // 9. Service FAQs
    const faqContainer = document.getElementById('serviceFaqAccordion');
    if (faqContainer && service.faqs) {
      faqContainer.innerHTML = service.faqs.map((faq, idx) => `
        <div class="accordion-item mb-2 border rounded-3 overflow-hidden">
          <h2 class="accordion-header" id="faqHeading${idx}">
            <button class="accordion-button ${idx !== 0 ? 'collapsed' : ''} fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faqCollapse${idx}">
              ${faq.q}
            </button>
          </h2>
          <div id="faqCollapse${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" aria-labelledby="faqHeading${idx}" data-bs-parent="#serviceFaqAccordion">
            <div class="accordion-body text-secondary">
              ${faq.a}
            </div>
          </div>
        </div>
      `).join('');
    }

    // 10. Sidebar navigation active item & links
    const sidebarList = document.getElementById('serviceSidebarMenu');
    if (sidebarList) {
      sidebarList.innerHTML = SERVICES_DATA.map(s => `
        <a href="service-details.html?service=${s.id}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ${s.id === service.id ? 'active' : ''}">
          <span><i class="bi ${s.icon} me-2"></i>${s.title}</span>
          <i class="bi bi-chevron-right small"></i>
        </a>
      `).join('');
    }
  }

  // --------------------------------------------------------------------------
  // 8. Blog Listing Search & Filter
  // --------------------------------------------------------------------------
  function initBlogListing() {
    const blogListContainer = document.getElementById('blogCardsContainer');
    if (!blogListContainer || typeof BLOG_POSTS === 'undefined') return;

    const searchInput = document.getElementById('blogSearchInput');
    const filterButtons = document.querySelectorAll('.blog-filter-btn');
    const resultCountEl = document.getElementById('blogResultCount');

    let currentCategory = 'all';
    let searchQuery = '';

    // Support URL query parameter for category or search (e.g. blog.html?category=maintenance)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const searchParam = urlParams.get('search');

    if (categoryParam) {
      const targetCategory = categoryParam.toLowerCase().trim();
      const matchedBtn = Array.from(filterButtons).find(btn => (btn.getAttribute('data-category') || '').toLowerCase() === targetCategory);
      if (matchedBtn) {
        currentCategory = targetCategory;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        matchedBtn.classList.add('active');
      }
    }

    if (searchParam && searchInput) {
      searchQuery = searchParam.trim();
      searchInput.value = searchQuery;
    }

    function renderBlogCards() {
      const filtered = BLOG_POSTS.filter(post => {
        // Exact category match
        const matchesCategory = currentCategory === 'all' || post.category.toLowerCase() === currentCategory.toLowerCase();
        const matchesSearch = !searchQuery || 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (resultCountEl) {
        resultCountEl.textContent = `Showing ${filtered.length} of ${BLOG_POSTS.length} articles`;
      }

      if (filtered.length === 0) {
        blogListContainer.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="p-5 rounded-4 bg-body-tertiary border">
              <i class="bi bi-journal-x fs-1 text-muted mb-3 d-block"></i>
              <h4 class="fw-bold">No Articles Found</h4>
              <p class="text-secondary mb-3">No posts matched "${searchQuery}". Try a different keyword or reset filters.</p>
              <button class="btn btn-primary rounded-pill px-4" id="resetBlogFilters">Show All Articles</button>
            </div>
          </div>
        `;
        const resetBtn = document.getElementById('resetBlogFilters');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            currentCategory = 'all';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            filterButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-category') === 'all'));
            renderBlogCards();
          });
        }
        return;
      }

      blogListContainer.innerHTML = filtered.map(post => `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden blog-card">
            <div class="blog-img-wrapper position-relative">
              <img src="${post.image}" class="card-img-top blog-card-img" alt="${post.title}" loading="lazy">
              <span class="badge bg-primary position-absolute top-0 end-0 m-3 rounded-pill py-2 px-3 shadow-sm">
                ${post.category}
              </span>
            </div>
            <div class="card-body d-flex flex-direction-column flex-column p-4">
              <div class="d-flex align-items-center gap-3 text-secondary small mb-2">
                <span><i class="bi bi-calendar3 me-1"></i>${post.date}</span>
                <span><i class="bi bi-clock me-1"></i>${post.readTime}</span>
              </div>
              <h5 class="card-title fw-bold mb-3">
                <a href="blog-details.html?post=${post.id}" class="text-body text-decoration-none hover-primary">
                  ${post.title}
                </a>
              </h5>
              <p class="card-text text-secondary mb-4 flex-grow-1">
                ${post.excerpt}
              </p>
              <div class="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
                <span class="small fw-semibold text-secondary"><i class="bi bi-person-circle me-1"></i>${post.author.split(',')[0]}</span>
                <a href="blog-details.html?post=${post.id}" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-semibold">
                  Read Article <i class="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Attach search listener
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderBlogCards();
      });
    }

    // Attach filter buttons
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category') || 'all';
        renderBlogCards();
      });
    });

    // Initial render
    renderBlogCards();
  }

  // --------------------------------------------------------------------------
  // 9. Blog Details Dynamic Article Loader
  // --------------------------------------------------------------------------
  function initBlogDetailsPage() {
    const articleContainer = document.getElementById('blogArticleContent');
    if (!articleContainer || typeof BLOG_POSTS === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post') || 'why-regular-gutter-cleaning-matters';

    const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

    document.title = `${post.title} | ApexGutter Blog`;

    // Elements
    const titleEl = document.getElementById('blogArticleTitle');
    const categoryBadge = document.getElementById('blogArticleCategory');
    const dateEl = document.getElementById('blogArticleDate');
    const readTimeEl = document.getElementById('blogArticleReadTime');
    const authorEl = document.getElementById('blogArticleAuthor');
    const heroImgEl = document.getElementById('blogArticleImage');
    const breadcrumbTitle = document.getElementById('breadcrumbBlogTitle');

    if (titleEl) titleEl.textContent = post.title;
    if (categoryBadge) categoryBadge.textContent = post.category;
    if (dateEl) dateEl.textContent = post.date;
    if (readTimeEl) readTimeEl.textContent = post.readTime;
    if (authorEl) authorEl.textContent = post.author;
    if (heroImgEl) {
      heroImgEl.src = post.image;
      heroImgEl.alt = post.title;
    }
    if (breadcrumbTitle) breadcrumbTitle.textContent = post.title;

    // Content
    articleContainer.innerHTML = post.content;

    // Related posts (from the exact same category first, then fallback)
    const relatedContainer = document.getElementById('relatedPostsContainer');
    if (relatedContainer) {
      const sameCategoryPosts = BLOG_POSTS.filter(p => p.id !== post.id && p.category.toLowerCase() === post.category.toLowerCase());
      const otherCategoryPosts = BLOG_POSTS.filter(p => p.id !== post.id && p.category.toLowerCase() !== post.category.toLowerCase());
      const otherPosts = [...sameCategoryPosts, ...otherCategoryPosts].slice(0, 3);
      relatedContainer.innerHTML = otherPosts.map(op => `
        <div class="col-md-4 mb-3">
          <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
            <img src="${op.image}" class="card-img-top" alt="${op.title}" style="height:160px;object-fit:cover;">
            <div class="card-body p-3 d-flex flex-column">
              <span class="badge bg-primary-subtle text-primary align-self-start mb-2">${op.category}</span>
              <h6 class="fw-bold mb-2">
                <a href="blog-details.html?post=${op.id}" class="text-body text-decoration-none">${op.title}</a>
              </h6>
              <div class="mt-auto pt-2 text-secondary small">
                <span>${op.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Sidebar recent posts
    const sidebarRecent = document.getElementById('sidebarRecentPosts');
    if (sidebarRecent) {
      sidebarRecent.innerHTML = BLOG_POSTS.slice(0, 4).map(rp => `
        <a href="blog-details.html?post=${rp.id}" class="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0 border-bottom">
          <img src="${rp.image}" alt="${rp.title}" class="rounded-2 flex-shrink-0" style="width:64px;height:64px;object-fit:cover;">
          <div>
            <h6 class="mb-1 fw-bold fs-6 line-clamp-2">${rp.title}</h6>
            <small class="text-secondary">${rp.date}</small>
          </div>
        </a>
      `).join('');
    }
  }

  // --------------------------------------------------------------------------
  // 10. Contact Page Real Interactive Map (100% Client-Side, No Python/Backend)
  // --------------------------------------------------------------------------
  function initContactMap() {
    // Native OpenStreetMap embed format matching reference design.
    // Self-contained iframe without external tile scraping or 403 tile blocks.
    const mapContainer = document.getElementById('contactRealMap');
    if (!mapContainer) return;
  }


  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRtl();
    initStickyNavbar();
    initNavigation();
    initBackToTop();
    initBeforeAfterSlider();
    initServiceDetailsPage();
    initBlogListing();
    initBlogDetailsPage();
    initContactMap();
  });

})();
