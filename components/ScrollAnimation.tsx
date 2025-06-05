"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function ScrollAnimation({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initialOffset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : initialOffset.x,
        y: inView ? 0 : initialOffset.y,
      }}
      className={cn(className)}
      initial={{
        opacity: 0,
        x: initialOffset.x,
        y: initialOffset.y,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: Omit<ScrollAnimationProps, "direction">) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
      }}
      className={cn(className)}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredAnimation({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0.1,
  threshold = 0.1,
  direction = "up",
}: ScrollAnimationProps & { staggerDelay?: number; initialDelay?: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const initialOffset = directionMap[direction];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: initialOffset.x, y: initialOffset.y },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? "show" : "hidden"}
      className={cn(className)}
      initial="hidden"
      variants={container}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
