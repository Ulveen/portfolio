import { FC } from 'react';

interface Props {
	icon: JSX.Element;
	text: string;
}

const ContactDetail: FC<Props> = ({ icon, text }) => (
	<div className="flex items-center gap-6">
		<div className="flex items-center justify-center">{icon}</div>
		<p className="text-lg lg:text-xl">{text}</p>
	</div>
);

export default ContactDetail;
