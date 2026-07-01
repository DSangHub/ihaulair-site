import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 20c6 0 8-4 14-4 3.5 0 6 1.2 6 1.2"
          stroke="var(--color-primary)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M4 25c4.5 0 6.5-2.5 11-2.5"
          stroke="var(--color-accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M20 4c-2 4.5.5 7.5 3 9.5 2.7 2.2 5 5 5 8.5"
          stroke="var(--color-primary)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-base font-semibold tracking-tight">
        I Haul Air<sup className="text-[0.6em] top-[-0.6em]">™</sup>
      </span>
    </span>
  )
}
