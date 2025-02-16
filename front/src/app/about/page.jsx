"use client";

import Image from "next/image";
import Link from "next/link";
import "$style/AboutPage.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

export default function AboutPage() {

	const teamMembers = [
		{ name: 'Марія', surname: 'Іванівна', post: 'Засновниця', img: '/images/about/user.png' },
		{ name: 'Олександр', surname: 'Петрович', post: 'Менеджер', img: '/images/about/user.png' },
		{ name: 'Ірина', surname: 'Коваленко', post: 'Дизайнер', img: '/images/about/user.png' },
		{ name: 'Андрій', surname: 'Сидоренко', post: 'Розробник', img: '/images/about/user.png' },
		{ name: 'Василь', surname: 'Іванчук', post: 'Маркетолог', img: '/images/about/user.png' },
		{ name: 'Василь', surname: 'Іванчук', post: 'Маркетолог', img: '/images/about/user.png' },
		{ name: 'Василь', surname: 'Іванчук', post: 'Маркетолог', img: '/images/about/user.png' },
		{ name: 'Василь', surname: 'Іванчук', post: 'Маркетолог', img: '/images/about/user.png' },
		{ name: 'Василь', surname: 'Іванчук', post: 'Маркетолог', img: '/images/about/user.png' },
		{ name: 'Василь', surname: 'Іванчук', post: 'Маркетолог', img: '/images/about/user.png' },
	];

	return (
		<main className='main'>
			<div className="main__about about">
				<div className="about__container">
					<div className="about__row">
						<div className="title-underline about__title"><h1 className='_main-title'>Хто ми?</h1></div>
						<div className="about-row__container">
							<div className="about__text">
								Ми - Марина Пальченко та Ксенія Самойлич засновниці “Швейної роти”, яка пошила <span className="highlight">100 000+</span> одиниць адаптивного одягу для поранених захисників у 90+ госпіталів України та об’єднала навколо себе 700+ волонтерів в усіх частинах світу.
							</div>
							<div className="about__text">
								28 го лютого 2022 року принесли в звичайний офіс дніпровської ІТ компанії власні швейні машинки і оверлоки та запустили “Швейну роту”, аби робити балаклави та термобілизну, яку безкоштовно роздавали Захисникам.
								Рекорд - 498 балаклав за день!
							</div>
							<div className="about__text">
								А у травні прийшов запит із госпіталю на <span className="highlight">“кіберодяг”</span> - це  спеціальний адаптивний одяг на липучках/кнопках, який швидко одягається, не травмує і не вимагає піднімати руки/ ноги пораненому воїнові.
							</div>
							<div className="about__text">
								Так, з часом навколо “Швейної роти” зібралась крута команда дуже активних і талановитих майстринь і майстрів зі всієї України.
							</div>
							<div className="about__text">
								Майстрині ініціативи знімають детальні покрокові відео майстер-класи з пошиття всіх виробів та оцифровані лекала, аби навіть новачки могли долучатись до ініціативи з будь-якого міста. Саме вони опубліковані в <Link style={{ color: "#4682B4" }} href={"/guides"}>“Навчальний центр”</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="main__team team">
				<div className="team__container">
					<div className="team__title title-underline">
						<h1 className="_main-title">Наша команда</h1>
					</div>
					<Swiper
						modules={[Pagination, Navigation]}
						spaceBetween={20}
						slidesPerView={1}
						autoHeight={true}
						breakpoints={{
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
							1280: { slidesPerView: 5 },
						}}
						pagination={{
							el: ".members-pagination",
							type: "bullets",
							clickable: true,
							bulletClass: "swiper-bullet",
							bulletActiveClass: "bullet-active",
						}}
						navigation
						className="team__members"
					>
						{teamMembers.map((member, index) => (
							<SwiperSlide key={index} className="team__member member">
								<div className="member__image">
									<Image
										src={member.img}
										alt={member.name}
										width={182}
										height={182}
										className="member-img"
									/>
								</div>
								<div className="member__body">
									<div className="member__name">{member.name}<br/>{member.surname}</div>
									<div className="member__post">{member.post}</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="swiper-pagination members-pagination"></div>
				</div>
			</div>
		</main>
	);
}