# Pedagogical Crossroads: GenAI in Higher Education

An academic presentation website exploring the *Thresholds* special issue on Generative AI in higher education.

**Presenters:** Jasmine Reece & Eryn Paradise Shorthill
**Journal:** Thresholds in Education, Vol. 48, Issue 1 (Winter 2025)
**Guest Editors:** Marc Watkins & Stephen Monroe (University of Mississippi)

## About This Site

This website presents an analysis of the *Thresholds in Education* special issue examining how writing and composition classrooms are navigating generative AI technologies. The site explores key themes, article summaries, and critical perspectives on AI in education.

## Site Structure

```
/
├── index.html                 # Homepage
├── about.html                 # About the Issue
├── themes/                    # Key Themes (3 pages)
│   ├── detection-engagement.html
│   ├── agency-voice.html
│   └── transparency-surveillance.html
├── articles/                  # Article Annotations (8 pages)
│   ├── nelson.html           # Completed
│   ├── velez.html            # Completed
│   ├── krueger.html          # Completed
│   ├── uanachain-aouad.html  # Completed
│   ├── placeholder-5.html    # Awaiting content
│   ├── placeholder-6.html    # Awaiting content
│   ├── placeholder-7.html    # Awaiting content
│   └── placeholder-8.html    # Awaiting content
├── analysis.html              # Analysis & Synthesis
├── questions.html             # Open Questions
├── references.html            # References
├── css/
│   └── style.css             # Site styling
└── js/
    └── navigation.js         # Shared navigation
```

## Viewing the Site

### Live Site (GitHub Pages)

Once GitHub Pages is enabled, the site will be available at:
```
https://[username].github.io/thresholdsineducationproject
```

### Local Development

To view the site locally:

1. **Using Python's built-in server:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Using Node's http-server:**
   ```bash
   npx http-server
   ```

3. **Or simply open `index.html` in your browser**
   (Navigation paths will work once deployed to GitHub Pages)

## Adding Content to Placeholder Articles

Four article pages are awaiting content. To add annotations:

1. **Using GitHub's Web Interface** (Recommended for non-technical users)
   - See [CONTRIBUTING.md](CONTRIBUTING.md) for step-by-step instructions

2. **Using Git** (For technical users)
   ```bash
   # Edit the placeholder file
   nano articles/placeholder-5.html

   # Replace the following placeholders:
   # [ARTICLE_TITLE] - Full article title
   # [AUTHORS] - Author names (APA format)
   # [FULL_CITATION] - Complete citation
   # [ARTICLE_SUMMARY] - 2-3 paragraph summary

   # Commit and push changes
   git add articles/placeholder-5.html
   git commit -m "Add annotation for Article 5"
   git push
   ```

## Design Features

- **Color Palette:** Calming academic blues and greens
  - Primary Navy: `#2C5F7C`
  - Teal Accent: `#4A9B8E`
  - Sage Background: `#E8F3F1`

- **Typography:**
  - Headings: Lato (sans-serif)
  - Body: Merriweather (serif)

- **Responsive Design:** Works on mobile, tablet, and desktop

- **Navigation:** Fixed top navigation with dropdown menus

## Technology Stack

- **Plain HTML/CSS/JavaScript** - No build process required
- **GitHub Pages** - Static site hosting
- **Google Fonts** - Lato and Merriweather
- **Vanilla JavaScript** - No frameworks needed

## File Naming Conventions

- HTML files: lowercase with hyphens (e.g., `detection-engagement.html`)
- CSS files: lowercase (e.g., `style.css`)
- Directories: lowercase, plural where appropriate (e.g., `articles/`, `themes/`)

## Enabling GitHub Pages

To deploy this site:

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select the branch (e.g., `main` or `claude/...`)
5. Click **Save**
6. Your site will be published at the URL shown

## Updating Navigation

The navigation is managed centrally in `js/navigation.js`. To update:

1. Edit `js/navigation.js`
2. Modify the `navHTML` string with your changes
3. Changes will automatically appear on all pages

## Browser Compatibility

This site works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

The site includes:
- Semantic HTML5 elements
- ARIA labels for navigation
- Keyboard navigable menus
- Sufficient color contrast
- Focus indicators for keyboard navigation

## Contact

For questions about this project:
- Jasmine Reece: [contact information]
- Eryn Paradise Shorthill: [contact information]

## License

This is an academic project. Please contact the presenters regarding use or reproduction of content.

---

**Note:** This website is for educational and presentation purposes, analyzing published academic work from *Thresholds in Education*.
