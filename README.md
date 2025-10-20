# HNG Stage 1 - Frontend Development Task

This project is a multi-page responsive website developed for the HNG Internship Stage 1 frontend task. It includes a profile card, contact form with validation, and an about me page, all built with semantic HTML, accessibility features, and responsive design.

## 🎯 Project Overview

A complete frontend implementation featuring:
- **Home Page**: Interactive profile card with avatar upload and real-time clock
- **Contact Us Page**: Form with comprehensive client-side validation
- **About Me Page**: Personal reflections and program goals

## 📁 Project Structure

```
hng-stage1-frontend
├── index.html           # Home page with profile card (Stage 0)
├── contact.html         # Contact form with validation
├── about.html           # About me page with reflections
├── style.css            # Complete responsive styling
├── script.js            # Form validation, avatar upload, time display
├── pic.jpg              # Profile avatar image
└── README.md            # Project documentation
```

## ✨ Features

### Contact Us Page
- ✅ Real-time form validation
- ✅ Email format validation (name@example.com)
- ✅ Message length validation (minimum 10 characters)
- ✅ Required field validation
- ✅ Success/error message display
- ✅ Form auto-reset after successful submission
- ✅ Full keyboard accessibility

### About Me Page
- ✅ Personal bio and background
- ✅ Program goals and aspirations
- ✅ Areas of low confidence
- ✅ Note to future self
- ✅ Extra thoughts and reflections
- ✅ Semantic HTML structure

### Home Page (Profile Card)
- ✅ Avatar upload functionality
- ✅ Real-time clock display (milliseconds)
- ✅ Social media links (YouTube, Instagram, TikTok)
- ✅ Hobbies and dislikes sections
- ✅ Responsive grid layout

### General Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Semantic HTML throughout
- ✅ ARIA attributes for accessibility
- ✅ Keyboard navigation support
- ✅ Dark theme design
- ✅ Smooth animations and transitions

## 🚀 Running the Project Offline

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Steps to Run

1. **Download the Project**
   ```bash
   git clone <repository-url>
   cd hng-stage1-frontend
   ```

2. **Open in Browser**
   - Double-click `index.html` to open the home page
   - Or right-click → "Open with" → Select your browser
   - Navigate between pages using the navigation menu

3. **Test All Features**
   - **Home Page**: Upload an avatar, view real-time clock
   - **Contact Page**: Test form validation with invalid/valid data
   - **About Page**: Read reflections and goals

## 🌐 External Dependencies

This project uses Font Awesome for social icons, loaded via CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
```

**Note**: An internet connection is required on first load to fetch icons. After caching, the project can run offline.

## 🎨 Design Features

- **Color Scheme**: Dark theme with cyan (#4da6ff) accents
- **Typography**: Monospace font for tech-focused aesthetic
- **Animations**: Smooth transitions and hover effects
- **Layout**: CSS Grid and Flexbox for responsive design

## 📱 Responsive Breakpoints

- **Desktop**: 1025px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 767px
- **Small Mobile**: 360px - 479px

## ✅ Validation Rules

### Contact Form
- **Full Name**: Required field
- **Email**: Required, must be valid format (name@example.com)
- **Subject**: Required field
- **Message**: Required, minimum 10 characters

### Error Handling
- Real-time validation on blur
- Clear error messages with red text
- Success message with green background
- Focus management for accessibility

## 🧪 Testing Checklist

- [ ] All navigation links work correctly
- [ ] Avatar upload changes profile image
- [ ] Time updates every second in milliseconds
- [ ] Contact form validates all fields
- [ ] Email format validation works
- [ ] Message length validation (10+ chars)
- [ ] Success message appears after valid submission
- [ ] Form resets after successful submission
- [ ] All pages are responsive on mobile/tablet/desktop
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] All data-testid attributes are present

## 📄 Data-testid Attributes

### Contact Page
- `test-contact-page` - Main container
- `test-contact-name` - Full name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

### About Page
- `test-about-page` - Main container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Low confidence section
- `test-about-future-note` - Future note section
- `test-about-extra` - Extra thoughts section

### Home Page
- `test-profile-card` - Profile card container
- `test-user-name` - User name
- `test-user-avatar` - Avatar image
- `test-avatar-upload` - Avatar upload input
- `test-user-caption` - Image caption
- `test-user-bio` - Biography
- `test-user-time` - Current time display
- `test-user-social-links` - Social links container
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list
- `test-user-signature` - Footer signature

## 🏆 HNG Internship

This project was created as part of the HNG Internship Stage 1 frontend development task.

**Learn more about HNG**:
- HNG Internship: https://hng.tech/internship
- HNG Premium: https://hng.tech/premium
- HNG Hire: https://hng.tech/hire


## 📜 License
This project is open-source and available under the MIT License.
