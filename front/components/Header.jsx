"use client";

import Link from "next/link";
import Image from "next/image";
import "$style/Header.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLang } from "./Context/LangContext";

const Header = () => {
	const location = usePathname();
	const menuIcon = useRef();
	const router = useRouter();

	const { lang, changeLanguage } = useLang();

	const handleLanguageChange = (language) => {
		let currentPath = location;

		if (language === "ua") {
			currentPath = location.replace(/^\/en/, "") || "/";
		} else {
			currentPath = location.startsWith("/en") ? location : `/en${location}`;
		}

		changeLanguage(language);
		router.push(currentPath);
	};

	function openMenu(e) {
		e.stopPropagation();
		document.querySelector("._menu").classList.toggle("active");
		document.body.classList.toggle("menu-active");
		if (e.target.classList.contains("icon-menu")) {
			e.target.classList.toggle("btn-active");
		} else {
			e.target.closest(".icon-menu").classList.toggle("btn-active");
		}
	}

	function closeMenu() {
		document.querySelector("._menu").classList.remove("active");
		menuIcon.current.classList.remove("btn-active");
		document.body.classList.remove("menu-active");
	}

	return (
		<header className="header">
			<div className="header__container">
				<div className="left">
					<Link className="header__link" onClick={closeMenu} href="/">
						<div className="logo_shveya">
							<Image
								src="/images/logo.png"
								alt="Logo"
								width={200}
								height={60}
								className="logo-img"
								priority
							/>
						</div>
					</Link>
				</div>

				<button ref={menuIcon} onClick={openMenu} className="icon-menu">
					<span></span>
				</button>

				<div className="right _menu">
					<nav className="menu">
						<Link
							onClick={closeMenu}
							className={location == "/" || location == "/en" ? "menu__link link-active" : "menu__link"}
							href={"/"}
						>
							{lang == "ua" ? "Головна сторінка" : "Home page"}
						</Link>
						<Link
							onClick={closeMenu}
							className={location.includes("guides") ? "menu__link link-active" : "menu__link"}
							href={"/guides"}
						>
							{lang == "ua" ? "Навчальний центр" : "Training center"}
						</Link>
						<Link
							onClick={closeMenu}
							className={location.includes("/about") ? "menu__link link-active" : "menu__link"}
							href={"/about"}
						>
							{lang == "ua" ? "Про нас" : "About us"}
						</Link>
					</nav>
					<div className="menulang">
						<button onClick={() => {handleLanguageChange("en"); closeMenu()}}>EN</button>
						<div className="_line"></div>
						<button onClick={() => {handleLanguageChange("ua"); closeMenu()}}>UA</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;