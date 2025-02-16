import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function GDriveInput({ images, setImages }) {
	const handleChange = (index, field, value) => {
		const updatedImages = [...images];
		if (field === "path") {
			const match = value.match(/[-\w]{25,}/);
			updatedImages[index][field] = match ? match[0] : "";
		} else {
			updatedImages[index][field] = value;
		}
		setImages(updatedImages);
	};

	const addField = () => {
		setImages([...images, { path: "", text: "", text_en: "" }]);
	};

	const removeField = (index) => {
		const updatedImages = images.filter((_, i) => i !== index);
		setImages(updatedImages);
	};

	return (
		<div>
			{images.map((item, index) => (
				<div key={index} className="mb-3">
					<InputGroup>
						<Form.Control
							type="text"
							placeholder="Тип зображення"
							value={item.text}
							onChange={(e) => handleChange(index, "text", e.target.value)}
						/>
						<Form.Control
							type="text"
							placeholder="Тип зображення (англ)"
							value={item.text_en}
							onChange={(e) => handleChange(index, "text_en", e.target.value)}
						/>
					</InputGroup>
					<InputGroup className="mb-1">
						<Form.Control
							type="text"
							placeholder="Посилання на зображення"
							value={item.path}
							onChange={(e) => handleChange(index, "path", e.target.value)}
						/>
						<Button variant="danger" onClick={() => removeField(index)}>
							x
						</Button>
					</InputGroup>
				</div>
			))}
			<Button variant="outline-primary" onClick={addField}>
				+
			</Button>
		</div>
	);
}
