function toRgba(cssVariable) {
    return ({ opacityValue }) => {
        const color = `var(${cssVariable})`;
        return `rgba(${color}, ${opacityValue || 1})`;
    };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            'mobile': '640px',
            'tablet': '1024px',
            'desktop': '1440px',
            'tv': '1920px',
        },
        extend: {
            colors: {
                primary: toRgba('--primary'),
                secondary: toRgba('--secondary'),
                tertiary: toRgba('--tertiary'),
                quaternary: toRgba('--quaternary'),
                hover: toRgba('--hover'),
                click: toRgba('--click'),
                icon: toRgba('--icon'),
                outline: toRgba('--outline'),
                divider: toRgba('--divider'),
                'bg-light': toRgba('--bg-light'),
                'bg-dark': toRgba('--bg-dark'),
                'bg-disabled': toRgba('--bg-disabled'),
                'text-primary': toRgba('--text-primary'),
                'text-secondary': toRgba('--text-secondary'),
                'text-tertiary': toRgba('--text-tertiary'),
                'text-disabled': toRgba('--text-disabled')
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                focus: 'var(--shadow-focus)',
                outline: 'var(--shadow-outline)',
                'button-focus': 'var(--shadow-button-focus)',
            },
            blur: {
                default: 'var(--blur)',
            }
        }
    },
    plugins: [],
}