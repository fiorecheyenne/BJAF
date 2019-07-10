import { useState } from "react";

export default function useLocalStorage(key: string, initialValue: Object = {}): [Object, (newValue: Object) => void] {
    const storage = window.localStorage.getItem(key);
    const [storedValue, setStoredValue] = useState(storage ? JSON.parse(storage) : initialValue);
    return [
        storedValue,
        function(newValue: Object) {
            window.localStorage.setItem(key, JSON.stringify(newValue));
            setStoredValue(newValue);
        },
    ];
}
