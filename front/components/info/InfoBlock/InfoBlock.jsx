import "./InfoBlock.css"
import Image from 'next/image';
import { Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { useEffect, useState } from "react";
import { getData } from "api";

const InfoBlock = () => {
	const blockAnimation = {
		hidden: { y: 50, opacity: 0 },
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	const [slides, setSlides] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData("slides", (data) => {
			setSlides(data);
			setLoading(false);
		});
	}, []);

	return (
		<div className={loading ? "infobox _swiper loading-box" : "infobox _swiper"}>
			<div className="infobox__container">
				{loading ? (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : (
					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={50}
						slidesPerView={1}
						pagination={slides.length > 1 ? {
							el: ".info-pagination",
							type: "bullets",
							clickable: true,
							bulletClass: "swiper-bullet",
							bulletActiveClass: "bullet-active",
						} : false}
						autoplay={{
							delay: 3500,
							disableOnInteraction: false,
						}}
						className="swiper__container"
					>
						{slides.map(slide => (
							<SwiperSlide key={slide.id}>
								<div className="infobox__slide">
									<div className="left">
										<div className="icon_shveya">
											<Image
												src={process.env.BACK_URL_IMG + slide.path}
												alt="logo"
												width={356}
												height={61}
												className="logo-img"
												priority
											/>
										</div>
									</div>
									<motion.div
										className="right"
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
									>
										<motion.h1 custom={1} variants={blockAnimation}>
											{slide.title}
										</motion.h1>
										<motion.h2 custom={1.3} variants={blockAnimation}>
											{slide.text}
										</motion.h2>
									</motion.div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
				{slides.length > 1 &&
					<div className="swiper-pagination info-pagination"></div>
				}
			</div>
		</div>
	);
};

export default InfoBlock;