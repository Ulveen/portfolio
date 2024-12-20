function IconDownload(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			height="1em"
			width="1em"
			{...props}
		>
			<path
				fill="currentColor"
				d="M11 5a1 1 0 112 0v7.158l3.243-3.243 1.414 1.414L12 15.986 6.343 10.33l1.414-1.414L11 12.158V5z"
			/>
			<path
				fill="currentColor"
				d="M4 14h2v4h12v-4h2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z"
			/>
		</svg>
	);
}

export default IconDownload;
