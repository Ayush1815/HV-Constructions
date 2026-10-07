import { Reveal } from "../ui/Reveal";
import { useEffect, useRef, useState } from "react";

const clients = [
  {
    name: "HUGEL INFRA",
    logo: <img src="/media/clients/hugel.png" alt="Hugel Infra" className="h-10 w-auto object-contain" />
  },
  {
    name: "VTL",
    logo: <img src="/media/clients/vtl.png" alt="VTL" className="h-10 w-auto object-contain" />
  },
  {
    name: "PNC INFRATECH",
    logo: <img src="/media/clients/pnc.png" alt="PNC Infratech" className="h-10 w-auto object-contain" />
  },
  {
    name: "DRA INFRA",
    logo: <img src="/media/clients/dra.png" alt="DRA Infra" className="h-10 w-auto object-contain" />
  },
  {
    name: "SKYLARK",
    logo: <img src="/media/clients/skylark.png" alt="Skylark" className="h-10 w-auto object-contain" />
  },
  {
    name: "DILEEP BUILDCON",
    logo: <img src="/media/clients/dileep.png" alt="Dileep Buildcon" className="h-10 w-auto object-contain" />
  },
  {
    name: "APCO",
    logo: <img src="/media/clients/apco.png" alt="APCO" className="h-10 w-auto object-contain" />
  }
];

export function ClientsSection() {
  // Duplicate 4 times to ensure scrollWidth is massively larger than any single monitor, 
  // preventing scrollLeft from hitting the browser's max limit.
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    let accumulatedScroll = 0;
    const speed = 40; // Pixels per second

    const animate = (time: number) => {
      if (!isPaused && containerRef.current) {
        const dt = (time - lastTime) / 1000;
        accumulatedScroll += speed * dt;

        if (accumulatedScroll >= 1) {
          const pixelsToScroll = Math.floor(accumulatedScroll);
          containerRef.current.scrollLeft += pixelsToScroll;
          accumulatedScroll -= pixelsToScroll;

          // With 4 sets, one full set of 7 clients is exactly scrollWidth / 4.
          const singleSetWidth = containerRef.current.scrollWidth / 4;
          
          if (containerRef.current.scrollLeft >= singleSetWidth) {
            containerRef.current.scrollLeft -= singleSetWidth;
          }
        }
      }
      lastTime = time;
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
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-[#071017] md:w-32"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-[#071017] md:w-32"></div>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="flex flex-nowrap items-center gap-20 pr-20 overflow-x-auto select-none lg:gap-32 lg:pr-32"
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
            <div key={idx} className="flex min-w-[140px] md:min-w-[180px] shrink-0 flex-col items-center justify-center gap-5">
              <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white px-4 shadow-sm ring-1 ring-slate-900/5 transition-transform hover:scale-105 dark:bg-white dark:ring-0">
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
