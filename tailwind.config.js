/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        cyber: {
          black: "#000000",
          dark: "#050505",
          red: "#ff0000",
          "red-bright": "#ff1a1a",
          "red-glow": "#ff3333",
          green: "#00ff00",
          "green-bright": "#1aff1a",
          "green-glow": "#33ff33",
          white: "#ffffff",
          gray: "#111111",
          "gray-light": "#1a1a1a",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "cyber-red": "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.5)",
        "cyber-red-lg": "0 0 20px rgba(255, 0, 0, 0.9), 0 0 40px rgba(255, 0, 0, 0.6)",
        "cyber-green": "0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.5)",
        "cyber-white": "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255, 0, 0, 0.8)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 0, 0, 1)" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 255, 0, 0.8)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 255, 0, 1)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "52%": { opacity: "0.3" },
          "54%": { opacity: "1" },
        },
        "glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "neon-flicker": {
          "0%, 100%": { 
            textShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000",
            opacity: "1"
          },
          "41%": {
            textShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000",
            opacity: "1"
          },
          "42%": {
            textShadow: "none",
            opacity: "0.8"
          },
          "43%": {
            textShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000",
            opacity: "1"
          },
          "45%": {
            textShadow: "none",
            opacity: "0.7"
          },
          "46%": {
            textShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000",
            opacity: "1"
          },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink": {
          "50%": { borderColor: "transparent" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "sun-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
            opacity: "0.3"
          },
          "50%": { 
            transform: "scale(1.05)",
            opacity: "0.5"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "pulse-green": "pulse-green 2s ease-in-out infinite",
        "scanline": "scanline 4s linear infinite",
        "flicker": "flicker 3s infinite",
        "glitch": "glitch 0.3s ease-in-out",
        "neon-flicker": "neon-flicker 2s infinite alternate",
        "typing": "typing 2s steps(40, end)",
        "blink": "blink 0.75s step-end infinite",
        "float": "float 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "count-up": "count-up 0.5s ease-out forwards",
        "sun-pulse": "sun-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
