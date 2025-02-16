"use client"

import { getData } from "api";
import "./PartnersBlock.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const PartnersBlock = () => {
	const [partners, setPartners] = useState([]);

	useEffect(() => {
		getData("partners", setPartners)
	},[])

	return (
		<div className="partners">
			<h1 className="partners__title _main-title">Наші партнери</h1>
			<div className="partners__wrapper">
				<div className="partners__container">
					<div className="partners__box">
						<Swiper
							slidesPerView="auto"
							spaceBetween={30}
							freeMode={true}
							speed={900}
							modules={[Autoplay]}
							autoplay={{
								delay: 1000,
								disableOnInteraction: false,
							}}
						>
							{partners.map(partner =>
								<SwiperSlide className="partners__slide" key={partner.id}>
									<div className="partners__partner">
										<img src={process.env.BACK_URL_IMG + partner.path} alt="img" />
									</div>
								</SwiperSlide>
							)}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PartnersBlock;