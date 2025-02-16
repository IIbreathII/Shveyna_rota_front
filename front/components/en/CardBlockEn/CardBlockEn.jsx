import { getEnData } from "api";
import Card from "./Card/Card";
import "./CardBlock.css"
import { useEffect, useState } from "react";

const CardBlockEn = () => {

	const [cards, setCards] = useState([]);

	useEffect(() => {
		getEnData("cards", setCards)
	}, [])

	return (
		<div className="cardbox">
			<div
				className="cardbox__container"
			>
				{cards.map(card =>
					<Card key={card.id} title={card.title_en} number={card.description_en} img={card.path}/>
				)}
			</div>
		</div>
	);
};

export default CardBlockEn;