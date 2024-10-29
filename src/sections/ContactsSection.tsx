import { FC, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import IconLocationOutline from '../assets/icon/IconLocationOutline';
import IconMail from '../assets/icon/IconMail';
import IconTelephone from '../assets/icon/IconTelephone';
import ContactDetail from '../components/ContactDetail';
import IconGithub from '../assets/icon/IconGithub';
import IconLinkedin from '../assets/icon/IconLinkedIn';
import fadeInVariant from '../components/variants/FadeInVariant';

const CONTACT_INFO = {
	email: 'setionoalvin9@gmail.com',
	phone: '+62 813-9035-8786',
	location: 'Jakarta Barat, Indonesia',
} as const;

type SocialLink = {
	href: string;
	icon: JSX.Element;
};

const SOCIAL_LINKS: SocialLink[] = [
	{
		href: 'https://github.com/ulveen',
		icon: <IconGithub className="size-8 lg:size-8" />,
	},
	{
		href: 'https://www.linkedin.com/in/michael-alvin-setiono-3aa9a1264/',
		icon: <IconLinkedin className="size-8 lg:size-8" />,
	},
	{
		href: 'mailto:setionoalvin9@gmail.com',
		icon: <IconMail className="size-8 lg:size-8" />,
	},
];

const staggerVariant = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const fadeDownVariant = fadeInVariant({
	yOptions: {
		pos: [20, 0],
	},
});

const ContactsSection: FC = () => {
	const sectionRef = useRef(null);
	const headerRef = useRef(null);
	const contactsRef = useRef(null);
	const socialsRef = useRef(null);

	const headerIsVisible = useInView(headerRef, { amount: 0.5 });
	const contactsIsVisible = useInView(contactsRef, { amount: 0.5 });
	const socialsIsVisible = useInView(socialsRef, { amount: 0.5 });

	return (
		<m.section
			ref={sectionRef}
			className="flex flex-col items-center justify-center p-8 md:p-16 gap-8"
		>
			<m.div
				ref={headerRef}
				className="flex flex-col items-center gap-4 text-center"
				variants={fadeDownVariant}
				initial="hidden"
				animate={headerIsVisible ? 'visible' : 'hidden'}
			>
				<p className="text-2xl lg:text-3xl font-bold">Contact Me</p>
				<div>
					<p className="text-xl lg:text-2xl">
						Have a project in mind or just want to chat? Reach out,
					</p>
					<p className="text-xl lg:text-2xl">
						I'd love to hear from you!
					</p>
				</div>
			</m.div>

			<m.div
				ref={contactsRef}
				className="flex flex-col w-fit max-w-2xl rounded-lg p-8 gap-4"
				variants={staggerVariant}
				initial="hidden"
				animate={contactsIsVisible ? 'visible' : 'hidden'}
			>
				<m.div variants={fadeDownVariant}>
					<ContactDetail
						icon={
							<IconLocationOutline className="size-8 lg:size-10" />
						}
						text={CONTACT_INFO.location}
					/>
				</m.div>
				<m.div variants={fadeDownVariant}>
					<ContactDetail
						icon={<IconTelephone className="size-8 lg:size-10" />}
						text={CONTACT_INFO.phone}
					/>
				</m.div>
				<m.div variants={fadeDownVariant}>
					<ContactDetail
						icon={<IconMail className="size-8 lg:size-10" />}
						text={CONTACT_INFO.email}
					/>
				</m.div>
			</m.div>

			<m.div
				ref={socialsRef}
				className="w-full justify-center flex gap-8"
				variants={staggerVariant}
				initial="hidden"
				animate={socialsIsVisible ? 'visible' : 'hidden'}
			>
				{SOCIAL_LINKS.map(({ href, icon }, index) => (
					<m.a
						key={index}
						href={href}
						target="_blank"
						rel="noreferrer"
						className="hvr-bob"
						variants={fadeDownVariant}
					>
						{icon}
					</m.a>
				))}
			</m.div>
		</m.section>
	);
};

export default ContactsSection;
