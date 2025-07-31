module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textStrokeWidth: {
                DEFAULT: '1px',
                '2': '2px',
            },
            textStrokeColor: {
                black: '#000',
                white: '#fff',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-stroke': {
                    '-webkit-text-stroke': '1px black',
                },
                '.text-stroke-white': {
                    '-webkit-text-stroke': '1px white',
                },
                '.text-stroke-2': {
                    '-webkit-text-stroke': '2px black',
                },
            })
        },
    ],
}
