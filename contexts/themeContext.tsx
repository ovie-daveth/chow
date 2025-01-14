import { Colors } from "@/constants/Colors";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Appearance, ColorSchemeName } from "react-native";

interface Theme {
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

  const [theme, setTheme] = useState<Theme>({
    backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background,
    textColor: colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
  });

  useEffect(() => {
    const listener = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      setColorScheme(colorScheme);
      setTheme({
        backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background,
        textColor: colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
      });
    };

    // Listen for system theme changes
    const subscription = Appearance.addChangeListener(listener);

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === Colors.light.background ? Colors.dark.background : Colors.light.background,
      textColor: prevTheme.textColor === Colors.light.text ? Colors.dark.text : Colors.light.text,
    }));
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
