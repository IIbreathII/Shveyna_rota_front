'use client';

import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Image from 'next/image';
import Link from "next/link";
import DatabaseItem from "$component/dashboard/DatabaseItem/DatabaseItem";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { deleteDataById, getData } from "api";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });

export default function CardsPage() {
	const [slides, setSlides] = useState([]);
	const [selectedMarkerId, setSelectedMarkerId] = useState(null);

	useEffect(() => {
		getData("slides", setSlides);
	}, []);

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
							Слайд буде повністю видалений!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Відмінити</button>
							<button type="button" data-bs-dismiss="modal" onClick={() => selectedMarkerId && deleteDataById("slides", selectedMarkerId, setSlides)} className="btn btn-outline-danger">Видалити</button>
						</div>
					</div>
				</div>
			</div>
			<div className="main__items items container-md mt-5">
				<div className="items__header mb-4">
					<h1 className="admin-title">Слайди ({slides.length})</h1>
					<Link href="/dashboard/slides/add" type="button" className="btn btn-success">
						<span className="_plus">+</span> Додати
					</Link>
				</div>
				<div className="list-group">
					{slides.map((slide) => (
						<DatabaseItem setSelectedId={setSelectedMarkerId} key={slide.id} title={`Слайд ${slide.id} (${slide.title})`} link={`/dashboard/slides/add/${slide.id}`} id={slide.id} />
					))}
				</div>
			</div>
			<Bootstrap/>
		</main>
	);
}