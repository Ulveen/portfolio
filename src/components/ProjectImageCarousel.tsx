import { m, useInView, useAnimation } from 'framer-motion';
import { FC, useRef, useEffect } from 'react';
import StackBubble from './StackBubble';
import fadeInVariant from './variants/FadeInVariant';

interface Props {
	project: IProject;
	row: number;
}

const staggerVariant = {
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.075,
		},
	},
};

const fadeDownVariant = fadeInVariant({
	yOptions: {
		pos: [20, 0],
	},
});

const ProjectImageCarousel: FC<Props> = ({ project, row }) => {
	const carouselRef = useRef(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const controls = useAnimation();

	const isInView = useInView(carouselRef, {
		amount: 0.5,
		margin: '0px 0px -200px 0px',
	});

	useEffect(() => {
		let animationFrame: number;
		let startTime: number;
		const PIXELS_PER_SECOND = window.screen.width / 20;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			if (!containerRef.current) return;

			const container = containerRef.current;
			const totalWidth = container.scrollWidth;
			const visibleWidth = container.offsetWidth;
			const maxScroll = -(totalWidth - visibleWidth);

			const deltaTime = timestamp - startTime;

			let xPosition = -(PIXELS_PER_SECOND * deltaTime) / 1000;

			if (xPosition <= maxScroll) {
				startTime = timestamp;
				xPosition = 0;
			}

			controls.set({ x: xPosition });
			animationFrame = requestAnimationFrame(animate);
		};

		if (isInView) {
			animationFrame = requestAnimationFrame(animate);
		}

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [isInView]);

	return (
		<m.div
			ref={carouselRef}
			className={`h-screen w-screen flex flex-col-reverse responsive-card bg-neutral-900 sticky top-16 flex-shrink-0 self-center justify-end lg:justify-evenly lg:p-16 gap-2 lg:gap-16 ${row % 2 ? 'row-reverse' : 'row'}`}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
		>
			<m.div
				className="w-2/3 self-center lg:w-[45%] h-2/5 lg:h-1/2 lg:self-start flex flex-col flex-shrink-0 justify-between text-white gap-2 lg:gap-8"
				variants={staggerVariant}
			>
				<m.div
					className="flex flex-col gap-2"
					variants={fadeDownVariant}
				>
					<p className="text-xl lg:text-2xl font-bold">{project.name}</p>
					<p className="text-sm lg:text-base text-justify">
						{project.description}
					</p>
				</m.div>
				<m.div
					className="flex flex-wrap gap-2"
					variants={staggerVariant}
				>
					{project.stacks.map((stack, index) => (
						<StackBubble stackName={stack} key={index} />
					))}
				</m.div>
				<m.a
					className="w-fit self-center lg:self-start"
					href={project.link}
					target="_blank"
					variants={fadeDownVariant}
				>
					<button className="text-sm sm:text-base w-fit p-2 hvr-bounce-to-right before:bg-purple-600 font-bold">
						View on Github
					</button>
				</m.a>
			</m.div>

			<m.div
				className="w-2/3 self-center lg:self-start lg:w-[45%] sm:h-2/5 lg:h-1/2 justify-center flex overflow-hidden items-start relative"
				variants={fadeDownVariant}
			>
				<div className="overflow-hidden w-full h-full">
					<m.div
						ref={containerRef}
						className="flex items-start w-fit"
						animate={controls}
					>
						{project.images.map((image, index) => (
							<img
								className="w-full h-[70%] max-w-2xl flex-shrink-0 object-contain"
								key={index}
								src={image}
							/>
						))}
						{project.images.map((image, index) => (
							<img
								className="w-full h-[70%] max-w-2xl flex-shrink-0 object-contain"
								key={index}
								src={image}
							/>
						))}
					</m.div>
				</div>
			</m.div>
		</m.div>
	);
};

export default ProjectImageCarousel;
