# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for the Pioneer High School Education Foundation (San Jose, CA). It's a multi-page site designed to showcase the foundation's impact, facilitate donations, and engage the community.

## Development

**No build process required** - this is a pure static site with vanilla HTML/CSS/JavaScript.

### Local Development
```bash
cd website
python3 -m http.server 8000
# Visit http://localhost:8000
```

Or simply open `website/index.html` directly in a browser.

## Architecture

### File Structure
```
website/
├── index.html          # Homepage
├── about.html          # Mission, board, history, financials
├── impact.html         # Impact metrics, programs, success stories
├── events.html         # Event calendar
├── give.html           # Donation methods
├── contact.html        # Contact form
├── css/styles.css      # Single stylesheet with CSS variables
├── js/main.js          # All interactive features
└── images/             # Photos and graphics
```

### Styling
CSS uses custom properties defined in `:root` for the color palette:
- `--primary-blue`: #4A7BA7 (Pioneer's official blue)
- `--dark-blue`: #3A5F7D
- `--light-blue`: #6B9FCA
- Legacy aliases exist (`--primary-maroon`, `--primary-gold`) that map to blue colors

### JavaScript Features (`js/main.js`)
- Mobile menu toggle
- Hero image slider (5-second auto-advance)
- Testimonial slider (7-second auto-advance)
- Scroll animations using IntersectionObserver
- Event calendar filtering
- Animated metrics counter
- Back-to-top button

### Forms
Contact and newsletter forms show alerts only - they need backend integration (Formspree recommended) for actual submission.

## Key Information
- **Tax ID**: 20-5727442
- **Contact**: educationfoundationphs@gmail.com
- **Address**: 1290 Blossom Hill Road, San Jose, CA 95118
- **Phone**: 408-535-6310

## Content Updates

Common edits span multiple HTML files (header, footer, contact info). When updating:
- Board members: Edit `about.html` Board of Directors section
- Events: Edit `events.html`
- Impact metrics: Update both `index.html` and `impact.html`
- Contact info: Update ALL HTML files (headers and footers)

See `WEBSITE_PLAN.md` for comprehensive content requirements and `website/README.md` for detailed customization guides.
