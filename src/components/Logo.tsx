/** Logo SVG da marca: casquinha estilizada com as iniciais "SA". */
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Logotipo Sorveteria Artesanal"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="logoScoop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--secondary)" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#logoScoop)" opacity="0.14" />
      <path
        d="M20 30a12 12 0 0 1 24 0Z"
        fill="url(#logoScoop)"
      />
      <circle cx="25" cy="24" r="7" fill="var(--primary)" />
      <circle cx="39" cy="24" r="7" fill="var(--secondary)" />
      <path
        d="M20 32h24L34.5 52a2.8 2.8 0 0 1-5 0Z"
        fill="none"
        stroke="url(#logoScoop)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M25 34l6 12M39 34l-6 12" stroke="var(--primary)" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function LogoLockup({ size = 40 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2">
      <Logo size={size} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-gradient-brand">
          Sorveteria & Açaí
        </span>
        <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Uberlândia
        </span>
      </span>
    </span>
  );
}
