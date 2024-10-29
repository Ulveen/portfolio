import { FC, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import ProjectImageCarousel from '../components/ProjectImageCarousel';
import projectData from '../assets/data/projects.json';
import SectionTitle from '../components/SectionTitle';

const projects: IProject[] = projectData;

const ProjectsSection: FC = () => {
	const projectSection = useRef(null);
	const titleRef = useRef(null);
	const isVisible = useInView(titleRef);

	return (
		<section
			id="projects"
			className="w-screen relative bg-neutral-900 p-8"
			ref={projectSection}
		>
			<div className="sticky top-0 p-8 z-10 w-full h-fit  bg-neutral-900">
				<SectionTitle
					classname="text-white text-center"
					text="My Projects"
					isVisible={isVisible}
					ref={titleRef}
				/>
			</div>
			<m.div className="flex flex-col items-center h-fit">
				<div className="flex flex-col h-fit w-screen gap-[50vh]">
					{projects.map((project, idx) => (
						<ProjectImageCarousel
							project={project}
							row={idx}
							key={idx}
						/>
					))}
					<div className="h-[50vh]" />
				</div>
			</m.div>
		</section>
	);
};

export default ProjectsSection;
