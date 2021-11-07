import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode=(initialValue) => {
    const [value, setValue] = useLocalStorage("formValues", initialValue);



    return [value, setValue];
}