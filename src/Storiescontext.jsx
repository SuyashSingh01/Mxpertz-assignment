
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoriesContext = createContext();

export const StoriesProvider = ({ children }) => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axios.get('https://mxpertztestapi.onrender.com/api/sciencefiction');
                setStories(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchStories();
    }, []);

    return (
        <StoriesContext.Provider value={{ stories }}>
            {children}
        </StoriesContext.Provider>
    );
};
