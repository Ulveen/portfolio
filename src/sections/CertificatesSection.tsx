import { FC, useRef } from 'react';
import CertificateCard from '../components/CertificateCard';
import cerficateData from '../assets/data/certificates.json';
import { m, useInView, useScroll, useTransform } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const certificates: ICertificate[] = cerficateData;

const CertificatesSection: FC = () => {
	const titleRef = useRef(null);
	const isVisible = useInView(titleRef, {
		margin: '0px 0px -200px 0px',
	});

	const { scrollYProgress } = useScroll({
		target: titleRef,
	});

	const bgOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

	return (
		<section
			id="certificates"
			className="relative flex flex-col items-center px-8 md:px-16 md:mb-16"
		>
			<m.div
				className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-neutral-900"
				style={{ opacity: bgOpacity }}
			/>
			<SectionTitle
				classname="m-8"
				text="My Certificates"
				isVisible={isVisible}
				ref={titleRef}
			/>
			<div className="flex flex-wrap justify-center gap-8">
				{certificates.map((cert, idx) => (
					<CertificateCard certificate={cert} row={idx} key={idx} />
				))}
			</div>
		</section>
	);
};

export default CertificatesSection;
