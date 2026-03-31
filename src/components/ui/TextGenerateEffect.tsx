"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.3 },
    },
  };

  const child = {
    hidden: { opacity: 0, filter: "blur(8px)", y: 5 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className={cn("font-bold", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="leading-snug tracking-wide">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block mr-[0.3em]"
            variants={child}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
