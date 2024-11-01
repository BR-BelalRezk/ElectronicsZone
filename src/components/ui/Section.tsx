"use client";
import { navbarItems } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type props = {
  id: (typeof navbarItems)[number];
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className }: props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween", ease: "linear" }}
      viewport={{ once: true }}
      id={id}
      className={cn("w-full relative scroll-mt-40", className)}
    >
      <div className={"container mx-auto px-3 md:px-5"}>{children}</div>
    </motion.section>
  );
}
