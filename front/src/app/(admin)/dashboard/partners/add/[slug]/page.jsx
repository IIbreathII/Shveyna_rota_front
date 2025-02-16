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
	const [file, setFile] = useState(null);
	const [showAlert, setShowAlert] = useState(false);

	const params = useParams();
	const { slug } = params

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!file) {
			alert("Будь ласка, оберіть файл");
			return;
		}

		const formData = new FormData();
		formData.append("path", file);

		changeData("partners", slug, formData, setShowAlert)
	};

	return (
		<main className="main">
			{showAlert && (
				<Alert
					message="Партнер був успішно змінений!"
					onClose={() => setShowAlert(false)}
				/>
			)}
			<div className="main__form container-lg mt-5">
				<h1 className="form-title admin-title mb-4">Змінити партнера</h1>
				<form className="form needs-validation" onSubmit={handleSubmit}>
					<div className="input-group mb-3">
						<input
							type="file"
							className="form-control"
							id="inputGroupFile02"
							onChange={(e) => setFile(e.target.files[0])}
							accept="image/*"
						/>
						<label className="input-group-text" htmlFor="inputGroupFile02">Зображення</label>
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
			<Bootstrap />
		</main>
	);
}
