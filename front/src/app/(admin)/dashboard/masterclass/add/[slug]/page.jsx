"use client";

import { useEffect, useRef, useState } from "react";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import Alert from "$component/dashboard/Alert/Alert";
import { changeJsonData, getData, postData, postDataJson } from "api";
import GDriveInput from "$component/dashboard/GDriveInput/GDriveInput";
import { useParams } from "next/navigation";

export default function ChangePage() {
	const [categories, setCategories] = useState([]);
	const [formData, setFormData] = useState({
		title: '',
		title_en: '',
		videoUrl: '',
		details: '',
		details_en: '',
		summary: '',
		summary_en: '',
		authors: [],
		authors_en: [],
		category: '',
		category_en: '',
	});
	const [lekala, setLekala] = useState([{ path: "", text: "", text_en: "" }]);
	const [examples, setExamples] = useState([{ path: "", text: "", text_en: "" }]);

	const authors = useRef();
	const authors_en = useRef();
	const select = useRef();

	const [element, setElement] = useState();

	const params = useParams();
	const { slug } = params

	useEffect(() => {
		getData("categories", setCategories);
		getData(`subcategories/all/${slug}`, setElement);
	}, []);

	useEffect(() => {
		if (element != undefined) {
			setFormData({
				title: element.subcategory,
				title_en: element.subcategory_en,
				videoUrl: element.url,
				details: element.details,
				details_en: element.details_en,
				summary: element.summary,
				summary_en: element.summary_en,
				authors: element.authors,
				authors_en: element.authors_en,
				category: element.categoryname,
				category_en: element.categoryname_en
			})
			setLekala(element.lekala)
			setExamples(element.example)
			authors.current.value = element.authors.join(", ")
			if (element.authors_en) {
				authors_en.current.value = element.authors_en.join(", ")
			}
			select.current.value = element.categoryname
		}
	}, [element]);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const [showAlert, setShowAlert] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const requiredFields = [
			"title", "title_en", "videoUrl", "details", "details_en",
			"summary", "summary_en", "category"
		];

		const emptyFields = requiredFields.filter(field => !formData[field].trim());

		if (emptyFields.length > 0) {
			alert(`Будь ласка, заповніть всі поля! Пропущено: ${emptyFields.join(", ")}`);
			return;
		}

		const data = {
			subcategory: formData.title,
			subcategory_en: formData.title_en,
			details: formData.details,
			details_en: formData.details_en,
			summary: formData.summary,
			summary_en: formData.summary_en,
			url: formData.videoUrl,
			authors: formData.authors.map((author) => author.trim()),
			authors_en: formData.authors_en.map((author) => author.trim()),
			lekala: lekala,
			example: examples,
			categoryname: formData.category,
			categoryname_en: formData.category,
		};

		console.log(data);

		changeJsonData("subcategories", slug, data, setShowAlert)
	};

	return (
		<main className="main">
			{showAlert && (
				<Alert
					message="Майстер-клас успішно змінений!"
					onClose={() => setShowAlert(false)}
				/>
			)}
			<div className="main__form container-lg mt-5 mb-5">
				<h1 className="form-title admin-title mb-4">Додати майстре-клас</h1>
				<form className="form needs-validation" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">Заголовок</label>
						<input onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} type="text" className="form-control" id="title" name="title" placeholder="Введіть заголовок" />
					</div>

					<div className="mb-3">
						<label htmlFor="title" className="form-label">Заголовок (англ)</label>
						<input onChange={(e) => setFormData({ ...formData, title_en: e.target.value })} value={formData.title_en} type="text" className="form-control" id="title" name="title" placeholder="Введіть заголовок" />
					</div>

					<div className="mb-3">
						<label className="form-label">Лекала</label>
						<GDriveInput images={lekala} setImages={setLekala} />
					</div>

					<div className="mb-3">
						<label htmlFor="videoUrl" className="form-label">Посилання на відео(embed)</label>
						<input onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })} value={formData.videoUrl} type="url" className="form-control" id="videoUrl" name="videoUrl" placeholder="Введіть посилання на відео" />
					</div>

					<div className="mb-3">
						<label className="form-label">Приклади готового виробу</label>
						<GDriveInput images={examples} setImages={setExamples} />
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text">Деталі</span>
						<textarea onChange={(e) => setFormData({ ...formData, details: e.target.value })} value={formData.details} style={{ resize: "none" }} className="form-control" aria-label="деталі"></textarea>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text">Деталі (англ)</span>
						<textarea onChange={(e) => setFormData({ ...formData, details_en: e.target.value })} value={formData.details_en} style={{ resize: "none" }} className="form-control" aria-label="деталі"></textarea>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text">Підсумок</span>
						<textarea onChange={(e) => setFormData({ ...formData, summary: e.target.value })} value={formData.summary} style={{ resize: "none" }} className="form-control" aria-label="підсумок"></textarea>
					</div>

					<div className="input-group mb-3">
						<span className="input-group-text">Підсумок (англ)</span>
						<textarea onChange={(e) => setFormData({ ...formData, summary_en: e.target.value })} value={formData.summary_en} style={{ resize: "none" }} className="form-control" aria-label="підсумок"></textarea>
					</div>

					<div className="mb-3">
						<label htmlFor="title" className="form-label">Імена авторів через кому (,)</label>
						<input ref={authors} onChange={e => setFormData({ ...formData, authors: e.target.value.split(",") })} type="text" className="form-control" id="title" name="title" placeholder="Введіть авторів" />
					</div>

					<div className="mb-3">
						<label htmlFor="title" className="form-label">Імена авторів (англ)</label>
						<input ref={authors_en} onChange={e => setFormData({ ...formData, authors_en: e.target.value.split(",") })} type="text" className="form-control" id="title" name="title" placeholder="Введіть авторів" />
					</div>

					<div className="input-group mb-3">
						<label className="input-group-text" htmlFor="inputGroupSelect01">Категорія</label>
						<select ref={select} defaultValue="DEFAULT" onChange={e => setFormData({ ...formData, category: e.target.value })} className="form-select" id="inputGroupSelect01">
							<option value="DEFAULT" disabled>Оберіть категорію...</option>
							{categories.map(cat =>
								<option key={cat.id} value={cat.id}>{cat.category}</option>
							)}
						</select>
					</div>
					<button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
			<Bootstrap />
		</main>
	);
}
