'use client';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react'; // Ensure lucide-react is installed

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [clientTheme, setClientTheme] = useState(null); // Handle hydration mismatch

  // Ensure the theme is set on the client after hydration
  useEffect(() => {
    setClientTheme(theme);
  }, [theme]);

  // Prevent rendering until theme is hydrated
  if (clientTheme === null) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {clientTheme === 'dark' ? <Sun className="text-secondary-400" /> : <Moon className="text-primary-600" />}
    </button>
  );
}
