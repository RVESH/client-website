SouthBridge V1 — Production Website Safety & Delivery Standard

Purpose

This document defines when a SouthBridge website can be considered production-ready and appropriately secured for its intended use.

It is a practical standard for restaurant websites, portfolios, local-business websites, marketing sites, interactive websites, and larger applications.

Important: No website can honestly be guaranteed 100% safe against every possible threat. The professional goal is to reduce risk, protect data, handle failures safely, and maintain the website according to its requirements.

1. What “Production-Safe” Means

A website is not production-ready merely because:

It looks good

It works on the developer's PC

npm run build succeeds

HTTPS is enabled

Production readiness means checking:

Security
+
Data & Privacy
+
Reliability
+
Performance
+
Accessibility
+
Browser/device compatibility
+
Error handling
+
Monitoring
+
Backup/recovery
+
Deployment
+
Maintenance

The required level depends on what the website actually does.

2. Security

For every production website:

✓ HTTPS/TLS
✓ Secure hosting configuration
✓ Security headers where appropriate
✓ No secrets in frontend source
✓ No unnecessary API keys exposed
✓ Dependencies reviewed and maintained
✓ User input treated as untrusted
✓ External links handled safely
✓ No unnecessary permissions

If a backend exists:

✓ Server-side validation
✓ Authentication security
✓ Authorization
✓ Rate limiting
✓ Brute-force protection
✓ Input validation
✓ XSS protection
✓ SQL/NoSQL injection prevention
✓ Secure cookies where applicable
✓ CSRF protection where applicable
✓ Safe file uploads
✓ Safe error responses

Critical rule

Frontend validation is not security.

React validation
      ↓
Not sufficient
      ↓
Server-side validation is still required

3. Authentication & Authorization

For websites with accounts:

Authentication → Who are you?
Authorization  → What are you allowed to access?

Check:

✓ Password hashing
✓ Secure session/token handling
✓ Session expiration where appropriate
✓ Logout behavior
✓ Password-reset security
✓ OTP security if used
✓ Rate limiting
✓ Authorization on protected resources
✓ Protection against account/data enumeration where appropriate

Never put these in frontend source:

passwords
database credentials
private tokens
secret API keys

4. Data & Privacy

If a website collects user information:

User
 ↓
HTTPS
 ↓
API/server
 ↓
Validation
 ↓
Authorization
 ↓
Database

Database requirements:

✓ Encrypted connection
✓ Least-privilege access
✓ Strong credentials/secrets management
✓ Backups
✓ Appropriate retention
✓ Sensitive-data minimization
✓ No passwords/tokens in logs

Also consider the privacy/data-protection requirements applicable to the client's country, users, and business.

Do not collect data the website does not need.

5. Reliability

Production failures can come from outside the code:

API unavailable
Database unavailable
Third-party API failure
CDN failure
Image failure
DNS problem
Hosting outage
SSL/certificate problem
Expired domain
Bad deployment
Missing environment variable
Unexpected traffic spike

Use appropriate:

✓ Timeouts
✓ Error handling
✓ Graceful failure
✓ Retries where appropriate
✓ Loading states
✓ Empty states
✓ Error states
✓ Fallback UI

Never allow one failed image or third-party service to permanently freeze the whole website.

6. Performance

Check:

✓ Image optimization
✓ WebP/AVIF where appropriate
✓ Lazy loading below the fold
✓ Correct eager loading for critical content
✓ Optimized fonts
✓ Reduced unnecessary JavaScript
✓ Caching
✓ CDN where appropriate
✓ Compressed assets
✓ Reasonable bundle size
✓ Core Web Vitals

SouthBridge Foundation rule

Reusable components must not introduce unnecessary performance problems.

Examples:

Slider
→ clean timers/listeners

Modal
→ clean event listeners

Preloader
→ never remain stuck indefinitely

Gallery
→ do not eagerly load every image

Animation
→ respect reduced-motion where appropriate

7. Accessibility

Check:

✓ Semantic HTML
✓ Keyboard navigation
✓ Visible focus states
✓ Correct button/link usage
✓ Appropriate alt text
✓ Form labels
✓ Accessible names
✓ Dialog/modal semantics
✓ Escape behavior for dialogs where appropriate
✓ Reasonable color contrast
✓ Reduced-motion consideration
✓ Screen-reader-friendly states

