import { FC, useRef } from 'react';
import { m, useInView, useScroll, useTransform } from 'framer-motion';
import IconGithub from '../assets/icon/IconGithub';
import IconMail from '../assets/icon/IconMail';
import IconLinkedin from '../assets/icon/IconLinkedIn';
import IconDownload from '../assets/icon/IconDownload';
import { Tooltip } from 'react-tooltip';
import fadeInVariant from '../components/variants/FadeInVariant';

type SocialLink = {
	href: string;
	icon: JSX.Element;
	id?: string;
	tooltip?: string;
	download?: boolean;
};

const SOCIAL_LINKS: SocialLink[] = [
	{
		href: 'https://github.com/ulveen',
		icon: <IconGithub className="size-6 sm:size-8" />,
	},
	{
		href: 'https://www.linkedin.com/in/michael-alvin-setiono-3aa9a1264/',
		icon: <IconLinkedin className="size-6 sm:size-8" />,
	},
	{
		href: 'mailto:setionoalvin9@gmail.com',
		icon: <IconMail className="size-6 sm:size-8" />,
	},
	{
		href: '/Michael Alvin Setiono - CV.pdf',
		icon: <IconDownload className="size-6 sm:size-8" />,
		id: 'download-cv',
		tooltip: 'Download my CV',
		download: true,
	},
];

const staggerVariant = {
	visible: {
		transition: {
			staggerChildren: 0.03,
			delayChildren: 0.2,
		},
	},
};

const fadeDownVariant = fadeInVariant({
	yOptions: {
		pos: [20, 0],
	},
});

const ProfileSection: FC = () => {
	const profileContent = useRef<HTMLDivElement>(null);
	const isVisible = useInView(profileContent, { amount: 0.6 });

	const { scrollYProgress } = useScroll({
		target: profileContent,
		offset: ['start start', 'end start'],
	});

	const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

	return (
		<m.section
			id="profile"
			className="relative flex w-screen flex-shrink-0 items-center justify-center"
			ref={profileContent}
		>
			<m.div
				className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-neutral-900"
				style={{ opacity: bgOpacity }}
			/>

			<m.div
				className="flex w-3/5 gap-4 md:px-4 lg:pb-[10vh] flex-col lg:flex-row items-center justify-self-center"
				variants={staggerVariant}
				initial="hidden"
				animate={isVisible ? 'visible' : 'hidden'}
			>
				<div className="flex flex-col justify-between gap-4 flex-shrink-0">
					<m.img
						className="aspect-square size-52 lg:size-60 rounded-full object-cover"
						src="src/assets/me.jpg"
						alt="Michael Alvin Setiono"
						variants={fadeDownVariant}
					/>

					<div className="flex items-center justify-evenly">
						{SOCIAL_LINKS.map((link, index) => (
							<m.a
								key={index}
								className="hvr-bob"
								href={link.href}
								target={!link.download ? '_blank' : undefined}
								download={link.download}
								id={link.id}
								data-tooltip-content={link.tooltip}
								variants={fadeDownVariant}
							>
								{link.icon}
							</m.a>
						))}
						<Tooltip anchorSelect="#download-cv" />
					</div>
				</div>

				<div className="flex flex-col gap-4 lg:gap-2">
					<div>
						<m.p
							className="text-xl sm:text-2xl font-semibold text-gray-500 text-center lg:text-start"
							variants={fadeDownVariant}
						>
							Hello, my name is
						</m.p>
						<m.p
							className="text-xl sm:text-3xl font-bold mb-2 text-center lg:text-start"
							variants={fadeDownVariant}
						>
							Michael Alvin Setiono
						</m.p>
					</div>

					<div>
						<m.p
							className="mb-2 text-base sm:text-xl text-center lg:text-justify"
							variants={fadeDownVariant}
						>
							About Me
						</m.p>
						<m.p
							className="mb-1 text-[12px] sm:text-base text-center lg:text-justify"
							variants={fadeDownVariant}
						>
							I am a dedicated Software Laboratory Assistant with
							a passion for coding and application development.
							With a robust background in mentoring and
							recruitment, I have developed academic assessments
							that facilitate practical learning for students.
						</m.p>
						<m.p
							className="text-[12px] sm:text-base text-center lg:text-justify"
							variants={fadeDownVariant}
						>
							Currently, I am pursuing a Master's in Computer
							Science, maintaining a strong academic record with a
							GPA of 3.80. I thrive on collaboration and
							creativity, always eager to explore new challenges
							in the tech world.
						</m.p>
					</div>
				</div>
			</m.div>
		</m.section>
	);
};

export default ProfileSection;
