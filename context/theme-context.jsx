import { useState, createContext, useEffect } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (window) {
        if (localStorage.getItem("darkMode")) {
            setDark(true);
        }
        }
    }, []);
    useEffect(() => {
        if (window) {
        if (dark) {
            localStorage.setItem("darkMode", "true");
        } else {
            localStorage.setItem("darkMode", "false");
        }
            document.documentElement.classList.toggle("dark", localStorage.getItem("darkMode") === "true");
        }
    }, [dark]);
    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
        {children}
        </ThemeContext.Provider>
    );
}
export { ThemeContext, ThemeProvider };