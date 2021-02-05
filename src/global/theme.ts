export type ThemeType = typeof light;

export const light = {
  colors: {
    text: 'hsl(200, 15%, 8%)',
    bg: {
      primary: 'hsl(0, 0%, 98%)',
      secondary: 'hsl(0, 0%, 100%)',
    },
    input: 'hsl(0, 0%, 52%)',
    white: 'hsl(0, 0%, 100%)',
  },
};

export const dark: ThemeType = {
  colors: {
    text: 'hsl(0, 0%, 100%)',
    bg: {
      primary: 'hsl(207, 26%, 17%)',
      secondary: 'hsl(209, 23%, 22%)',
    },
    input: 'hsl(0, 0%, 100%)',
    white: 'hsl(0, 0%, 100%)',
  },
};

const theme = light;
export default theme;
