'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Group } from "@base-ui/react/internals/resolveValueLabel";

export interface FilterOption {
    label: string;
    value: string;
}

export interface FilterSelectProps {
    items: (string | FilterOption)[];
    value?: string | null;
    onValueChange?: (value: string | null) => void;
    defaultValue?: string;
    label?: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

function normalize(items: (string | FilterOption)[]): FilterOption[] {
    return items.map((item) =>
        typeof item === "string" ? { label: item, value: item } : item
    );
}

export function FilterSelect({
    items,
    onValueChange,
    defaultValue,
    label = "Filter",
    placeholder = "Select...",
    className,
    disabled,
}: FilterSelectProps) {
    if (!items) return null;

    const options = normalize(items);
    const initial = defaultValue ?? options[0].value;

    return (
        <Select items={options} defaultValue={initial} 
            onValueChange={onValueChange} disabled={disabled}>
            <SelectTrigger 
                className={cn("w-fit sm:min-w-45 border border-border/60",
                    "bg-background/80 dark:bg-background/40 backdrop-blur-md py-4",
                    className
                )}>

                <SelectValue placeholder={placeholder} 
                    className={"capitalize text-foreground font-light"} />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        {label}
                    </SelectLabel>

                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            className={"capitalize py-2"}
                        >

                            {option.label ?? option.value}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}