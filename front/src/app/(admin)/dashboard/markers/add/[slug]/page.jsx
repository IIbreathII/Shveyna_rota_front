"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import Alert from "$component/dashboard/Alert/Alert";
import { changeData, getData, postData } from "api";
import { useParams } from "next/navigation";

export default function ChangePage() {
	const [lat, setLat] = useState("");
	const [lng, setLng] = useState("");
	const [title, setTitle] = useState("");
	const [title_en, setTitleEn] = useState("");
	const [phone, setPhone] = useState("");
	const [file, setFile] = useState(null);
	const [showAlert, setShowAlert] = useState(false);

	const [element, setElement] = useState([]);

	const params = useParams();
	const { slug } = params

	useEffect(() => {
		getData('markers/' + slug, setElement);
	}, []);

	useEffect(() => {
		if (element && Object.keys(element).length > 0) {
			setLat(element.lat || "");
			setLng(element.lng || "");
			setTitle(element.title || "");
			setTitleEn(element.title_en || "");
			setPhone(element.link ? element.link : "");
		}
	}, [element]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("lat", Number(lat));
		formData.append("lng", Number(lng));
		formData.append("title", title);
		formData.append("title_en", title_en);
		formData.append("link", phone);
		formData.append("path", file);

		console.log(formData);

		changeData("markers", slug, formData, setShowAlert)
	};

	return (
		<main className="main">
			{showAlert && (
				<Alert
					message="Маркер був успішно змінений!"
					onClose={() => setShowAlert(false)}
				/>
			)}
			<div className="main__form container-lg mt-5">
				<h1 className="form-title admin-title mb-4">Змінити маркер на карті</h1>
				<form className="form needs-validation" onSubmit={handleSubmit}>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Широта:</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={lat}
							onChange={(e) => setLat(e.target.value)}
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Довгота:</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={lng}
							onChange={(e) => setLng(e.target.value)}
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Заголовок:</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Заголовок (англ):</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={title_en}
							onChange={(e) => setTitleEn(e.target.value)}
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Посилання для зв'язку:</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
			<Bootstrap />
		</main>
	);
}
