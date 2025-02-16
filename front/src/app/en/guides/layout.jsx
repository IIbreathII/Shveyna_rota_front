"use client"

import AsideEn from "$component/guides_en/AsideEn/AsideEn";
import { getEnData } from "api";
import { useEffect, useState } from "react";

function GuidesLayout({ children }) {

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getEnData("categories", setCategories);
	}, []);

	return (
		<>
			<AsideEn categories={categories} className="aside" />
			{children}
		</>
	)
}

export default GuidesLayout; 