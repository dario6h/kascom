/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e5edff',
          200: '#d1ddff',
          300: '#adc4ff',
          400: '#81afdd',
          500: '#1b78de',
          600: '#042c54',
          700: '#031b34',
          800: '#040c18',
          900: '#020508',
        },
        accent: {
          orange: '#F49867',
          coral: '#FF8A71',
          purple: '#AE67FA',
          yellow: '#f5a623',  // Updated to match new softer accent
        },
        // Design System Colors
        universal: {
          bg: '#f5f5f5',      // Universal page background
          white: '#ffffff',   // Card backgrounds
          accent: '#f5a623',  // Accent sections
        },
        text: {
          primary: '#2d3748',    // Main headings
          secondary: '#4a5568',  // Subheadings
          tertiary: '#718096',   // Body text
          muted: '#a0aec0',      // Subtle text
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
        'gradient-text': 'linear-gradient(89.97deg, #fbbf24 1.84%, #F49867 102.67%)',
        'gradient-bar': 'linear-gradient(103.22deg, #fbbf24 -13.86%, #F49867 99.55%)',
      },
    },
  },
  plugins: [],
}