# Pioneer High School Education Foundation Website

A modern, responsive website for the Pioneer High School Education Foundation, designed to showcase the foundation's impact, facilitate donations, and engage the community.

## Project Overview

This website was created to replace the existing single-page foundation presence on the school website with a comprehensive, professional platform modeled after the San Jose Public Library Foundation website structure.

### Key Features

- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design using Pioneer High School colors (maroon and gold)
- **Multiple Donation Options**: PayPal, check, AmazonSmile, and monthly giving
- **Event Calendar**: Board meetings and foundation events
- **Impact Showcase**: Metrics, success stories, and program information
- **Board Information**: Leadership team with photos and bios
- **Contact Forms**: Easy communication with the foundation

## Website Structure

```
website/
├── index.html          # Homepage with hero, callouts, metrics, testimonials
├── about.html          # Mission, board, history, financials, FAQ
├── impact.html         # Impact metrics, programs, success stories
├── events.html         # Event calendar, featured events, sponsorships
├── give.html           # Donation methods, recognition levels, legacy giving
├── contact.html        # Contact form, board contacts, get involved
├── css/
│   └── styles.css      # Main stylesheet with Pioneer colors and responsive design
├── js/
│   └── main.js         # Interactive features (sliders, forms, animations)
└── images/             # Placeholder for photos and graphics
```

## Technology Stack

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript (Vanilla)**: No dependencies, lightweight interactions
- **No Build Process Required**: Simple static site deployment

## Color Palette

The website uses Pioneer High School's official three colors:

- **Primary Blue**: `#4A7BA7`
- **Dark Blue**: `#3A5F7D`
- **Light Blue**: `#6B9FCA`
- **White**: `#FFFFFF`
- **Black**: `#000000`
- **Supporting colors**: Grays for contrast and readability

## Setup & Deployment

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **No build process needed** - it's a static website

```bash
# Navigate to the website directory
cd website

# Open in your default browser (macOS)
open index.html

# Or use a simple HTTP server (Python)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment Options

#### Option 1: GitHub Pages (Free, Recommended)

1. Create a GitHub repository
2. Upload website files to the repository
3. Go to Settings → Pages
4. Select branch (main) and root folder
5. Your site will be live at `https://yourusername.github.io/repository-name`

#### Option 2: Netlify (Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `website` folder
3. Get instant deployment with custom domain support

#### Option 3: Custom Web Host

1. Purchase hosting from any provider (Bluehost, SiteGround, etc.)
2. Upload files via FTP/SFTP
3. Configure custom domain

### Custom Domain Setup

Once deployed, you can configure a custom domain like:
- `pioneerfoundation.org`
- `pioneerphsfoundation.org`
- `phsedfoundation.org`

## Content Customization Guide

### Updating Board Member Information

Edit `about.html` in the Board of Directors section:

```html
<div class="board-member">
    <div class="board-photo">INITIALS</div>
    <h4>Name</h4>
    <p class="board-role">Title</p>
    <p>Bio text here</p>
</div>
```

### Adding Board Member Photos

1. Save photos as JPG/PNG in `images/board/`
2. Update the board member div in `about.html`:

```html
<div class="board-photo" style="background-image: url('images/board/name.jpg'); background-size: cover;">
</div>
```

### Updating Contact Information

Edit the contact details in ALL HTML files' headers and footers:
- Email: `educationfoundationphs@gmail.com`
- Phone: `408-535-6310`
- Address: `1290 Blossom Hill Road, San Jose, CA 95118`

### Adding Events

Edit `events.html`:

```html
<div class="event-card" data-category="meeting">
    <div class="event-date">Date</div>
    <div class="event-image">📋</div>
    <div class="event-content">
        <h3>Event Title</h3>
        <p class="event-time">⏰ Time | 📍 Location</p>
        <p>Description</p>
    </div>
</div>
```

### Updating Impact Metrics

Edit the numbers in `index.html` and `impact.html`:

```html
<div class="metric-card">
    <div class="metric-number" data-value="500">500+</div>
    <div class="metric-label">Students Supported Annually</div>
</div>
```

### Adding Hero Images

1. Save high-quality images (1920x600px recommended) in `images/hero/`
2. Update hero slides in HTML files:

```html
<div class="hero-slide" style="background-image: url('images/hero/image.jpg');">
```

## Required Content & Next Steps

See `WEBSITE_PLAN.md` for a comprehensive list of content needed to fully populate the website.

### High Priority

1. **Board Member Photos**: Professional headshots for all board members
2. **Hero Images**: 3-5 high-quality photos of students, campus, activities
3. **Mission Statement**: Finalized mission, vision, and values text
4. **Impact Metrics**: Actual numbers for students served, funds raised, etc.
5. **Social Media Links**: Update placeholder links with actual URLs
6. **Event Details**: Confirm and add specific event dates and details

### Medium Priority

7. **Success Stories**: Gather 5-10 testimonials with photos
8. **Program Photos**: Images for each impact area
9. **Annual Reports**: Upload PDF reports to website
10. **Grant Application Process**: Document the process and add details

### Optional Enhancements

11. **Newsletter Integration**: Connect to Mailchimp or similar service
12. **Payment Processing**: Integrate Stripe or PayPal for direct donations
13. **Google Analytics**: Add tracking code for visitor analytics
14. **SEO Optimization**: Add meta descriptions, keywords, schema markup

## Form Integration

Currently, forms are set up with JavaScript that shows an alert. To make them functional:

### Option 1: Email Form Service (Formspree - Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Update form action in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Google Forms Integration

1. Create Google Form
2. Embed or link to form in contact page

### Option 3: Backend Integration

For advanced functionality, integrate with a backend service or create a simple PHP/Node.js form handler.

## Donation Integration

### PayPal Integration

Update the PayPal link in `give.html` with your actual PayPal donation button code:

1. Log in to PayPal Business account
2. Create Donation Button
3. Copy the generated HTML
4. Replace placeholder link in `give.html`

### Monthly Giving via PayPal

Set up subscription buttons in PayPal for:
- $5/month
- $10/month
- $25/month
- $40/month

## Browser Compatibility

Tested and works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Alt text placeholders for images

## Performance

- No external dependencies or frameworks
- Lightweight CSS and JavaScript
- Optimized for fast loading
- Mobile-first responsive design

## Maintenance

### Regular Updates Needed

- **Monthly**: Update event calendar, add news/success stories
- **Quarterly**: Update impact metrics, add testimonials
- **Annually**: Update board information, annual reports, financials

### Content Management

For easier content management, consider migrating to a CMS like:
- WordPress
- Wix
- Squarespace

This would allow non-technical users to update content without editing HTML.

## Support & Contact

For questions about this website:
- See `WEBSITE_PLAN.md` for detailed content requirements
- Contact web developer for technical issues
- Contact foundation board for content updates

## License & Credits

Website created for Pioneer High School Education Foundation.
Design inspired by San Jose Public Library Foundation website structure.

---

**Version**: 1.0
**Last Updated**: January 2025
**Status**: Ready for content population and deployment

## Quick Start Checklist

- [ ] Review all pages and content
- [ ] Update board member information and add photos
- [ ] Add actual photos to `/images` folder
- [ ] Update social media links
- [ ] Configure PayPal donation buttons
- [ ] Set up form submission (Formspree or similar)
- [ ] Add Google Analytics tracking code
- [ ] Test all links and forms
- [ ] Deploy to web host
- [ ] Configure custom domain
- [ ] Announce new website to community!
