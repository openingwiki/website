export default {
  "*.{js,jsx,ts,tsx,css,md,json}": [
    "prettier --plugin-search-dir . --write .",
    "prettier --check --plugin-search-dir=.",
  ],
  "*.{js,jsx,ts,tsx}": "eslint . --fix",
};
