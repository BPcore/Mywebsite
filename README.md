# BPcore Silicon — NeauraEdge™ NPU Website

A marketing site for BPcore Silicon's NeauraEdge™ NPU IP. This site contains information on technology, licensing, deliverables, performance, and contact details for evaluation requests.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern Technology Stack**: Built with React, TypeScript, and React Router
- **Fast Performance**: Optimized for speed and user experience
- **Clean Code**: Well-organized and maintainable codebase
- **SEO Ready**: Structured for search engine optimization

## Pages

- **Home**: Welcome page with hero section and feature highlights
- **About**: Information about the company and our story
- **Services**: Detailed overview of services offered
- **Contact**: Contact form and business information

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer.

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

This builds the app for production in the `build` folder.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Header.tsx     # Navigation header
│   └── Footer.tsx     # Site footer
├── pages/             # Main page components
│   ├── Home.tsx       # Homepage
│   ├── About.tsx      # About page
│   ├── Services.tsx   # Services page
│   └── Contact.tsx    # Contact page
├── App.tsx            # Main app component with routing
├── App.css            # Main styles
├── index.tsx          # App entry point
└── index.css          # Global styles
```

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **React Router Dom** - Client-side routing
- **CSS3** - Modern styling with Grid and Flexbox
- **Responsive Design** - Mobile-first approach

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Customization

Feel free to customize the content, colors, and styling to match your brand:

1. **Content**: Update the text in each page component
2. **Styling**: Modify the CSS files to change colors, fonts, and layout
3. **Logo**: Replace "MyWebsite" in the header with your actual logo
4. **Contact Info**: Update the contact information in the Contact page

## Browser Support

This website works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).