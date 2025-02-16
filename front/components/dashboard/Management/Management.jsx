import Link from "next/link";
import ManagementElement from "../ManagementElement/ManagementElement";
import { useEffect, useState } from "react";
import { getData } from "api";

const Management = () => {
	const [statistic, setStatistic] = useState({})

	useEffect(() => {
		getData("statistic", setStatistic)
	}, [])

	return (
		<>
			<h1 className="admin__title admin-title">Керування елементами</h1>
			<div className="mt-3">
				<ul className="list-group">
					<ManagementElement title="Слайди" number={statistic.Slide} addLink="dashboard/slides/add" link="dashboard/slides" />
					<ManagementElement title="Статистичні картки" number={statistic.card} addLink="dashboard/cards/add" link="dashboard/cards" />
					<ManagementElement title="Медіа посилання" number={statistic.MediaLinks} addLink="dashboard/media/add" link="dashboard/media" />
					<ManagementElement title="Партнери" number={statistic.Partners} addLink="dashboard/partners/add" link="dashboard/partners" />
					<ManagementElement title="Маркери на мапі" number={statistic.Marker} addLink="dashboard/markers/add" link="dashboard/markers" />
					<ManagementElement title="Категорії кібер-одягу" number={statistic.Category} addLink="dashboard/categories/add" link="dashboard/categories" />
					<ManagementElement title="Майстер-класи" number={statistic.Subcategory} addLink="dashboard/masterclass/add" link="dashboard/masterclass" />
				</ul>
			</div>
		</>
	);
};

export default Management;