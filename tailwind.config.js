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
                primary: 'rgba(var(--primary), <alpha-value>)',
                secondary: 'rgba(var(--secondary), <alpha-value>)',
                tertiary: 'rgba(var(--tertiary), <alpha-value>)',
                quaternary: 'rgba(var(--quaternary), <alpha-value>)',
                hover: 'rgba(var(--hover), <alpha-value>)',
                click: 'rgba(var(--click), <alpha-value>)',
                icon: 'rgba(var(--icon), <alpha-value>)',
                outline: 'rgba(var(--outline), <alpha-value>)',
                divider: 'rgba(var(--divider), <alpha-value>)',
                disabled: 'rgba(var(--text-disabled), <alpha-value>)',
            },
            backgroundColor: {
                light: 'rgba(var(--bg-light), <alpha-value>)',
                dark: 'rgba(var(--bg-dark), <alpha-value>)',
                disabled: 'rgba(var(--bg-disabled), <alpha-value>)',
            },
            textColor: {
                gray: {
                    primary: 'rgba(var(--text-primary), <alpha-value>)',
                    secondary: 'rgba(var(--text-secondary), <alpha-value>)',
                    tertiary: 'rgba(var(--text-tertiary), <alpha-value>)',
                },
                disabled: 'rgba(var(--text-disabled), <alpha-value>)',
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