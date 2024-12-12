/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                pokemon: {
                    fire: "#f08030",
                    water: "#6890f0",
                    grass: "#78c850",
                    electric: "#f8d030",
                    ice: "#98d8d8",
                    fighting: "#c03028",
                    poison: "#a040a0",
                    ground: "#e0c068",
                    flying: "#a890f0",
                    psychic: "#f85888",
                    bug: "#a8b820",
                    rock: "#b8a038",
                    ghost: "#705898",
                    dark: "#705848",
                    dragon: "#7038f8",
                    steel: "#b8b8d0",
                    fairy: "#ee99ac",
                    normal: "#a8a878"
                }
            },
            spacing: {
                /* Add custom spacing (Width and Height included)*/ 72: "18rem",
                84: "21rem",
                96: "24rem"
            },
            screens: {
                mobile: "800px",
                pc: "1024px",
                ultrawide: "2560px"
            }
        }
    },
    plugins: []
};
