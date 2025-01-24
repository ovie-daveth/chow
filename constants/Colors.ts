// color.interface.ts

interface Shade {
  light: string;
  medium: string;
  dark: string;
}

interface ComponentColors {
  background: string;
  text: string;
}

interface ButtonColors extends ComponentColors {}

interface InputColors extends ComponentColors {
  border: string;
}

interface LinkColors {
  text: string;
  hover: string;
}

interface IconColors {
  primary: string;
  secondary: string;
}

export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  button: ButtonColors;
  input: InputColors;
  link: LinkColors;
  icon: IconColors;
  shades: {
    orange: Shade;
    green: Shade;
    red: Shade;
  };
}

export interface ColorsInterface {
  light: ThemeColors;
  dark: ThemeColors;
}

export const Colors: ColorsInterface = {
  light: {
    background: "#ffffff", // White background
  text: "#333333", // Dark gray text
  primary: "#fb923c", // Dark orange (equivalent to bg-orange-400)
  secondary: "#22c55e", // Green (equivalent to bg-green-400)
  button: {
    background: "#fb923c", // Same as primary
    text: "#ffffff", // White text on buttons
  },
  input: {
    background: "#f3f4f6", // Light gray input background
    border: "#d1d5db", // Light gray border
    text: "#333333", // Dark gray input text
  },
  link: {
    text: "#fb923c", // Orange links
    hover: "#f97316", // Slightly darker orange on hover
  },
  icon: {
    primary: "#fb923c", // Orange icons
    secondary: "#22c55e", // Green icons
  },
  shades: {
    orange: {
      light: "#fed7aa", // Light orange
      medium: "#fb923c", // Medium orange
      dark: "#f97316", // Dark orange
    },
    green: {
      light: "#bbf7d0", // Light green
      medium: "#22c55e", // Medium green
      dark: "#16a34a", // Dark green
    },
    red: {
      light: "#fecaca", // Light red
      medium: "#f87171", // Medium red
      dark: "#ef4444", // Dark red
    },
  },
  },
  dark: {
    background: "#000000", // Black background
  text: "#f3f4f6", // Light gray text
  primary: "#fb923c", // Dark orange (equivalent to bg-orange-400)
  secondary: "#22c55e", // Green (equivalent to bg-green-400)
  button: {
    background: "#fb923c", // Same as primary
    text: "#000000", // Black text on buttons
  },
  input: {
    background: "#1f2937", // Dark gray input background
    border: "#374151", // Darker gray border
    text: "#f3f4f6", // Light gray input text
  },
  link: {
    text: "#fb923c", // Orange links
    hover: "#f97316", // Slightly darker orange on hover
  },
  icon: {
    primary: "#fb923c", // Orange icons
    secondary: "#22c55e", // Green icons
  },
  shades: {
    orange: {
      light: "#fed7aa", // Light orange
      medium: "#fb923c", // Medium orange
      dark: "#f97316", // Dark orange
    },
    green: {
      light: "#bbf7d0", // Light green
      medium: "#22c55e", // Medium green
      dark: "#16a34a", // Dark green
    },
    red: {
      light: "#fecaca", // Light red
      medium: "#f87171", // Medium red
      dark: "#ef4444", // Dark red
    },
  },
  },
};
