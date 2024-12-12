document.addEventListener("DOMContentLoaded", () => {
    const darkLightButton = document.getElementById("dark-light");

    darkLightButton.addEventListener("click", () => {
        const htmlElement = document.documentElement;

        // Alternar entre los modos oscuro y claro
        if (htmlElement.classList.contains("dark")) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });
});