Use:

<button>

for actions.

Use:

<a href="...">

for navigation.

Avoid clickable <div> elements when semantic elements are available.

8. Responsive Testing

Test:

✓ Small mobile
✓ Normal mobile
✓ Large mobile
✓ Tablet
✓ Laptop
✓ Desktop
✓ Large desktop

Check:

✓ No horizontal overflow
✓ Navigation
✓ Buttons
✓ Typography
✓ Images
✓ Modals
✓ Sliders
✓ Forms
✓ Cards
✓ Footer
✓ Long text
✓ Short text

9. Browser Testing

Test the major browsers relevant to the target audience:

✓ Chrome
✓ Edge
✓ Firefox
✓ Safari where relevant
✓ Mobile browsers where relevant

“Works in Chrome on my PC” is not sufficient.

10. Component-Level Production Standard

Every reusable SouthBridge Foundation component should ideally satisfy:

Visual
+
Responsive
+
Accessible
+
Performance-safe
+
Keyboard-safe
+
Cleanup-safe
+
Failure-safe

Modal

✓ open/close
✓ Escape
✓ backdrop close where appropriate
✓ body-scroll restoration
✓ keyboard access
✓ accessible dialog semantics
✓ cleanup

Preloader

✓ loading state
✓ progress state
✓ DOM readiness
✓ font readiness where used
✓ critical/non-lazy images
✓ timeout protection
✓ minimum display time
✓ final 100% state
✓ guaranteed completion

Slider

✓ autoplay where applicable
✓ pause on hover
✓ pause on focus
✓ touch/swipe where applicable
✓ keyboard controls
✓ previous/next controls
✓ responsive behavior
✓ reduced motion
✓ timer cleanup
✓ listener cleanup
✓ no accidental overflow

Gallery

✓ optimized images
✓ lazy loading below fold
✓ meaningful alt text
✓ responsive layout
✓ optional modal/lightbox
✓ sensible broken-image handling

11. Forms

Every production form should consider:

✓ Required fields
✓ Input validation
✓ Error messages
✓ Success state
✓ Loading state
✓ Network failure state
✓ Duplicate-submission protection
✓ Accessible labels
✓ Keyboard operation

If a backend is involved:

✓ Server-side validation
✓ Rate limiting
✓ Spam protection where appropriate
✓ Safe error handling
✓ Secure storage

Never trust data simply because it came from your React form.

12. Third-Party Services

Common dependencies include:

Maps
Analytics
Payment providers
Email providers
CDNs
Fonts
Social APIs
Booking systems
CMS

Define what happens when a non-critical third-party service fails.

Example:

Booking API fails
      ↓
Do not freeze page
      ↓
Show useful error/fallback
      ↓
Allow retry or alternative contact

13. Deployment

Before delivery:

✓ Production environment configured
✓ Environment variables correct
✓ No development secrets committed
✓ Production build succeeds
✓ Correct domain
✓ HTTPS active
✓ Correct redirects
✓ Correct favicon
✓ Correct metadata
✓ Correct robots.txt
✓ Correct assets
✓ No broken routes

Run:

npm run build

The production build must succeed.

14. Console & Network Check

Before delivery, inspect browser DevTools:

Console
Network
Application/Storage

Investigate:

❌ React errors
❌ Failed requests
❌ 404 assets
❌ Missing images
❌ CORS errors
❌ Broken fonts
❌ Unhandled promise errors
❌ Repeated API failures
❌ Exposed secrets

15. SEO & Metadata

For public websites:

✓ Page title
✓ Meta description
✓ Canonical URL where appropriate
✓ Open Graph metadata
✓ Social sharing image
✓ Favicon
✓ robots.txt
✓ Sitemap where appropriate
✓ Semantic headings
✓ Image alt text

SEO is separate from security but part of professional delivery.

16. Backup & Recovery

For dynamic websites:

Database backup
+
Asset backup
+
Deployment rollback
+
Recovery procedure

A backup that has never been tested for restoration should not automatically be treated as a reliable recovery plan.

17. Monitoring

Monitor according to the website's risk:

✓ Uptime
✓ Application errors
✓ API failures
✓ Performance
✓ Server/resource usage
✓ Database health
✓ Security events

A static brochure website may need little monitoring.

A SaaS or e-commerce system needs much more.

18. Maintenance

