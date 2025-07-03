<<<<<<< HEAD
# Freshnest Shop - Complete E-commerce Solution

This repository contains two complementary projects for a modern grocery/fresh produce e-commerce platform:

1. **DSHOP** - Modern React frontend (main implementation)
2. **Freshnest Shop** - Alternative implementation with different components

## 🚀 Current Active Project: DSHOP

### Overview
A modern, responsive grocery store website built with React, Vite, and Tailwind CSS. Features a clean design with a focus on user experience and mobile-first responsive design.

### � Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and modern interface with smooth animations
- **Hero Section**: Eye-catching hero section with call-to-action
- **Product Showcase**: Featured products with ratings and pricing
- **Benefits Section**: Highlighting store benefits with icons
- **Mobile Navigation**: Mobile-friendly bottom navigation
- **Newsletter Signup**: Email subscription for updates
- **Footer**: Comprehensive footer with links and contact info

### 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library
- **ESLint** - Code linting

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/damintha01/Freshnest_Shop.git
cd Freshnest_Shop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

### DSHOP Components (Main Implementation)
```
src/
├── Component/
│   ├── Home/
│   │   ├── Home.jsx (Main landing page)
│   │   └── HomeImage/ (Hero images and assets)
│   ├── Navbar/
│   │   ├── NavBar.jsx (Navigation with search)
│   │   └── NavBarImage/
│   ├── BottomNav/
│   │   └── BottomNav.jsx (Mobile navigation)
│   ├── Products/
│   │   └── Products.jsx (Product showcase)
│   ├── Footer/
│   │   └── Footer.jsx (Site footer)
│   └── Benifits.jsx (Feature benefits)
├── App.jsx
├── main.jsx
└── index.css
```

### Alternative Components (Freshnest Shop)
```
src/
├── components/
│   ├── Home.jsx (Alternative home implementation)
│   ├── Navbar.jsx (Alternative navigation)
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── News.jsx
│   └── payment.jsx
└── Img/ (Image assets for vegetables and branding)
```

## 🎨 Key Components Explained

### DSHOP Implementation

#### Home Component
- Hero section with background image and call-to-action
- Responsive layout optimized for all screen sizes
- Integration with all other components

#### NavBar Component
- Logo and navigation links
- Search functionality with backdrop effects
- Shopping cart icon with badge counter
- Mobile hamburger menu with smooth transitions
- Fully responsive design

#### BottomNav Component
- Mobile-first bottom navigation
- Icon-based navigation for touch devices
- Hover effects and smooth transitions
- Hidden on larger screens (sm:hidden)

#### Products Component
- Responsive product grid (1-4 columns based on screen size)
- Product cards with images, ratings, and pricing
- Hover effects and "Add to cart" functionality
- Discount badges and wishlist functionality

#### Benefits Component
- Feature cards highlighting store benefits
- Icons from React Icons library
- Responsive grid layout with hover animations
- Modern card design with shadows and borders

#### Footer Component
- Multi-column responsive layout
- Company information and social media links
- Quick links and product categories
- Contact information and newsletter signup
- Bottom footer with legal links

## 🎯 Responsive Design Features

### Breakpoints Used
- **Mobile**: Base styles (up to 640px)
- **Small**: `sm:` (640px and up)
- **Medium**: `md:` (768px and up)
- **Large**: `lg:` (1024px and up)
- **Extra Large**: `xl:` (1280px and up)

### Mobile-First Approach
- Bottom navigation for mobile devices
- Touch-friendly buttons and interactive elements
- Optimized layouts for small screens
- Progressive enhancement for larger screens

### UI/UX Features
- Smooth hover animations and transitions
- Modern gradient backgrounds
- Consistent shadow effects and rounded corners
- Interactive buttons with hover states
- Card-based layouts throughout

## 🚀 Deployment Options

The project can be deployed to any static hosting service:

### Vercel (Recommended)
```bash
npm run build
# Connect repository to Vercel for automatic deployments
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 🎨 Customization Guide

### Color Scheme
The project uses a green and amber color palette:
- **Primary Green**: `green-50` to `green-600`
- **Accent Amber**: `amber-300` to `amber-500`
- **Neutral Gray**: `gray-50` to `gray-900`
- **Backgrounds**: `white`, `gray-50`, gradient combinations

### Typography
- **Headings**: Bold weights with responsive sizing
- **Body Text**: Regular weight with good contrast
- **Interactive Elements**: Medium to bold weights

### Spacing and Layout
- **Consistent Padding**: `p-4`, `p-6`, `p-8` progression
- **Responsive Margins**: `my-8`, `my-12` for sections
- **Grid Gaps**: `gap-4` to `gap-8` based on screen size

## 📱 Mobile Features

- Touch-optimized interface elements
- Bottom navigation for easy thumb access
- Swipe-friendly card layouts
- Optimized image loading and sizing
- Mobile-first responsive grid systems

## � Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support & Contact

If you have any questions or need help:
- Open an issue in the repository
- Contact: [Your contact information]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

*Experience the future of grocery shopping with our modern, responsive web application.*

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 6ba77741b2aad9c84c6b830f7d67673df0cbd82a
