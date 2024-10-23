import { FC } from 'react'
import { m } from 'framer-motion'
import IconGithub from '../assets/icons/IconGithub'
import IconMail from '../assets/icons/IconMail'
import IconLinkedin from '../assets/icons/IconLinkedIn'
import IconDownload from '../assets/icons/IconDownload'
import { Tooltip } from 'react-tooltip'

const ProfileSection: FC = () => {
	return (
		<m.div
			className="flex gap-8 px-4 py-8 w-3/5 items-center h-screen self-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className="gap-4 flex flex-col justify-between flex-shrink-0">
				<img
					className="w-60 h-60 aspect-square rounded-full object-cover"
					src="src/assets/me.jpg"
					alt=""
				/>
				<div className="flex items-center justify-evenly">
					<a href="https://github.com/ulveen">
						<IconGithub className="size-8" />
					</a>
					<a href="https://www.linkedin.com/in/michael-alvin-setiono-3aa9a1264/">
						<IconLinkedin className="size-8" />
					</a>
					<a href="mailto:setionoalvin9@gmail.com">
						<IconMail className="size-8" />
					</a>
					<a
						href="/Michael Alvin Setiono - CV.pdf"
						download
						id="download-cv"
						data-tooltip-content="Download my CV"
					>
						<IconDownload className="size-8" />
					</a>
					<Tooltip anchorSelect="#download-cv" />
				</div>
			</div>

			<div className="flex flex-col gap-4 justify-between">
				<div>
					<m.p className="text-2xl text-gray-500 font-semibold">
						Hello, my name is
					</m.p>
					<m.p className="text-3xl mb-4 font-bold">
						Michael Alvin Setiono
					</m.p>
				</div>

				<div>
					<m.p className="text-xl mb-2">About Me</m.p>
					<m.p className="text-base mb-1">
						I am a dedicated Software Laboratory Assistant with a
						passion for coding and application development. With a
						robust background in mentoring and recruitment, I have
						developed academic assessments that facilitate practical
						learning for students.
					</m.p>
					<m.p className="text-base">
						Currently, I am pursuing a Master's in Computer Science,
						maintaining a strong academic record with a GPA of 3.80.
						I thrive on collaboration and creativity, always eager
						to explore new challenges in the tech world.
					</m.p>
				</div>
			</div>
		</m.div>
	)
}

export default ProfileSection
