import { FC } from 'react'
import { m } from 'framer-motion'
import IconGithub from './assets/icons/IconGithub'
import IconMail from './assets/icons/IconMail'
import IconLinkedin from './assets/icons/IconLinkedIn'
import ProfileSection from './sections/ProfileSection'
import ProjectsSection from './sections/ProjectsSection'

const Home: FC = () => {
	return (
		<div className="flex flex-col gap-8 py-8 scroll-smooth">
			<ProfileSection />
			<ProjectsSection />
		</div>
	)
}

export default Home
