# MealDrop - Food Delivery Website

A modern food delivery website built with React, TypeScript, and Webpack.

## 🚀 Live Demo

Visit the live website: [MealDrop on GitHub Pages](https://your-username.github.io/Restoran/)

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Webpack 5** - Module bundler
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Swiper** - Carousel components

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Restoran.git
cd Restoran
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

1. Push your code to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://your-username.github.io/Restoran/`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── data/               # Redux store and slices
├── img/                # Static images
├── pages/              # Page components
│   ├── home/           # Home page
│   ├── categories/     # Categories page
│   ├── food/           # Food category page
│   ├── restoran/       # Restaurant page
│   ├── allrestorans/   # All restaurants page
│   └── form/           # Order forms
├── widgets/            # Widget components
│   ├── header/         # Header component
│   └── Footer/         # Footer component
└── index.tsx           # App entry point
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Form Validation** - Client-side validation for order forms
- **Dynamic Routing** - React Router with dynamic parameters
- **State Management** - Redux Toolkit for cart management
- **SEO Optimized** - Meta tags and proper titles
- **Modern UI** - Clean and intuitive interface

## 🔧 Configuration

### Webpack Configuration

The project uses a custom webpack configuration optimized for:
- TypeScript support
- React development
- Asset optimization
- GitHub Pages deployment

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy on push to main branch

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, please open an issue in the GitHub repository. 