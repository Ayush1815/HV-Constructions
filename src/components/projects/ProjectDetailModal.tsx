import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Project } from "../../data/projects";
import { classNames } from "../../lib/classNames";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  accentColor?: string;
}

export function ProjectDetailModal({ project, isOpen, onClose, accentColor = "#cf9c2d" }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-full p-2 bg-slate-950/60 text-white hover:bg-slate-950/90 transition-colors backdrop-blur-md"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Badges on image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <span 
                    className="inline-flex items-center rounded-md px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md"
                    style={{ backgroundColor: `${accentColor}ee` }}
                  >
                    {project.categoryLabel}
                  </span>
                  <span className={classNames(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md",
                    project.status === "completed"
                      ? "bg-emerald-600/90" 
                      : "bg-amber-600/90"
                  )}>
                    {project.status === "completed" ? "Completed" : "Ongoing"}
                  </span>
                </div>
              </div>

              {/* Accent divider line */}
              <div className="h-1.5 w-full flex-shrink-0" style={{ backgroundColor: accentColor }} />

              {/* Scrollable details */}
              <div className="px-6 py-6 overflow-y-auto">
                <h2 className="text-2xl font-black text-slate-950 dark:text-white mb-3">
                  {project.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center font-medium">
                    <MapPin className="h-4 w-4 mr-1.5 text-[var(--brand-gold)]" />
                    {project.location}
                  </div>
                  <div className="flex items-center font-medium">
                    <Calendar className="h-4 w-4 mr-1.5 text-[var(--brand-gold)]" />
                    Year: {project.year}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">
                      Project Scope &amp; Execution
                    </h4>
                    <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-3">
                      Key Highlights &amp; Milestones
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: accentColor }} />
                          <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-[var(--border-soft)] flex-shrink-0">
                <button 
                  onClick={onClose}
                  className="w-full inline-flex justify-center rounded-xl bg-[var(--brand-gold)] px-4 py-2.5 text-sm font-bold text-slate-900 shadow-md hover:bg-[var(--brand-gold-hover)] transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
