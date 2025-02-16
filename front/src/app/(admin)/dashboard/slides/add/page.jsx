"use client";

import { useState } from "react";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import Alert from "$component/dashboard/Alert/Alert";
import { postData } from "api";

export default function ChangePage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [text_en, setTextEn] = useState("");
  const [title_en, setTitleEn] = useState("");
  const [file, setFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Будь ласка, оберіть файл");
      return;
    }

    if (!text || !text_en || !title || !title_en) {
      alert("Будь ласка, заповніть всі поля");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("path", file);
    formData.append("text_en", text_en);
    formData.append("title_en", title_en);

    postData("slides", formData, setShowAlert)
  };


  return (
    <main className="main">
      {showAlert && (
        <Alert
          message="Слайд був доданий успішно!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="main__form container-lg mt-5">
        <h1 className="form-title admin-title mb-4">Додати слайд</h1>
        <form className="form needs-validation" onSubmit={handleSubmit}>
          <div className="ua">
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
              <span className="input-group-text" id="inputGroup-sizing-default">Текст:</span>
              <input
                required
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
          <div className="en">
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
              <span className="input-group-text" id="inputGroup-sizing-default">Текст (англ):</span>
              <input
                required
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={text_en}
                onChange={(e) => setTextEn(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
      <Bootstrap />
    </main>
  );
}
