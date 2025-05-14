import BulletPointer from "../../components/BulletPointer";

const VerticalTimeline = ({ items }) => {
	return (
		<div className="relative pl-0">
			{/* Vertical line */}
			<div className="absolute left-2 top-0 h-11/12 w-0.5 bg-gray-300"></div>

			{items.map((item, index) => (
				<div key={index} className="relative mb-8">
					<BulletPointer />
					{/* Content */}
					<div className="ml-8 p-4 rounded-lg shadow-sm"></div>
				</div>
			))}
		</div>
	);
};

export default VerticalTimeline;
