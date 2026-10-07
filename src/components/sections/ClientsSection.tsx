import { Reveal } from "../ui/Reveal";
import { useEffect, useRef, useState } from "react";

const clients = [
  {
    name: "HUGEL INFRA",
    logo: <img src="/media/clients/hugel.png" alt="Hugel Infra" className="h-12 w-auto object-contain transition-transform hover:scale-105" />
  },
  {
    name: "VTL",
    logo: <img src="/media/clients/vtl.png" alt="VTL" className="h-12 w-auto object-contain transition-transform hover:scale-105" />
  },
  {
    name: "PNC INFRATECH",
    logo: <img src="/media/clients/pnc.png" alt="PNC Infratech" className="h-12 w-auto object-contain transition-transform hover:scale-105" />
  },
  {
    name: "DRA INFRA",
    logo: <img src="/media/clients/dra.png" alt="DRA Infra" className="h-12 w-auto object-contain transition-transform hover:scale-105" />
  },
  {
    name: "SKYLARK",
    logo: <img src="/media/clients/skylark.png" alt="Skylark" className="h-12 w-auto object-contain transition-transform hover:scale-105" />
  },
  {
    name: "DILEEP BUILDCON",
    logo: <img src="/media/clients/dileep.png" alt="Dileep Buildcon" className="h-12 w-auto object-contain transition-transform hover:scale-105" />
  },
  {
    name: "APCO",
    logo: <img src="/media/clients/apco.png" alt="APCO" className="h-12 w-auto object-contain transition-transform hover:scale-105" />
  }
];

export function ClientsSection() {
  const duplicatedClients = [...clients, ...clients];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      if (!isPaused && containerRef.current) {
        containerRef.current.scrollLeft += 1;
        
        // Reset seamlessly when reaching exactly halfway
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          containerRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="overflow-hidden border-b border-[var(--border-soft)] bg-white py-12 dark:bg-[#071017]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Trusted By Industry Leaders
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-12 flex w-full">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-[#071017]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-[#071017]"></div>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="flex flex-nowrap items-center gap-16 pr-16 overflow-x-auto select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {duplicatedClients.map((client, idx) => (
            <div key={idx} className="flex shrink-0 flex-col items-center justify-center gap-4">
              <div className="flex h-12 items-center justify-center dark:rounded-xl dark:bg-white/90 dark:px-4 dark:py-2">
                {client.logo}
              </div>
              <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
