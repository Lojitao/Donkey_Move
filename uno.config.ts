// uno.config.ts
import {
  defineConfig, presetUno,presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'
import presetIcons from '@unocss/preset-icons'
// import transformerVariantGroup from '@unocss/transformer-variant-group'
// import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  rules: [
    ['custom-grid-cols', { 'grid-template-columns': 'auto 1fr 1fr' }],
    ['pc-px', { 'padding-left': '240px', 'padding-right': '240px' }],
    ['pad-px', { 'padding-left': '20px', 'padding-right': '20px' }],
    ['mobile-px', { 'padding-left': '20px', 'padding-right': '20px' }],
    ['bg-promary', { 'background-color': '#E0A57E' }],
    [/^aspect-ratio\[([0-9]+)\/([0-9]+)\]$/, ([, w, h]) => {
      const width = parseFloat(w);
      const height = parseFloat(h);
      return {
        position: 'relative',
        paddingBottom: `${(height / width) * 100}%`,
      }
    }],
  ],
  theme: {
    // ...
    breakpoints: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      /* options */ 
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        RubikIso: ['Rubik Iso'],
        NotoSansTraditionalChinese: 'Noto Sans Traditional Chinese',
        
      },
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    })
  ],
  transformers: [
    transformerVariantGroup(),//簡化前綴
    transformerDirectives(),
    // .custom-div {
    //   @apply text-center my-0 font-medium;
    // }
   
  ],
  shortcuts: {
    // shortcuts to multiple utilities
    'primary':'text-red-600', 
  }
})