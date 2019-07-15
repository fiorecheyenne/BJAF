import { useState, useCallback } from "react";

export default function useLocalStorage(key, initialValue = {}) {
    const persist = JSON.parse(window.localStorage.getItem(key));
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
        [storedValue, setStoredValue]
    );
    return [storedValue, setValue];
}
