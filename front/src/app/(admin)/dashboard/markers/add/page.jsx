"use client";

import { useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import Alert from "$component/dashboard/Alert/Alert";
import { postData } from "api";

export default function ChangePage() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [title, setTitle] = useState("");
  const [title_en, setTitleEn] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("lat", lat.replace(',', '.'));
    formData.append("lng", lng.replace(',', '.'));
    formData.append("title", title);
    formData.append("title_en", title_en);
    formData.append("link", phone);
    formData.append("path", file);

    console.log(formData);

    postData("markers", formData, setShowAlert)
  };

  return (
    <main className="main">
      {showAlert && (
        <Alert
          message="Маркер був доданий успішно!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="main__form container-lg mt-5">
        <h1 className="form-title admin-title mb-4">Додати маркер на карті</h1>
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
      <Bootstrap/>
    </main>
  );
}
