import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // neutrals (dark UI)
        app: '#0B0D13',      // ana arka plan
        card: '#0F1522',     // kart/backdrop
        panel: '#121927',    // input/sekme zemin
        fg: '#E7E9F1',
        muted: '#9BA3B4',
        line: '#1F2737',

        // main palettes (Figma’daki "Main" değerlerine göre)
        primary: {           // Orange (Main ≈ 300)
          50:'#FFF4E5',100:'#FFE7C7',200:'#FFD199',300:'#FFB265', // Main
          400:'#FF9340',500:'#FF751A',600:'#E85E0B',700:'#C84C0A',800:'#9E3E0B',900:'#7D330C'
        },
        teal: {              // Secondary / Teal (Main ≈ 400)
          50:'#E6FFFB',100:'#C7FFF6',200:'#90F5E9',300:'#5BE8DA',400:'#2FD3C4', // Main
          500:'#15B5AA',600:'#10938C',700:'#0E7672',800:'#0E5E5C',900:'#0D4B49'
        },
        indigo: {            // Secondary / Indigo (Main ≈ 500)
          50:'#EEF0FF',100:'#DFE3FF',200:'#C6CCFF',300:'#A7AEFF',400:'#8A92FF',
          500:'#6E76FF', // Main
          600:'#5A60E6',700:'#4A4DC2',800:'#3C409C',900:'#2F3378'
        },
        purple: {            // Accent / Purple (Main ≈ 400)
          50:'#F7ECFF',100:'#EED8FF',200:'#DAB6FF',300:'#C392FF',400:'#A96DFF', // Main
          500:'#8F4BFF',600:'#7A38EA',700:'#642DC2',800:'#4F259B',900:'#3E1C78'
        },
        rose: {              // Secondary / Rose (Main ≈ 300)
          50:'#FFF0F4',100:'#FFDCE5',200:'#FFB9CD',300:'#FF94B7', // Main
          400:'#FF6B9C',500:'#FF417F',600:'#E72B69',700:'#C31E55',800:'#9B1845',900:'#7A1337'
        },

        // semantic
        success: { 50:'#E9FFE9',100:'#C7FFC8',200:'#97F59B',300:'#65EA70',400:'#35DC51',500:'#16C240',600:'#0FA037',700:'#0E7F31',800:'#0D642C',900:'#0C4F26' },
        danger:  { 50:'#FFE9EC',100:'#FFD3D8',200:'#FFAAAe',300:'#FF7A80',400:'#FF4E56',500:'#FF1F29',600:'#E3121F',700:'#BB0E1A',800:'#920B15',900:'#740910' },
        warn:    { 50:'#FFF9E6',100:'#FFF0BF',200:'#FFE184',300:'#FFD24D',400:'#FFC31A',500:'#E6A800',600:'#C48700',700:'#9C6900',800:'#7A5100',900:'#5E3F00' },
      },
      borderRadius: {
        r1: '2px',   // checkbox
        r2: '4px',   // icon-box
        r3: '8px',   // buttons, inputs, backdrop
        r4: '16px',  // cards
      },
      spacing: {
        s1:'2px', s2:'4px', s3:'8px', s4:'12px', s5:'16px',
        s6:'24px', s7:'32px', s8:'40px', s9:'48px', s10:'64px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.35)',
        glow: '0 0 120px rgba(47,211,196,0.25)', // teal aura (hero)
      },
      fontFamily: { sans: 'var(--font-sans)' },
    },
  },
  plugins: [],
}
export default config
