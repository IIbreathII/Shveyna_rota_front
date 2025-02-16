import React, { useState } from 'react';

const PhotoInput = ({ photos, setPhotos }) => {

	const handleAddPhoto = (files) => {
		const newPhotos = Array.from(files).map((file) => ({
			file,
			name: file.name,
			id: URL.createObjectURL(file),
		}));
		setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
	};

	const handleRemovePhoto = (id) => {
		setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
	};

	const handleFileChange = (event) => {
		handleAddPhoto(event.target.files);
		event.target.value = null;
	};

	const handleDrop = (event) => {
		event.preventDefault();
		handleAddPhoto(event.dataTransfer.files);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	return (
		<div className="mb-3">
			<div
				className="input-group"
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				style={{ cursor: 'pointer' }}
			>
				<input type="file" multiple required accept="image/*" className="form-control" id="photoInput" onChange={handleFileChange} />
				<label className="input-group-text" htmlFor="photoInput">Upload</label>
			</div>

			{photos.length > 0 && (
				<ul className="list-group mt-3">
					{photos.map((photo) => (
						<li
							key={photo.id}
							className="list-group-item d-flex justify-content-between align-items-center"
						>
							{photo.name}
							<button
								type="button"
								className="btn btn-danger btn-sm"
								onClick={() => handleRemovePhoto(photo.id)}
							>
								&times;
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default PhotoInput;