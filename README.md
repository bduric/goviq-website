# GovIQ - Government AI Solutions Website

A modern, professional website for government AI services built with Next.js and Tailwind CSS.

## Features

- **Government-focused design** with professional aesthetics
- **Security & compliance emphasis** with FedRAMP and SOC 2 messaging
- **Responsive design** that works on all devices
- **Accessibility compliant** (WCAG 2.1 AA standards)
- **Static export ready** for government hosting requirements
- **Professional contact form** with government-appropriate fields

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a static export suitable for government hosting:

```bash
npm run build
```

This will generate a static site in the `out` directory that can be deployed to any web server.

## Customization

- **Colors**: Modify government colors in `tailwind.config.js`
- **Content**: Update text and messaging in component files
- **Branding**: Replace "GovIQ" with your company name throughout
- **Contact Form**: Connect the form to your backend service in `Contact.tsx`

## Compliance Features

- FedRAMP ready messaging
- SOC 2 compliance indicators
- Security-first design approach
- Government-appropriate color scheme
- Professional typography and layout

## Deployment

The site is configured for static export and can be deployed to:
- AWS S3 + CloudFront
- Government-approved hosting platforms
- Traditional web servers
- CDN services

## Support

For questions about customization or deployment, contact your development team.