import { Reveal } from "../ui/Reveal";

const clients = [
  {
    name: "HUGEL INFRA",
    logo: <img src="/media/clients/hugel.png" alt="Hugel Infra" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "VTL",
    logo: <img src="/media/clients/vtl.png" alt="VTL" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "PNC INFRATECH",
    logo: <img src="/media/clients/pnc.png" alt="PNC Infratech" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "DRA INFRA",
    logo: <img src="/media/clients/dra.png" alt="DRA Infra" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "SKYLARK",
    logo: <img src="/media/clients/skylark.png" alt="Skylark" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "DILEEP BUILDCON",
    logo: <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://dilipbuildcon.com&size=128" alt="Dileep Buildcon" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:hover:opacity-100" />
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
