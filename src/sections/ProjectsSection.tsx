import { FC, useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'

const ProjectsSection: FC = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end end'],
	})

	const x = useTransform(scrollYProgress, [0, 1], ['0', '-500vw'])

	return (
		<section ref={targetRef} className="relative h-[500vh] bg-neutral-900">
			<div className="sticky top-0 flex h-screen overflow-hidden">
				<m.div style={{ x }} className="flex">
					<div className="w-screen h-screen"></div>
					<div className="w-screen h-screen bg-red-50"></div>
					<div className="w-screen h-screen bg-green-50"></div>
					<div className="w-screen h-screen bg-blue-50"></div>
					<div className="w-screen h-screen bg-purple-50"></div>
					<div className="w-screen h-screen"></div>
				</m.div>
			</div>
		</section>
	)
}

export default ProjectsSection
