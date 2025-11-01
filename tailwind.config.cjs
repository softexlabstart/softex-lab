module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        purple: '#8b5cf6',
        success: '#10b981'
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
