import { Switch } from "./switch"
import { rootDocument, themeIsDark, windowTheme } from "../../utils/utils";
import { useEffect, useState } from "react";
import { LayoutGrid, Rows3 } from "lucide-react";
import { cn } from "cn";
import { Button } from "./button";

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




// =======================================================================




export type StackMode = "Compact" | "Detailed";

type StackToggleType = {
    mode?: StackMode;
    onChange: (mode: StackMode) => void;
    showTextAt?: "all" | "sm" | "md" | "lg";
    className?: string;
}

export function StackToggle({ onChange, showTextAt, className }: StackToggleType) {
    const btns = [
        { icon: <LayoutGrid />, text: "Compact" },
        { icon: <Rows3 />, text: "Detailed" },
    ]

    const [mode, setCurrentMode] = useState<StackMode>('Compact')

    useEffect(() => {
        onChange(mode);
    }, [mode])

    function toggle() {
        setCurrentMode(mode === btns[0].text ? 'Detailed' : 'Compact');
    }

    return (
        <div onClick={toggle}
            className={cn(
                "inline-flex items-center gap-1 rounded-full",
                "border border-border/60 bg-background/60 p-1 backdrop-blur-md",
                className
            )}>

            {btns.map((btn, i) =>
                <Button
                    key={`${btn.text}-${i}`}
                    icon={btn.icon}
                    text={btn.text}
                    rounded={"full"}
                    aria-selected={btn.text === mode}
                    active={btn.text === mode}
                    variant={"toggle"} size={"toggle"}
                    showTextAt={showTextAt}
                />)
            }
        </div>
    )
}