/*
 * SectionDivider — ASM Website
 * Design: "The Forge" — thin horizontal rule with teal diamond marker
 */
export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
      <div className="w-2 h-2 rotate-45 bg-teal/60 shrink-0" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
    </div>
  );
}
