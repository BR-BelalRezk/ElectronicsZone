"use client";
import { motion } from "framer-motion";
export default function MenuListItem({
  index,
  children,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.li
      initial={"close"}
      animate={"open"}
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
            delay: index * 0.1 + 0.1,
          },
        },
        close: {
          opacity: 0,
          y: 25,
          transition: { duration: 0.5 },
        },
      }}
    >
      {children}
    </motion.li>
  );
}
