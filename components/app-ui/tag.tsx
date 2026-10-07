import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ReactNode } from "react";
import { justify } from "../shared-ui/_css";

const TagVariant = cva(
  [
    "inline-flex items-center gap-1.5 whitespace-nowrap font-medium transition-colors text-foreground",
  ],
  {
    variants: {
      variant: {
        outline:
          "border-2 border-border bg-transparent hover:border-primary/50 hover:text-primary",
        filled:
          "border-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        soft:
          "border-2 border-transparent bg-primary/10 text-primary hover:bg-primary/15",
        muted:
          "border-2 border-transparent bg-muted text-muted-foreground hover:bg-muted/70",
        ghost:
          "border-2 border-transparent bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        success:
          "border-2 border-transparent bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/15 dark:text-emerald-400",
        warning:
          "border-2 border-transparent bg-amber-500/10 text-amber-600 hover:bg-amber-500/15 dark:text-amber-400",
        danger:
          "border-2 border-transparent bg-destructive/10 text-destructive hover:bg-destructive/15",
        frontend:
          "border-2 border-transparent bg-sky-500/10 text-sky-600 hover:bg-sky-500/15 dark:text-sky-400",
        backend:
          "border-2 border-transparent bg-violet-500/10 text-violet-600 hover:bg-violet-500/15 dark:text-violet-400",
      },
      size: {
        sm: "text-[0.65rem] px-3 py-0.5 rounded-full",
        md: "text-xs px-4 py-1 rounded-full",
        lg: "text-sm px-5 py-1.5 rounded-full",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      shape: "pill",
    },
  }
);

export type TagType = {
  title: string;
  emoji?: ReactNode;
};

type TagCompType = TagType &
  VariantProps<typeof TagVariant> & {
    className?: string;
  };

export function Tag({ title: text, emoji, variant, size, shape, className }: TagCompType) {
  return (
    <span className={cn(TagVariant({ variant, size, shape }), className)}>
      {text}
      {emoji && <span className="inline-flex items-center">{emoji}</span>}
    </span>
  );
}

// ====================================================================================

const TagsVariant = cva("flex flex-wrap items-center", {
  variants: {
    justify: justify,
    gap: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    },
  },
  defaultVariants: {
    gap: "lg",
  },
});

type TagsCompType = VariantProps<typeof TagsVariant> &
  VariantProps<typeof TagVariant> & {
    tags: TagType[] | undefined;
    className?: string;
  };

export function Tags({
  tags,
  variant,
  size,
  shape,
  justify,
  gap,
  className,
}: TagsCompType & { title?: string }) {
  if (!tags?.length) return null;

  return (
    <div
      role="list"
      aria-label="Tags"
      className={cn(TagsVariant({ justify, gap }), className)}
    >
      {tags.map((tag, i) => (
        <Tag key={`${tag.title}-${i}`} variant={variant} size={size} shape={shape} {...tag} />
      ))}
    </div>
  );
}

// ====================================================================================
// Stack tags — map a stack value to a variant so callers don't need to know colors.
// ====================================================================================

export type StackType = "Frontend" | "Backend";

const STACK_VARIANT: Record<StackType, NonNullable<VariantProps<typeof TagVariant>["variant"]>> = {
  Frontend: "frontend",
  Backend: "backend",
};

export type StackTagType = {
  stack: StackType;
  className?: string;
};

export function StackTag({ stack, className }: StackTagType) {
  return (
    <Tag
      title={stack}
      variant={STACK_VARIANT[stack]}
      size="sm"
      shape="pill"
      className={className}
    />
  );
}

export function StackTags({
  stacks,
  className,
  justify,
  gap = "sm",
  size = "sm",
  shape = "pill",
}: {
  stacks: StackType[];
  className?: string;
  size?: VariantProps<typeof TagVariant>["size"];
  shape?: VariantProps<typeof TagVariant>["shape"];
} & Pick<VariantProps<typeof TagsVariant>, "justify" | "gap">) {
  if (!stacks?.length) return null;

  return (
    <div
      role="list"
      aria-label="Stacks"
      className={cn(TagsVariant({ justify, gap }), className)}
    >
      {stacks.map((stack) => (
        <Tag
          key={stack}
          title={stack}
          variant={STACK_VARIANT[stack]}
          size={size}
          shape={shape}
        />
      ))}
    </div>
  );
}