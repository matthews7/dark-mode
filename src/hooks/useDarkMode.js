import {  useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';



export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        const className = 'dark-mode';
        const element = window.document.body;
        if (someValue) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }

    }, [someValue]);

    return [someValue, setSomeValue];
}

