import { FC } from 'react';
import fadeInVariant from './variants/FadeInVariant';
import { m } from 'framer-motion';

const colorCodes = {
	React: '#1166f0',
	ReactNative: '#3DDC84',
	HTML5: '#E34F26',
	CSS3: '#1572B6',
	JavaScript: '#F7DF1E',
	TypeScript: '#3178C6',
	Chakra: '#319795',
	AntDesign: '#0170FE',
	Express: '#000000',
	NextJS: '#0070F3',
	NestJS: '#E0234E',
	Firebase: '#FFCA28',
	DotNet: '#512BD4',
	Laravel: '#FF2D20',
	Nodemon: '#76D04B',
	MicrosoftSQLServer: '#CC2927',
	MySQL: '#4479A1',
	Prismadb: '#2D3748',
	PHP: '#777BB4',
	Vite: '#646CFF',
	Motoko: '#eb3471',
	TailwindCSS: '#0373fc',
	Python: '#f78c2f',
};

interface Props {
	stackName: string;
}

const fadeDownVariant = fadeInVariant({
	yOptions: {
		pos: [20, 0],
	},
});

const StackBubble: FC<Props> = ({ stackName }) => {
	return (
		<m.div
			variants={fadeDownVariant}
			className={`flex gap-1 p-[4px] sm:py-1 sm:px-2 items-center rounded-md hvr-pulse-shrink cursor-default`}
			style={{ backgroundColor: colorCodes[stackName] || '#333' }}
		>
			<img
				className="size-4 aspect object-contain"
				src={`../src/assets/logo/${stackName}.png`}
				alt={stackName}
				onError={(e) => (e.currentTarget.style.display = 'none')}
			/>
			<p className="text-[12px] sm:text-base text-white">{stackName}</p>
		</m.div>
	);
};

export default StackBubble;
