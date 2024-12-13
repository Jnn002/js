import { useState, useEffect } from "react";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="bg-very-pale-blue h-[235px] rounded-b-[20px] pt-8 px-6 dark:bg-very-dark-blue-top mb-[970px] md:mb-[450px] xl:mb-[185px]">
            <h1 className="text-very-dark-blue-top text-2xl font-bold mb-1 dark:text-white">Social Media Dashboard</h1>
            <p className="text-dark-grayish-blue font-bold mb-6">Total Followers: 23,004</p>
            <hr className="bg-black mb-2"></hr>
            <div className="flex justify-between">
                <p className="text-desaturated-blue font-bold">Dark Mode</p>
                <label
                    htmlFor="darkmode"
                    className="border border-Toggle bg-gray-300 w-12 h-6 rounded-full cursor-pointer p-[3px] relative overflow-hidden"
                >
                    <input onClick={handleClick} type="checkbox" id="darkmode" className="sr-only peer" />
                    <div className="w-full h-full peer-checked:bg-toggle-gradient absolute top-0 left-0"></div>
                    <div className="w-[16px] h-[16px] bg-white rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>
    );
};
