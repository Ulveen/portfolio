import { FC } from 'react';
import fadeInVariant from './variants/FadeInVariant';
import { m } from 'framer-motion';
import colors from '../assets/data/stack/colors.json'
import images from '../assets/data/stack/images.json'

interface Props {
	stackName: string;
}

const fadeDownVariant = fadeInVariant({
	yOptions: {
		pos: [20, 0],
	},
});

const StackBubble: FC<Props> = ({ stackName }) => {
	const key = stackName.toLowerCase();
	return (
		<m.div
			variants={fadeDownVariant}
			className={`flex gap-1 p-[4px] sm:py-1 sm:px-2 items-center rounded-md hvr-pulse-shrink cursor-default`}
			style={{ backgroundColor: colors[key] || '#333' }}
		>
			{images[key] &&<img
				className="size-4 aspect object-contain"
				src={images[key]}
				alt={key}
			/>}
			<p className="text-[12px] sm:text-base text-white">{stackName}</p>
		</m.div>
	);
};

export default StackBubble;
