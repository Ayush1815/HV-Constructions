import { Project } from "../../data/projects";
import { MapPin } from "lucide-react";
import { classNames } from "../../lib/classNames";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  accentColor?: string;
}

export function ProjectCard({ project, onClick, accentColor = "#cf9c2d" }: ProjectCardProps) {
  const isCompleted = project.status === "completed";

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer flex flex-col rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-2xl dark:hover:shadow-black/60"
    >
      {/* Top Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={classNames(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold shadow-md backdrop-blur-md",
            isCompleted 
              ? "bg-emerald-500/90 text-white" 
              : "bg-amber-500/90 text-white"
          )}>
            {isCompleted ? "Completed" : "Ongoing"}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span 
            className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md"
            style={{ backgroundColor: `${accentColor}dd` }}
          >
            {project.categoryLabel}
          </span>
        </div>
      </div>

      <div className="h-1.5 w-full" style={{ backgroundColor: accentColor }} />

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2 line-clamp-2 group-hover:text-[var(--brand-gold)] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
          <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0 text-[var(--brand-gold)]" />
          <span className="truncate">{project.location}</span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  );
}
