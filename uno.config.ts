import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  theme: {
    breakpoints: {
      zero: '0px',
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
    },
  },
  presets: [presetIcons({ prefix: 'i-' }), presetUno()],
});
