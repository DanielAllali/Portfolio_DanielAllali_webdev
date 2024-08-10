import React, { createContext, useState } from 'react';

// Create the context
export const Context = createContext();

// Create a provider component
export const ContextProvider = ({ children }) => {
    const [isHijack, setIsHijack] = useState(true);

    return (
        <Context.Provider value={{ isHijack, setIsHijack }}>
            {children}
        </Context.Provider>
    );
};
