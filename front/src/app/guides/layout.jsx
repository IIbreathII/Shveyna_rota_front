"use client"

import Aside from "$component/guides/Aside/Aside";
import { getData } from "api";
import { useEffect, useState } from "react";

function GuidesLayout({ children }) {

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getData("categories", setCategories);
	}, []);

	return (
		<>
			<Aside categories={categories} className="aside" />
			{children}
		</>
	)
}

export default GuidesLayout; 