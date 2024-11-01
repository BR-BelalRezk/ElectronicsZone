import { cn } from "@/lib/utils";

export default function H2({
  text,
  className,
}: {
  className?: string;
  text: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-5xl text-slate-400 font-semibold",
        className
      )}
    >
      {text}
    </h2>
  );
}
