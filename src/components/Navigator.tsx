import { FC } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

const Navigator: FC = () => {
	const { scrollYProgress } = useScroll();
	const progress = useTransform(scrollYProgress, [0, 1], ['0', '100%']);

	return (
		<div className="shadow-lg rounded-xl w-full fixed top-0 z-20 self-center">
			<m.div
				className="bg-purple-600 h-[2px]"
				style={{ width: progress }}
			/>
		</div>
	);
};

export { Navigator };
