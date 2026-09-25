import { Switch } from "./switch"
import { rootDocument, themeIsDark, windowTheme } from "../../utils/utils";
import { useEffect, useState, type ReactNode } from "react";
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
// =======================================================================
// =======================================================================



type MultiToggleType = {
    text: string;
    icon?: ReactNode;
}

type MultiToggleProps = {
    rootToggle?: boolean;
    selectIndex?: number;
    toggles: MultiToggleType[]
    className?: string;
    showTextAt?: "all" | "sm" | "md" | "lg";
    onChange?: (index: number) => void;
}

export function MultiToggle({ 
    selectIndex=0, 
    toggles, onChange, 
    showTextAt, 
    className,
    rootToggle=false,
}: MultiToggleProps) {
    
    const [selected, setSelected] = useState<number>(selectIndex)

    useEffect(() => {
        onChange?.(selected);
    }, [selected])

    function toggle(id?: number) {
        rootToggle 
        ? setSelected(s => s+1 < toggles.length ? s+1 : 0)
        : setSelected(id!);
    }

    return (
        <div onClick={rootToggle ? () => toggle() : undefined}
            className={cn(
                "inline-flex items-center gap-1 rounded-full text-foreground",
                "border border-border/60 bg-background/80 dark:bg-background/40 p-1 backdrop-blur-md",
                className
            )}>

            {toggles.map((btn, index) =>
                <Button
                    key={`${btn.text}-${index}`}
                    icon={btn.icon}
                    text={btn.text}
                    rounded={"full"}
                    aria-selected={index === selected}
                    active={index === selected}
                    variant={"toggle"} size={"toggle"}
                    showTextAt={showTextAt}
                    onClick={rootToggle ? undefined : () => toggle(index)}
                />)
            }

        </div>
    )
}