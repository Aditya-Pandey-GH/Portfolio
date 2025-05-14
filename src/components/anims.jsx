import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FadeInWhenVisible = ({ children, delay = 0, className = "" }) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			animate={inView ? { opacity: 1 } : {}}
			transition={{ duration: 0.75, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export const RiseUpWhenVisible = ({ children, delay = 0, className = "" }) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
