export type SkillLevelKey = 'expert' | 'advanced' | 'intermediate' | 'familiar' | 'learning';

export interface SkillLevel {
  label: string;
  foreground: string;
  background: string;
  ring: string;
  min: number;
  max: number;
  hex: string;
}

export const SKILL_LEVELS: Record<SkillLevelKey, SkillLevel> = {
  expert: {
    label: "Expert",
    min: 85,
    max: 100,
    hex: "#10B981",
    background: "bg-emerald-500",
    foreground: "text-emerald-600 dark:text-emerald-400",
    ring: "ring-emerald-500/20",
  },
  advanced: {
    label: "Advanced",
    min: 70,
    max: 84,
    hex: "#3B82F6",
    background: "bg-blue-500",
    foreground: "text-blue-600 dark:text-blue-400",
    ring: "ring-blue-500/20",
  },
  intermediate: {
    label: "Intermediate",
    min: 46,
    max: 69,
    hex: "#06B6D4",
    background: "bg-cyan-500",
    foreground: "text-cyan-600 dark:text-cyan-400",
    ring: "ring-cyan-500/20",
  },
  familiar: {
    label: "Familiar",
    min: 25,
    max: 45,
    hex: "#F59E0B",
    background: "bg-amber-500",
    foreground: "text-amber-600 dark:text-amber-400",
    ring: "ring-amber-500/20",
  },
  learning: {
    label: "Learning",
    min: 0,
    max: 24,
    hex: "#64748B",
    background: "bg-slate-500/60",
    foreground: "text-slate-600 dark:text-slate-400",
    ring: "ring-slate-500/20",
  },
} as const;

export const getSkillLevelByPercentage = (percentage: number): SkillLevel => {
  if (percentage >= 85) return SKILL_LEVELS.expert;
  if (percentage >= 70) return SKILL_LEVELS.advanced;
  if (percentage >= 46) return SKILL_LEVELS.intermediate;
  if (percentage >= 25) return SKILL_LEVELS.familiar;
  return SKILL_LEVELS.learning;
};