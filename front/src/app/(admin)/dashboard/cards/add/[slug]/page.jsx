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
	const [title, setTitle] = useState("");
	const [title_en, setTitleEn] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [showAlert, setShowAlert] = useState(false);

	const [element, setElement] = useState();

	const params = useParams();
	const { slug } = params

	useEffect(() => {
		getData(`cards/${slug}`, setElement);
	}, []);

	useEffect(() => {
		if (element != undefined) {
			setTitle(element.title)
			setDescription(element.description)
			setFile(element.path)
			setTitleEn(element.title_en)
		}
	}, [element]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!file) {
			alert("Будь ласка, вставте посилання");
			return;
		}

		const formData = new FormData();
		formData.append("title", title);
		formData.append("title_en", title_en);
		formData.append("description", description);
		formData.append("description_en", description);
		formData.append("path", file);

		changeData("cards", slug, formData, setShowAlert)
	};

	return (
		<main className="main">
			{showAlert && (
				<Alert
					message="Картка була змінена!"
					onClose={() => setShowAlert(false)}
				/>
			)}
			<div className="main__form container-lg mt-5">
				<h1 className="form-title admin-title mb-4">Змінити картку</h1>
				<form className="form needs-validation" onSubmit={handleSubmit}>
					<div className="input-group mb-3">
						<input
							required
							type="file"
							className="form-control"
							id="inputGroupFile02"
							onChange={(e) => setFile(e.target.files[0])}
							accept="image/*"
						/>
						<label className="input-group-text" htmlFor="inputGroupFile02">Зображення</label>
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
						<span className="input-group-text" id="inputGroup-sizing-default">Значення:</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
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
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
			<Bootstrap />
		</main>
	);
}
