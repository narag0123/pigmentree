/** @type {import('tailwindcss').Config} */
module.exports = {
    // calc사용
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            black100: "#171717",
            black80: "#434343",
            black60: "#707070",
            black40: "#9c9c9c",
            black20: "#c9c9c9",

            primary100: "#c8ff00",
            primary80: "#d5ff3c",
            primary60: "#ddfe65",
            primary40: "#edffaa",
            primary20: "#f6ffd6",

            point: "#ad00ff",
        },
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
