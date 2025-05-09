const NotFound = () => {
	return (
		<>
			<div className="w-full h-[calc(100vh-1rem)] flex flex-col justify-center items-center gap-4">
				<span className="font-khand font-bold text-5xl text-cyan-600 dark:text-amber-400">Error 404 !!</span>
				<span className="font-iceberg text-2xl">Page Not Found 😔</span>
			</div>
		</>
	);
};

export default NotFound;
