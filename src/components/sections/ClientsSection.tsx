import { Reveal } from "../ui/Reveal";

const clients = [
  {
    name: "HUGEL INFRA",
    logo: (
      <svg viewBox="0 0 160 40" fill="none" className="h-8 w-auto sm:h-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:invert dark:hover:opacity-100">
        <path d="M20 10L30 30H10L20 10Z" fill="currentColor" />
        <path d="M25 20H15V30H25V20Z" fill="currentColor" fillOpacity="0.5" />
        <text x="40" y="26" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="currentColor" letterSpacing="1">HUGEL INFRA</text>
      </svg>
    )
  },
  {
    name: "VTL",
    logo: (
      <svg viewBox="0 0 120 40" fill="none" className="h-8 w-auto sm:h-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:invert dark:hover:opacity-100">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="4" />
        <path d="M15 15L25 25M25 15L15 25" stroke="currentColor" strokeWidth="3" />
        <text x="40" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="currentColor" letterSpacing="2">VTL</text>
      </svg>
    )
  },
  {
    name: "PNC INFRATECH",
    logo: (
      <svg viewBox="0 0 200 40" fill="none" className="h-8 w-auto sm:h-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:invert dark:hover:opacity-100">
        <path d="M10 30V10H20C24 10 26 12 26 15C26 18 24 20 20 20H15V30H10Z" fill="currentColor" />
        <path d="M28 30V10L38 22V10H42V30L32 18V30H28Z" fill="currentColor" />
        <path d="M55 10C50 10 47 13 47 20C47 27 50 30 55 30C58 30 61 28 62 25H57C56 26 55 26 55 26C52 26 52 24 52 20C52 16 52 14 55 14C56 14 57 15 57 16H62C61 12 58 10 55 10Z" fill="currentColor" />
        <text x="70" y="24" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor" letterSpacing="1">INFRATECH</text>
      </svg>
    )
  },
  {
    name: "DRA INFRA",
    logo: (
      <svg viewBox="0 0 160 40" fill="none" className="h-8 w-auto sm:h-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:invert dark:hover:opacity-100">
        <rect x="10" y="10" width="20" height="20" fill="currentColor" />
        <polygon points="20,10 35,30 5,30" fill="white" />
        <text x="40" y="26" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="currentColor">DRA INFRA</text>
      </svg>
    )
  },
  {
    name: "SKYLARK",
    logo: (
      <svg viewBox="0 0 150 40" fill="none" className="h-8 w-auto sm:h-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:invert dark:hover:opacity-100">
        <path d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M20 10L30 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <text x="40" y="26" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="2">SKYLARK</text>
      </svg>
    )
  },
  {
    name: "DILEEP BUILDCON",
    logo: (
      <svg viewBox="0 0 210 40" fill="none" className="h-8 w-auto sm:h-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:invert dark:hover:opacity-100">
        <path d="M10 10H20C25 10 28 14 28 20C28 26 25 30 20 30H10V10Z" fill="currentColor" />
        <path d="M32 10H42C46 10 48 12 48 15C48 17 46 19 44 20C47 21 49 23 49 26C49 29 46 30 42 30H32V10Z" fill="currentColor" />
        <text x="58" y="25" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="currentColor">DILEEP BUILDCON</text>
      </svg>
    )
  },
  {
    name: "APCO",
    logo: (
      <svg viewBox="0 0 120 40" fill="none" className="h-8 w-auto sm:h-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:invert dark:hover:opacity-100">
        <path d="M10 30L20 10L30 30H25L20 20L15 30H10Z" fill="currentColor" />
        <path d="M16 25H24" stroke="currentColor" strokeWidth="2" />
        <text x="35" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="currentColor" letterSpacing="1">APCO</text>
      </svg>
    )
  }
];

export function ClientsSection() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-white py-12 dark:bg-[#071017]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Trusted By Industry Leaders
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 lg:gap-x-16">
              {clients.map((client, idx) => (
                <div key={idx} className="flex items-center justify-center" title={client.name}>
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
