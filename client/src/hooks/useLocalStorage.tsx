import { useState, useCallback } from "react";

export default function useLocalStorage(key: string, initialValue = {}) {
    const stored = window.localStorage.getItem(key);
    const persist = stored ? JSON.parse(stored) : null;
    const [storedValue, setStoredValue] = useState(persist ? persist : initialValue);
    if (persist && JSON.stringify(persist) !== JSON.stringify(storedValue)) {
        setStoredValue(persist);
    }
    const setValue = useCallback(
        newValue => {
            if (newValue) {
                window.localStorage.setItem(key, JSON.stringify(newValue));
            } else {
                window.localStorage.removeItem(key);
            }
            setStoredValue(newValue);
        },
        [key, setStoredValue]
    );
    return [storedValue, setValue];
}
