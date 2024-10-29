import { FC, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import fadeInVariant from './variants/FadeInVariant';

const fadeDownVariant = fadeInVariant({
	yOptions: { pos: [10, 0] },
});

interface Props {
	certificate: ICertificate;
	row: number;
}

const CertificateCard: FC<Props> = ({ certificate, row }) => {
	const cardRef = useRef(null);
	const isVisible = useInView(cardRef, {
		margin: '0px 0px -200px 0px',
	});

	return (
		<m.div
			className={`responsive-card flex flex-col w-11/12 md:w-3/4 max-w-3xl p-4 md:p-8 gap-2 md:gap-8 rounded-lg shadow-lg border ${row % 2 ? 'row-reverse' : 'row'}`}
			initial="hidden"
			animate={isVisible ? 'visible' : 'hidden'}
			variants={fadeDownVariant}
			ref={cardRef}
		>
			<img
				className="w-full lg:w-1/2 max-h-80 object-cover"
				src={`./certificates/${certificate.image}`}
				alt=""
			/>
			<div className="flex flex-col w-full justify-between gap-4">
				<div>
					<p className="text-base md:text-2xl mb-2 font-bold">
						{certificate.name}
					</p>
					<p className="text-[12px] sm:text-base text-justify">
						{certificate.description}
					</p>
				</div>
				<p
					className="w-full text-base lg:text-lg font-semibold"
					style={{ textAlign: row % 2 === 0 ? 'right' : 'left' }}
				>
					{certificate.year}
				</p>
			</div>
		</m.div>
	);
};

export default CertificateCard;
