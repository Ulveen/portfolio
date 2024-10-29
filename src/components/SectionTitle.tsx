import { forwardRef } from 'react';
import { m } from 'framer-motion';
import fadeInVariant from './variants/FadeInVariant';

interface Props {
	text: string;
	isVisible: boolean;
	classname?: string;
}

const fadeDownVariant = fadeInVariant({
	yOptions: {
		pos: [30, 0],
	},
});

const SectionTitle = forwardRef<HTMLParagraphElement, Props>(
	({ text, isVisible, classname }, ref) => {
		return (
			<m.p
				className={`text-2xl lg:text-3xl xl:text-4xl font-bold ${classname}`}
				initial="hidden"
				variants={fadeDownVariant}
				animate={isVisible ? 'visible' : 'hidden'}
				ref={ref}
			>
				{text}
			</m.p>
		);
	}
);

export default SectionTitle;
