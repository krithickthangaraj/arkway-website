module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#60a5fa',   // blue-400
          dark: '#1e40af',    // blue-800
        },
        accent: {
          DEFAULT: '#f59e42', // orange-400
          light: '#fbbf24',   // yellow-400
        },
        background: '#f8fafc', // slate-50
        surface: '#ffffff',
        muted: '#64748b', // slate-500
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(37, 99, 235, 0.08)',
      },
    },
  },
  plugins: [],
}; 