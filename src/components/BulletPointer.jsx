const BulletPointer = ({ className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={`w-5 fill-light dark:fill-dark ${className}`}>
			<circle
				cx="16"
				cy="16"
				r="10"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="5"
				className="stroke-neutral-400 dark:stroke-neutral-600"
			></circle>
		</svg>
	);
};

export default BulletPointer;
