import { themes } from './colors';

function generateThemeClass() {
  const colorThemes: Record<string, Record<string, string>> = {};

  Object.entries(themes).forEach(([themeName, colorSets]) => {
    const themeClassName = `.theme-${themeName}`;
    colorThemes[themeClassName] = {};

    Object.entries(colorSets).forEach(([colorSet, shades]) => {
      Object.entries(shades).forEach(([shade, value]) => {
        colorThemes[themeClassName][`--${colorSet}-${shade}`] = value;
      });
    });
  });

  return colorThemes;
}

function themePlugin({
  addUtilities,
}: {
  addUtilities: (utilities: Record<string, Record<string, string>>) => void;
}) {
  const colorThemes = generateThemeClass();
  addUtilities(colorThemes);
}

export { generateThemeClass, themePlugin };
