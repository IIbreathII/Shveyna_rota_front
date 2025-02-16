import Image from "next/image";
import Link from "next/link";
import "$style/Footer.css"
import { useLang } from "./Context/LangContext";

const Footer = () => {

	const { lang } = useLang();

	return (
		<footer className="footer">
			<div className="_background"></div>
			<div className="footer__wrapper">
				<div className="footer__container">
					<div className="footer__title">
						<Image
							src="/images/headerlogo.png"
							alt="logo"
							width={180}
							height={180}
						/>
						{lang == "ua" ? "Швейна рота" : "Shveina rota"}
					</div>
					<div className="footer__columns">
						<div className="footer__column column-footer">
							<div className="column-footer__title">{lang == "ua" ? "Соц мережі" : "Social media"}</div>
							<div className="column-footer__body">
								<div className="column-footer__row">
									<Link className="column-footer__link" href="t.me/shveina_rota">
										<Image
											src="/images/footer/telegram.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Telegram
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="t.me/shveina_rota">
										<Image
											src="/images/footer/instagram.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Instagram
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="t.me/shveina_rota">
										<Image
											src="/images/footer/facebook.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Facebook
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="https://www.facebook.com/p/%D0%A8%D0%B2%D0%B5%D0%B9%D0%BD%D0%B0-%D1%80%D0%BE%D1%82%D0%B0-100083407995435/?locale=uk_UA">
										<Image
											src="/images/footer/youtube.png"
											alt="logo"
											width={35}
											height={35}
										/>
										Youtube
									</Link>
								</div>
							</div>
						</div>
						<div className="footer__column column-footer">
							<div className="column-footer__title">{lang == "ua" ? "Категорії одягу" : "Categories"}</div>
							<div className="column-footer__body">
								<div className="column-footer__row">
									<Link className="column-footer__link" href="#">
										{lang == "ua" ? "Кіберодяг" : "Cyberclothing"}
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="#">
										{lang == "ua" ? "Бронеодяг" : "Broneodyag"}
									</Link>
								</div>
							</div>
						</div>
						<div className="footer__column column-footer">
							<div className="column-footer__title">{lang == "ua" ? "Спільнота" : "Community"}</div>
							<div className="column-footer__body">
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/guides">
									{lang == "ua" ? "Навчальні матеріали" : "Training center"}
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/about">
									{lang == "ua" ? "Про нас" : "About us"}
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="/questions">
										{lang == "ua" ? "Відповіді на питання" : "Answers to questions"}
									</Link>
								</div>
								<div className="column-footer__row">
									<Link className="column-footer__link" href="#">
										{lang == "ua" ? "Підтримати донатом" : "Support with a donation"}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__bottom">

				</div>
			</div>
		</footer>
	);
};

export default Footer;