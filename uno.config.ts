// uno.config.ts
import {
  defineConfig, presetUno,presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'
import presetIcons from '@unocss/preset-icons'
// import transformerVariantGroup from '@unocss/transformer-variant-group'
// import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: { // shortcuts to multiple utilities
    'primary':'text-red-600',
    'bg-primary':'bg-[#E0A57E]',
    'sub-color': 'text-#3061A7',
    'bg-sub': 'bg-[#3061A7]',
    'pc-px':'px-[240px]',
    'pad-px':'px-[20px]',
    'mobile-px':'px-[20px]',
    'center-vertically':'left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2',
    'center-horizontal':'left-1/2 -translate-x-1/2'
  },
  rules: [
    ['custom-grid-cols', { 'grid-template-columns': 'auto 1fr 1fr' }],
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
    breakpoints: {
      sm: '375px',
      md: '768px',
      md_1024: '1024px',
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
      },
    })
  ],
  transformers: [
    transformerVariantGroup(),//簡化前綴
    transformerDirectives(),
    // .custom-div {
    //   @apply text-center my-0 font-medium;
    // }
  ]
})