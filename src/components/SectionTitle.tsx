
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) => {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gold mt-4 ${align === "center" ? "mx-auto" : ""}`}></div>
    </div>
  );
};

export default SectionTitle;
