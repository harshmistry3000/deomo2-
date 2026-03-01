import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export const WordPullUpText = ({
  text = "",
  className = "",
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center drop-shadow-sm",
        className
      )}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block" }}>
          {word === "" ? <span>&nbsp;</span> : word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
}
