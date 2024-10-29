import { FC } from 'react';
import fadeInVariant from './variants/FadeInVariant';
import { m } from 'framer-motion';
import stackData from '../assets/data/stacks.json';

const colors = stackData.colors;
const images = stackData.images;
const typography = stackData.typography;

interface Props {
	stackName: string;
}

const fadeDownVariant = fadeInVariant({
	yOptions: {
		pos: [20, 0],
	},
});

const Logo: FC<Props> = ({ stackName }) => {
	const key = stackName.toLowerCase();

	if (!images[key]) {
		return (
			<p className="text-[12px] sm:text-base text-white">{stackName}</p>
		);
	}

	const imageSrc = `./logo/${images[key]}`;
	const isTypography = typography.indexOf(stackName.toLowerCase()) != -1;

	if (isTypography) {
		return (
			<img
				className="h-4 w-full max-w-20 aspect object-contain"
				src={imageSrc}
				alt={key}
			/>
		);
	}

	return (
		<>
			<img
				className="size-4 aspect object-contain"
				src={imageSrc}
				alt={key}
			/>
			<p className="text-[12px] sm:text-base text-white">{stackName}</p>
		</>
	);
};

const StackBubble: FC<Props> = ({ stackName }) => {
	const key = stackName.toLowerCase();
	return (
		<m.div
			variants={fadeDownVariant}
			className={`flex gap-1 p-[4px] sm:py-1 sm:px-2 items-center rounded-md hvr-pulse-shrink cursor-default`}
			style={{ backgroundColor: colors[key] || '#333' }}
		>
			<Logo stackName={stackName} />
		</m.div>
	);
};

export default StackBubble;
