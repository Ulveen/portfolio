interface posOptions {
	pos: [number, number] | [string, string];
}

interface fadeInVariantOptions {
	xOptions?: posOptions;
	yOptions?: posOptions;
}

const fadeInVariant = ({ xOptions, yOptions }: fadeInVariantOptions) => {
	return {
		hidden: {
			opacity: 0,
			x: xOptions?.pos[0] || 0,
			y: yOptions?.pos[0] || 0,
		},
		visible: {
			opacity: 1,
			x: xOptions?.pos[1] || 0,
			y: yOptions?.pos[1] || 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};
};

export default fadeInVariant;
