/**
 * Shared Navigation System
 * Dynamically generates navigation for all pages
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  insertNavigation();
  insertFooter();
  highlightCurrentPage();
  setupMobileMenu();
  setupDropdowns();
});

// Insert Navigation HTML
function insertNavigation() {
  const navHTML = `
    <nav>
      <div class="nav-container">
        <a href="/thresholdsineducationproject/index.html" class="nav-title">Thresholds: GenAI in Education</a>
        <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          ☰
        </button>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/thresholdsineducationproject/index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="/thresholdsineducationproject/about.html" class="nav-link">About the Issue</a>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">Key Themes</a>
            <ul class="dropdown-menu">
              <li><a href="/thresholdsineducationproject/themes/detection-engagement.html">Detection to Critical Engagement</a></li>
              <li><a href="/thresholdsineducationproject/themes/agency-voice.html">Agency, Voice & Authorship</a></li>
              <li><a href="/thresholdsineducationproject/themes/transparency-surveillance.html">Transparency Over Surveillance</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">Articles</a>
            <ul class="dropdown-menu">
              <li><a href="/thresholdsineducationproject/articles/nelson.html">Nelson et al. - Collaborative Intelligence</a></li>
              <li><a href="/thresholdsineducationproject/articles/velez.html">Velez et al. - Black Boxes Revisited</a></li>
              <li><a href="/thresholdsineducationproject/articles/krueger.html">Krueger - Rhetorical Choices & Voice</a></li>
              <li><a href="/thresholdsineducationproject/articles/uanachain-aouad.html">Uanachain & Aouad - Rethinking Learning & Assessment</a></li>
              <li><a href="/thresholdsineducationproject/articles/placeholder-5.html">Article 5 (Coming Soon)</a></li>
              <li><a href="/thresholdsineducationproject/articles/placeholder-6.html">Article 6 (Coming Soon)</a></li>
              <li><a href="/thresholdsineducationproject/articles/placeholder-7.html">Article 7 (Coming Soon)</a></li>
              <li><a href="/thresholdsineducationproject/articles/placeholder-8.html">Article 8 (Coming Soon)</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="/thresholdsineducationproject/analysis.html" class="nav-link">Analysis & Synthesis</a>
          </li>
          <li class="nav-item">
            <a href="/thresholdsineducationproject/questions.html" class="nav-link">Open Questions</a>
          </li>
          <li class="nav-item">
            <a href="/thresholdsineducationproject/references.html" class="nav-link">References</a>
          </li>
        </ul>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// Insert Footer HTML
function insertFooter() {
  const footerHTML = `
    <footer>
      <p>&copy; 2025 Thresholds in Education. Presentation by Jasmine Reese & Eryn Paradise Shorthill.</p>
      <p>Special Issue: Vol. 48, Issue 1 (Winter 2025) - Guest Editors: Marc Watkins & Stephen Monroe</p>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Highlight current page in navigation
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

  // Check main nav links
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('active');
    }
  });

  // Check dropdown links
  dropdownLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.style.fontWeight = '700';
      link.style.color = '#2C5F7C';
    }
  });
}

// Setup mobile menu toggle
function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
}

// Setup dropdown functionality
function setupDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  const dropdownTimeouts = new WeakMap(); // Store separate timeout for each dropdown

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    // Click to toggle (for all devices)
    toggle.addEventListener('click', function(e) {
      e.preventDefault();

      // Close other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('active');
          const otherToggle = other.querySelector('.dropdown-toggle');
          if (otherToggle) {
            otherToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('active');
      const isExpanded = dropdown.classList.contains('active');
      toggle.setAttribute('aria-expanded', isExpanded);
    });

    // Hover for desktop (in addition to click)
    dropdown.addEventListener('mouseenter', function() {
      // Clear any pending close timeout for THIS dropdown
      const timeout = dropdownTimeouts.get(dropdown);
      if (timeout) {
        clearTimeout(timeout);
        dropdownTimeouts.delete(dropdown);
      }
      dropdown.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', function() {
      // Add a small delay before closing to allow moving to the menu
      const timeout = setTimeout(function() {
        dropdown.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }, 200);
      dropdownTimeouts.set(dropdown, timeout);
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // Keyboard navigation for dropdowns
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdown.classList.toggle('active');
        const isExpanded = dropdown.classList.contains('active');
        toggle.setAttribute('aria-expanded', isExpanded);

        if (isExpanded) {
          const firstLink = menu.querySelector('a');
          if (firstLink) firstLink.focus();
        }
      }
    });
  });
}
