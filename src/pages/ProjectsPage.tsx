import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSeo } from "../hooks/useSeo";
import { projects, projectCategories, Project } from "../data/projects";
import { expertiseAreas } from "../data/expertise";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectDetailModal } from "../components/projects/ProjectDetailModal";
import { Reveal, SectionHeader } from "../components/ui/Reveal";
import { CtaBanner } from "../components/sections/CtaBanner";
import { classNames } from "../lib/classNames";

export default function ProjectsPage() {
  useSeo({
    title: "Our Projects | HV Construction Pvt. Ltd.",
    description: "Explore our portfolio of excellence across infrastructure, buildings, water projects, and interiors.",
    path: "/projects",
  });

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeStatus, setActiveStatus] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(9);
  }, [activeCategory, activeStatus]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory = activeCategory === "all" || project.category === activeCategory;
      const matchStatus = activeStatus === "all" || project.status === activeStatus;
      return matchCategory && matchStatus;
    });
  }, [activeCategory, activeStatus]);

  // Helper to get accent color for a project based on its category
  const getProjectAccent = (categorySlug: string) => {
    const area = expertiseAreas.find(a => a.slug === categorySlug);
    return area ? area.accentColor : "#cf9c2d"; // default gold
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[var(--border-soft)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(207,156,45,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(228,189,96,0.1),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Projects of Excellence"
            text="A showcase of our capabilities across diverse construction sectors. We deliver quality, scale, and precision on every site."
            align="center"
          />
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-12 sm:py-20 bg-[var(--surface-light-alt)] dark:bg-[var(--surface-dark)] min-h-[50vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <Reveal>
            <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-[var(--surface-light)] dark:bg-[var(--surface-light-elevated)] p-4 rounded-xl border border-[var(--border-soft)] shadow-sm">
              <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 flex gap-2 hide-scrollbar">
                <select 
                  aria-label="Filter by category"
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[var(--brand-gold)] focus:outline-none"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {projectCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg w-full md:w-auto shrink-0">
                {["all", "completed", "ongoing"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={classNames(
                      "flex-1 md:flex-none px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-colors",
                      activeStatus === status 
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    )}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Project Count Badge */}
          <div className="mb-6 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>
              Showing {Math.min(visibleCount, filteredProjects.length)} of {filteredProjects.length} projects
              {filteredProjects.length !== projects.length && ` (filtered from ${projects.length} total)`}
            </span>
          </div>

          {/* Grid with animated transitions */}
          {filteredProjects.length > 0 ? (
            <>
              <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.slice(0, visibleCount).map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ProjectCard 
                        project={project} 
                        onClick={() => setSelectedProject(project)}
                        accentColor={getProjectAccent(project.category)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Load More Button */}
              {visibleCount < filteredProjects.length && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setVisibleCount(v => v + 6)}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white dark:bg-slate-800 px-8 py-3 text-sm font-bold text-slate-900 dark:text-white shadow-sm hover:border-[var(--brand-gold)] hover:bg-slate-50 dark:hover:bg-slate-750 transition-all hover:-translate-y-0.5"
                  >
                    Load More Projects ({filteredProjects.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500 dark:text-slate-400 text-lg">No projects found matching the selected filters.</p>
              <button 
                onClick={() => { setActiveCategory("all"); setActiveStatus("all"); }}
                className="mt-4 text-[var(--brand-gold)] font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />

      <ProjectDetailModal 
        project={selectedProject} 
        projects={filteredProjects}
        onNavigate={setSelectedProject}
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
        accentColor={selectedProject ? getProjectAccent(selectedProject.category) : undefined}
      />
    </div>
  );
}
