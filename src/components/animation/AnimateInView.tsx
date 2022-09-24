import {
  type Transition,
  type Variant,
  motion,
  useAnimation,
  useInView
} from 'framer-motion';
import { useRef, useEffect, PropsWithChildren } from 'react';

type Variants = {
  visible: Variant;
  hidden: Variant;
};

type Props = {
  variants?: Variants;
  transition?: Transition;
} & PropsWithChildren;

const defaultVariants: Variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 0, y: -100 }
};

const defaultTransition: Transition = {
  ease: 'easeOut',
  duration: 0.9,
  delay: 0.3
};

export default function GenericAnimation({
  children,
  variants = defaultVariants,
  transition = defaultTransition
}: Props) {
  const controls = useAnimation();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={transition}
      animate={controls}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
}
