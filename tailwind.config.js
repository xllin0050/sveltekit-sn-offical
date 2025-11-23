// Tailwind v4 Config for supernapkin.com
export default {
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        link: "var(--color-link)",
      },

      fontFamily: {
        body: ["Helvetica Neue", "Arial", "sans-serif"],
        heading: ["Helvetica Neue", "Arial", "sans-serif"],
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.75rem",
        "2xl": "2.5rem",
        "5xl": "4rem",
      },

      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "96px",
      },

      maxWidth: {
        content: "1280px",
      },

      letterSpacing: {
        wide: "0.05em",
        tighter: "-0.01em",
      },

      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      borderRadius: {
        none: "0px",
      },

      boxShadow: {
        none: "none",
      },
    },
  },
};
