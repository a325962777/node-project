import globals from 'globals';
import js from '@eslint/js';


export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  // ...standard,
  // ...prettier,
  {
    plugins: {
      // prettier: prettierPlugin,
    },
    rules: {
      // "prettier/prettier": "error", // הפעלת כללי Prettier כשגיאות ESLint
      'no-unused-vars': 'warn', // התרעה על משתנים לא בשימוש
      'quotes': ['error', 'single'], // הגדרת ציטוטים ליחידים
    //   'comma-dangle': ['error', 'always-multiline'], // דרישת פסיק נגרר ברשימות רב-שורתיות
    },
  },
];