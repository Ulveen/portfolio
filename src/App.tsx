import { FC } from 'react';
import ProfileSection from './sections/ProfileSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactsSection from './sections/ContactsSection';
import { Navigator } from './components/Navigator';

const Home: FC = () => {
	return (
		<div className="flex flex-col">
			<Navigator />
			<ProfileSection />
			<ProjectsSection />
			<div className="h-[90vh] bg-neutral-900" />
			<CertificatesSection />
			<ContactsSection />
		</div>
	);
};

export default Home;
