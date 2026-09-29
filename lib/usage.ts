export type UsageType = 'primary' | 'daily' | 'frequent' | 'occational' | 'learning' | 'aware';

export interface UsageInterface {
    label: string;
    foreground: string;
    background: string;
    ring: string;
    min: number;
    max: number;
    hex: string;
}

export const UsageData: Record<UsageType, UsageInterface> = {
    primary: {
        label: "Primary Focus",
        min: 85,
        max: 100,
        hex: "#10B981",
        background: "bg-emerald-500",
        foreground: "text-emerald-600 dark:text-emerald-400",
        ring: "ring-emerald-500/20",
    },
    daily: {
        label: "Daily Use",
        min: 70,
        max: 84,
        hex: "#3B82F6",
        background: "bg-blue-500",
        foreground: "text-blue-600 dark:text-blue-400",
        ring: "ring-blue-500/20",
    },
    frequent: {
        label: "Frequent Use",
        min: 46,
        max: 69,
        hex: "#06B6D4",
        background: "bg-cyan-500",
        foreground: "text-cyan-600 dark:text-cyan-400",
        ring: "ring-cyan-500/20",
    },
    occational: {
        label: "Occational Use",
        min: 25,
        max: 45,
        hex: "#F59E0B",
        background: "bg-amber-500",
        foreground: "text-amber-600 dark:text-amber-400",
        ring: "ring-amber-500/20",
    },
    learning: {
        label: "Exploring",
        min: 11,
        max: 24,
        hex: "#8B5CF6",
        background: "bg-violet-500",
        foreground: "text-violet-600 dark:text-violet-400",
        ring: "ring-violet-500/20",
    },
    aware: {
        label: "Aware",
        min: 0,
        max: 10,
        hex: "#71717A",
        background: "bg-zinc-500",
        foreground: "text-zinc-600 dark:text-zinc-400",
        ring: "ring-zinc-500/20",
    },
} as const;

export const getSkillLevelByPercentage = (percentage: number): UsageInterface => {
    if (percentage >= 85) return UsageData.primary;
    if (percentage >= 70) return UsageData.daily;
    if (percentage >= 46) return UsageData.frequent;
    if (percentage >= 25) return UsageData.occational;
    if (percentage >= 11) return UsageData.learning;
    return UsageData.aware;
};