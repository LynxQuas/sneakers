/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                paleOrange: "hsl(25, 100%, 94%)",
            },
            keyframes: {
                slideIn: {
                    "0%": { transform: "translate(-100%)" },
                    "100%": { transform: "translate(0%)" },
                },
            },

            animation: {
                slideIn: "slideIn ease-in-out 0.3s",
            },
        },
    },
    plugins: [],
};
