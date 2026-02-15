const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: './tailwind.config.js', // Link it here instead of @config in globals.css
    },
  },
};

export default config;
