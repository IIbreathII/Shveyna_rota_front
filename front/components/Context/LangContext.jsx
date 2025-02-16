"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const LangContext = createContext();

export function LangProvider({ children }) {
	const [lang, setLang] = useState("ua");

	// Загружаем язык при первом рендере
	useEffect(() => {
		const storedLang = localStorage.getItem("lang") || Cookies.get("lang") || "ua";
		setLang(storedLang);
	}, []);

	const changeLanguage = (language) => {
		// Сохраняем язык в localStorage и Cookies
		localStorage.setItem("lang", language);
		Cookies.set("lang", language, { expires: 365 });
		setLang(language);
	};

	return (
		<LangContext.Provider value={{ lang, changeLanguage }}>
			{children}
		</LangContext.Provider>
	);
}

export function useLang() {
	return useContext(LangContext);
}