Not every website needs continuous developer presence.

Simple static website

Examples:

Restaurant
Portfolio
Agency
Local Business
Simple Hotel website

If there is no:

Login
Database
Payment
Complex backend

the site may run for a long time without intervention.

Periodic maintenance is still useful for:

Domain renewal
Hosting
Security updates
Dependency updates
Content changes
Performance
Monitoring

Interactive website

If it contains:

Booking
Accounts
Database
CMS
Search
Newsletter
Admin panel

more regular maintenance is required.

Business-critical website

If it handles:

Payments
Financial data
Sensitive personal information
Large-scale accounts
Critical business operations

security, monitoring, backups, incident response, and maintenance become significantly more important.

19. Risk Classification

V1 — Static / Marketing

Examples:

Restaurant
Portfolio
Agency
Local Business
Hotel brochure

Focus:

HTTPS
Security headers
Optimized assets
Responsive design
Accessibility
Safe forms
Production build
Monitoring as appropriate
Correct deployment

V2 — Interactive

Examples:

Booking
Contact backend
Newsletter
CMS
Search
Dynamic content

Add:

API security
Rate limiting
Server-side validation
Authorization
Logging
Database security
Monitoring
Backup/recovery

V3 — High Risk / Business Critical

Examples:

Payments
Accounts
Financial data
Sensitive personal data
Large SaaS
Admin systems

Requires a stronger security engineering process:

Threat modeling
Strong access controls
Advanced monitoring
Incident response
Security testing
Dependency management
Backup/recovery strategy
Potential audits/compliance requirements

20. Never Promise “100% Safe”

Do not tell a client:

“This website is 100% secure forever.”

Professional wording:

“The website has been tested and prepared for production according to its intended functionality, risk level, and deployment requirements.”

Security is risk reduction and continuous improvement.

21. SouthBridge Foundation Standard

When creating any reusable Foundation:

Modal
Preloader
Slider
Pagination
Gallery
Header
Button
Section

evaluate it by:

Beautiful
+
Responsive
+
Accessible
+
Performance-safe
+
Keyboard-safe
+
Cleanup-safe
+
Failure-safe

Do not evaluate a Foundation component only by appearance.

22. Final Production Delivery Checklist

Build

□ npm run build passes
□ No build errors
□ Unexpected warnings investigated

UI

□ Desktop checked
□ Tablet checked
□ Mobile checked
□ Small viewport checked
□ No horizontal overflow
□ Typography checked
□ Images checked
□ Animations checked

Navigation

□ Every internal route works
□ Every button works
□ External links work
□ Unknown route handled
□ Refresh behavior checked

Components

□ Header works
□ Footer works
□ Buttons work
□ Modals work
□ Preloader completes
□ Sliders work
□ Gallery works
□ Forms work

Accessibility

□ Keyboard navigation
□ Focus states
□ Buttons are buttons
□ Links are links
□ Images have appropriate alt behavior
□ Modals are accessible
□ Forms have labels

Security

□ HTTPS
□ No secrets in frontend
□ Input validation
□ Backend validation if applicable
□ Authentication checked if applicable
□ Authorization checked if applicable
□ Rate limiting where applicable
□ Dependencies reviewed

Performance

□ Images optimized
□ Lazy loading used appropriately
□ Critical assets prioritized
□ No unnecessary requests
□ No obvious performance bottlenecks

Production

□ Correct domain
□ SSL working
□ Favicon working
□ Metadata correct
□ robots.txt correct
□ Environment variables correct
□ Production deployment verified
□ Error/404 behavior checked

Recovery

□ Backup strategy exists where applicable
□ Rollback strategy known
□ Important assets recoverable

23. Final SouthBridge Rule

A website is ready for delivery when:

FUNCTIONAL
    +
SECURE
    +
RESPONSIVE
    +
ACCESSIBLE
    +
PERFORMANT
    +
RELIABLE
    +
MONITORED AS APPROPRIATE
    +
RECOVERABLE AS APPROPRIATE
    +
PROPERLY DEPLOYED
    +
TESTED

Not every website needs the same engineering level.

The larger the data, traffic, business impact, and security risk, the stronger the production controls must be.

For a simple V1 restaurant/portfolio website, do not over-engineer it.

For websites with accounts, payments, databases, or sensitive data, do not treat them like simple static websites.