import { motion } from "framer-motion"
import Card, { MCard } from "./Card/Card";
import "./CardBlock.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getData } from "api";

const CardBlock = () => {

	const [cards, setCards] = useState([]);

	useEffect(() => {
		getData("cards", setCards)
	}, [])

	// const cards = [
	// 	{
	// 		id: 4,
	// 		img: 'url/img',
	// 		title: 'Шпиталів, лікарень, стабпунктів, рехабів, центрів протезування,  яким передавали адаптивний одяг',
	// 		number: '100+'
	// 	},
	// 	{
	// 		id: 1,
	// 		img: 'url/img',
	// 		title: 'Одиниць адаптивного одягу',
	// 		number: '100 000+'
	// 	},
	// 	{
	// 		id: 2,
	// 		img: 'url/img',
	// 		title: 'Волонтерів в усіх частинах світу!',
	// 		number: ' 700+'
	// 	},
	// 	{
	// 		id: 3,
	// 		img: 'url/img',
	// 		title: 'Індивідальних адресних запитів на адаптивний одяг',
	// 		number: '1800+'
	// 	},
	// ]

	return (
		<div className="cardbox">
			<div
				className="cardbox__container"
			>
				{cards.map(card => 
					<Card key={card.id} title={card.title} number={card.description} img={card.path}/>
				)}
			</div>
		</div>
	);
};

export default CardBlock;