import { useState } from "react";

export default function useLocalStorage(key, defaultValue){
    const [value, setValue] = useState( () => {
        return localStorage.getItem(key) || defaultValue
    })

    const storeValue = value => {
        setValue(value);
        localStorage.setItem(key, value)
    }

    return [value, storeValue]
}
