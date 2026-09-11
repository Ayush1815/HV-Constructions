import { Link } from "react-router-dom";
import { motion } from "motion/react";

type BrandMarkProps = {
  animationKey?: string;
  variant?: "header" | "footer";
};

export function BrandMark({ animationKey = "static", variant = "header" }: BrandMarkProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      to="/"
      className={
        isFooter
          ? "flex items-center transition-opacity hover:opacity-80"
          : "flex min-h-12 items-center transition-transform hover:-translate-y-0.5"
      }
      aria-label="HV Construction home"
    >
      <motion.span
        key={animationKey}
        className="flex items-center gap-3 sm:gap-4"
        initial={{ opacity: 0, y: -7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center">
          <span 
            className={`text-3xl sm:text-[2.25rem] font-light tracking-tight leading-none flex items-center ${
              isFooter ? "text-white" : "text-slate-800 dark:text-white"
            }`}
          >
            H<span className="ml-[-0.05em]">V</span>
          </span>
        </div>
        
        <div className={`h-7 sm:h-8 w-[1px] rounded-full ${isFooter ? "bg-white/30" : "bg-slate-300 dark:bg-slate-700"}`} />
        
        <div className="flex items-center pt-0.5">
          <span 
            className={`text-[0.65rem] sm:text-[0.75rem] font-semibold tracking-[0.25em] uppercase leading-none ${
              isFooter ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Constructions
          </span>
        </div>
      </motion.span>
    </Link>
  );
}
