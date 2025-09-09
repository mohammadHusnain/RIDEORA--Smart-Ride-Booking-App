import { createContext, useState, useEffect } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(() => {
        const savedCaptain = localStorage.getItem("captain");
        return savedCaptain ? JSON.parse(savedCaptain) : null;
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Keep captain in localStorage when it changes
    useEffect(() => {
        if (captain) {
            localStorage.setItem("captain", JSON.stringify(captain));
        } else {
            localStorage.removeItem("captain");
        }
    }, [captain]);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;
