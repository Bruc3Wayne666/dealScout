import React, {createContext, FC, useState} from 'react';

export interface ThemeContextType {
    theme: string
    handleSetTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider: FC<any> = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    const handleSetTheme = () => {
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{theme, handleSetTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider, ThemeContext};
