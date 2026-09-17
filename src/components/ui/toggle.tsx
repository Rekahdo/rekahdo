import { Switch } from "./switch"
import { rootDocument, themeIsDark, windowTheme } from "../../utils/utils";
import { useEffect, useState } from "react";

export function ThemeToggle() {

    const [isChecked, setIsChecked] = useState<boolean>(themeIsDark())

    useEffect(() => {
        applyTheme(isChecked);
        const system = windowTheme();

        function setToSystemTheme() {
            if (localStorage.dark === undefined) {
                localStorage.removeItem("dark");
                const isDark = themeIsDark();
                applyTheme(isDark); setIsChecked(isDark)
            }
        }

        if (localStorage.dark === undefined)
            system.addEventListener("change", setToSystemTheme)

        return () => {
            system.removeEventListener("change", setToSystemTheme)
        }
    }, []);

    function toggleOn() {
        applyTheme(true)
        localStorage.dark = true;
        setIsChecked(true)
    }

    function toggleOff() {
        applyTheme(false)
        localStorage.dark = false;
        setIsChecked(false)
    }

    function applyTheme(isDark: boolean) {
        isDark
            ? rootDocument.classList.add("dark")
            : rootDocument.classList.remove("dark")
    }

    return (
        <Switch variant={"thin"} size={"lg"} checked={isChecked}
            toggleOn={toggleOn} toggleOff={toggleOff} />
    )
}