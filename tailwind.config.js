const plugin = require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        backgroundImage: {
            'custom-gradient': 'linear-gradient(90deg, #F37362 0%, #FFF 100%)',
        },
        aspectRatio: {
            '1/1': '1 / 1',
            '9/4': '600 / 280',
            '112/50': '112 / 50',
        },
        colors: {
            neutral: {
                0: '#FFFFFF',
                300: '#D1D0D5',
                500: '#8784A5',
                700: '#4B4869',
                900: '#0D082D',
            },
            primary: {
                500: '#F57463',
                700: '#E1604F',
            },
            transparent: 'transparent',
        },
    },
    plugins: [
        plugin(function ({addUtilities}) {
            addUtilities({
                '.text-custom-1': {
                    fontSize: 'var(--font-size-4xl)',
                    lineHeight: 'var(--line-height-110)',
                    letterSpacing: 'var(--letter-spacing-2)',
                    fontWeight: 'var(--font-weight-extrabold)',
                },
                '.text-custom-2': {
                    fontSize: 'var(--font-size-3xl)',
                    lineHeight: 'var(--line-height-110)',
                    letterSpacing: 'var(--letter-spacing-2)',
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.text-custom-3': {
                    fontSize: 'var(--font-size-2xl)',
                    lineHeight: 'var(--line-height-110)',
                    letterSpacing: 'var(--letter-spacing-2)',
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.text-custom-4': {
                    fontSize: 'var(--font-size-xl)',
                    lineHeight: 'var(--line-height-120)',
                    letterSpacing: 'var(--letter-spacing-3)',
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.text-custom-5-bold': {
                    fontSize: 'var(--font-size-xl)',
                    lineHeight: 'var(--line-height-110)',
                    letterSpacing: 'var(--letter-spacing-4)',
                    fontWeight: 'var(--font-weight-extrabold)',
                },
                '.text-custom-5-regular': {
                    fontSize: 'var(--font-size-xl)',
                    lineHeight: 'var(--line-height-110)',
                    letterSpacing: 'var(--letter-spacing-3)',
                    fontWeight: 'var(--font-weight-medium)',
                },
                '.text-custom-6': {
                    fontSize: 'var(--font-size-sm)',
                    lineHeight: 'var(--line-height-120)',
                    fontWeight: 'var(--font-weight-medium)',
                },
                '.text-custom-7': {
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: 'var(--line-height-120)',
                    fontWeight: 'var(--font-weight-regular)',
                    letterSpacing: 'var(--letter-spacing-5)',
                },
                '@screen md': {
                    '.text-custom-1': {
                        fontSize: 'var(--font-size-6xl)',
                    },
                    '.text-custom-2': {
                        fontSize: 'var(--font-size-5xl)',
                    },
                    '.text-custom-3': {
                        fontSize: 'var(--font-size-4xl)',
                    },
                    '.text-custom-4': {
                        fontSize: 'var(--font-size-3xl)',
                    },
                    '.text-custom-6': {
                        fontSize: 'var(--font-size-lg)',
                    },
                },
            });
        }),
    ],
}

