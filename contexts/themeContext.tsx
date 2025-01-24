import { Colors, ThemeColors } from "@/constants/Colors";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Appearance, ColorSchemeName } from "react-native";

// interface Theme {
//   backgroundColor: string;
//   textColor: string;
// }

interface ThemeContextType {
  theme: ThemeColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

  const [theme, setTheme] = useState<ThemeColors>(colorScheme === "dark" ? Colors.dark : Colors.light);

  useEffect(() => {
    const listener = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      setColorScheme(colorScheme);
      setTheme(
        colorScheme === "dark" ? Colors.dark : Colors.light);
    };

    // Listen for system theme changes
    const subscription = Appearance.addChangeListener(listener);

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Colors.dark ? Colors.light : Colors.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
