const NotFound = () => {
	return (
		<>
			<div className="w-full flex flex-col flex-1 justify-center items-center gap-4">
				<span className="font-khand font-bold text-3xl sm:text-4xl lg:text-5xl text-light dark:text-dark">Error 404 !!</span>
				<span className="font-iceberg text-lg sm:text-xl lg:text-2xl">Page Not Found 😔</span>
			</div>
		</>
	);
};

export default NotFound;
