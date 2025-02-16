import Link from "next/link";
import Image from "next/image";

const MediaLink = ({ title, img, url }) => {
	return (
		<Link href={url} className="media-links__link">
			<div className="media-links__image">
				<Image
					src={img}
					alt="logo"
					width={70}
					height={70}
					className="logo-img"
					priority
				/>
			</div>
			{title}
		</Link>
	);
};

export default MediaLink;