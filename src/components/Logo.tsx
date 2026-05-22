export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)" />
      <circle cx="14" cy="16" r="5" fill="#FF6B9D" opacity="0.9" />
      <circle cx="26" cy="14" r="4" fill="#60A5FA" opacity="0.9" />
      <circle cx="22" cy="26" r="6" fill="#A78BFA" opacity="0.85" />
      <circle cx="12" cy="28" r="3" fill="#FBBF24" opacity="0.8" />
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E1B4B" />
          <stop offset="1" stopColor="#312E81" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CharacterBadge({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-gradient-to-br from-[#1e3a8a] to-[#312e81] shadow-[0_0_12px_rgba(96,165,250,0.5)] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" aria-hidden="true">
        <circle cx="12" cy="9" r="4" fill="#93C5FD" />
        <ellipse cx="12" cy="18" rx="6" ry="4" fill="#60A5FA" />
        <circle cx="10" cy="8.5" r="0.8" fill="#1e3a8a" />
        <circle cx="14" cy="8.5" r="0.8" fill="#1e3a8a" />
      </svg>
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon />
      <span className="relative pb-1 text-sm font-bold tracking-[0.18em] text-white">
        LOTL LABS
        <span
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#6366F1]"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-0.5 left-0 h-px w-full bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#6366F1] blur-[3px] opacity-80"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}
