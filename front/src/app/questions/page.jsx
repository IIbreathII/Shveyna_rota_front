"use client";

import Spoiler from "$component/questions/QuestionSpoller";
import QuestionSpoller from "$component/questions/QuestionSpoller";
import "$style/questions/Questions.css"
import { useEffect, useRef } from "react";
import Link from "next/link";


export default function QuestionsPage() {
	return (
		<main className='main'>
			<div className="questions-wrapper">
				<div className="main__container">
					<div className="main__title _main-title">Відповіді на часті запитання</div>
					<div className="main__questions">
						<Spoiler title={"Як з нами зв'язатися?"} text={<>Зараз це телеграм-чат до каналу "Вироби Швейної роти"<br/><Link className="link-quesrions" target="_blank" href="https://t.me/+d4A8Ho3ug8xlMWMy">Натисніть щоб перейти</Link></>} />
						<Spoiler title={"Як отримати лекала?"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, magni eum? Dolorem exercitationem unde, animi aperiam iusto quos magnam debitis incidunt velit esse ipsum similique dicta natus dolore aliquam sequi!"} />
						<Spoiler title={"Де знайти матеріали для виробу?"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, magni eum? Dolorem exercitationem unde, animi aperiam iusto quos magnam debitis incidunt velit esse ipsum similique dicta natus dolore aliquam sequi!"} />
					</div>
				</div>
			</div>
		</main>
	);
}