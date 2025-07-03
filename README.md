# DSHOP - Modern Grocery Store Website

A modern, responsive grocery store website built with React, Vite, and Tailwind CSS. Features a clean design with a focus on user experience and mobile-first responsive design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and modern interface with smooth animations
- **Hero Section**: Eye-catching hero section with call-to-action
- **Product Showcase**: Featured products with ratings and pricing
- **Benefits Section**: Highlighting store benefits with icons
- **Mobile Navigation**: Mobile-friendly bottom navigation
- **Newsletter Signup**: Email subscription for updates
- **Footer**: Comprehensive footer with links and contact info

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dshop
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

```
src/
├── Component/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── HomeImage/
│   │       ├── bgcover.jpg
│   │       ├── women.png
│   │       ├── banana.png
│   │       ├── chips.png
│   │       └── vegitable.png
│   ├── Navbar/
│   │   ├── NavBar.jsx
│   │   └── NavBarImage/
│   │       └── logo.png
│   ├── BottomNav/
│   │   └── BottomNav.jsx
│   ├── Products/
│   │   └── Products.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   └── Benifits.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Components

### Home Component
- Hero section with background image
- Call-to-action buttons
- Responsive layout for all screen sizes

### NavBar Component
- Logo and navigation links
- Search functionality
- Shopping cart icon with badge
- Mobile hamburger menu
- Responsive design

### BottomNav Component
- Mobile-first bottom navigation
- Icon-based navigation for mobile devices
- Hover effects and transitions

### Products Component
- Product grid layout
- Product cards with images, ratings, and pricing
- Add to cart functionality
- Responsive grid (1-4 columns based on screen size)

### Benefits Component
- Feature cards highlighting store benefits
- Icons and descriptions
- Responsive grid layout

### Footer Component
- Company information and social links
- Quick links and categories
- Contact information
- Newsletter subscription
- Responsive multi-column layout

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Adaptive layouts for all screen sizes

### UI/UX Features
- Smooth hover animations and transitions
- Modern gradient backgrounds
- Shadow effects and rounded corners
- Interactive buttons with hover states
- Card-based layouts

### Performance
- Optimized images
- Efficient component structure
- Fast Vite build system

## 🔧 Customization

### Colors
The project uses a green and amber color scheme. You can customize colors in the Tailwind classes:
- Primary: `green-500`, `green-600`
- Secondary: `amber-300`, `amber-400`
- Background: `gray-50`, `gray-100`

### Breakpoints
Tailwind CSS breakpoints used:
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up

## 📱 Mobile Features

- Bottom navigation for mobile devices
- Touch-friendly buttons and links
- Optimized layouts for small screens
- Mobile-first responsive design

## 🚀 Deployment

The project can be deployed to any static hosting service:

### Vercel
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

Built with ❤️ using React, Vite, and Tailwind CSS

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
