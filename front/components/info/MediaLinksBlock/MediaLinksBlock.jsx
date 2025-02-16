import Image from "next/image";
import "./MediaLinks.css"
import MediaLink from "./MediaLink/MediaLink";

const MediaLinksBlock = () => {
	
	const mediaLinks = [
		{
			id: 1,
			title: '@Shveina_rota',
			img: '/images/223.webp',
			url: 'instagram.com'
		},
		{
			id: 2,
			title: '@Shveina_rota2',
			img: '/images/telegram.webp',
			url: 'instagram.com'
		},
		{
			id: 3,
			title: '@Shveina_rota',
			img: '/images/223.webp',
			url: 'instagram.com'
		},
		{
			id: 4,
			title: '@Shveina_rota5',
			img: '/images/telegram.webp',
			url: 'instagram.com'
		},
	]

	return (
		<div className="media-links">
			<h2 className="media-links__title _main-title">Наші соцмережі</h2>
			<div className="media-links__container">
				<div className="media-links__block">
					{mediaLinks.map(link => 
						<MediaLink key={link.id} title={link.title} img={link.img} url={link.url} />
					)}
				</div>
			</div>
		</div>
	);
};

export default MediaLinksBlock;