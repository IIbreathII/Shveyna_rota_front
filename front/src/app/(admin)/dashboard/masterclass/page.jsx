'use client';

import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Link from "next/link";
import DatabaseItem from "$component/dashboard/DatabaseItem/DatabaseItem";
import { useEffect, useRef, useState } from "react";
import { deleteDataById, getData } from 'api';


export default function CardsPage() {
	const [categories, setCategories] = useState([]);
	const [guides, setGuides] = useState([]);
	const [selectedCardId, setSelectedCardId] = useState(null);
	const [selectedCategoryId, setSelectedCategoryId] = useState(null);

	useEffect(() => {
		getData("categories", setCategories);
	}, []);

	useEffect(() => {
		setGuides(categories.flatMap(item => item.subcategories.map(subcategory => ({ ...subcategory, categoryId: item.id }))))
	}, [categories]);

	return (
		<main className="main">
			<div className="modal fade" id="deleteApprove" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Підтвердження дії</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Майстер-клас буде повністю видалений!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Відмінити</button>
							<button
								type="button"
								data-bs-dismiss="modal"
								onClick={() => {
									if (selectedCardId && selectedCategoryId) {
										deleteDataById(`subcategories`, selectedCardId, setGuides);
									}
								}}
								className="btn btn-outline-danger">
								Видалити
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="main__items items container-md mt-5">
				<div className="items__header mb-4">
					<h1 className="admin-title">Майстер-класи ({guides.length})</h1>
					<Link href="/dashboard/masterclass/add" type="button" className="btn btn-success">
						<span className="_plus">+</span> Додати
					</Link>
				</div>
				<div className="list-group">
					{guides.map((guide, index) => (
						<DatabaseItem setSelectedId={setSelectedCardId} key={guide.id} categoryId={guide.categoryId} title={`Майстер-клас ${index + 1} (${guide.subcategory})`} link={`/dashboard/masterclass/add/${guide.id}`} id={guide.id} setSelectedCategoryId={setSelectedCategoryId} />
					))}
				</div>
			</div>
			<Bootstrap />
		</main>
	);
}