import axios from "axios";

// функція отримання карток
export async function getData(type, setData) {
	try {
		const response = await axios.get(process.env.BACK_URL + type);
		console.log(response.data);
		setData(response.data);
	} catch (error) {
		console.error("Помилка при отриманні даних:", error);
	}
}

export async function getEnData(type, setData) {
	try {
		const response = await axios.get(process.env.BACK_URL_EN + type);
		console.log(response.data);
		setData(response.data);
	} catch (error) {
		console.error("Помилка при отриманні даних:", error);
	}
}


// функція видалення карток
export async function deleteDataById(type, id, setData) {
	try {
		await axios.delete(`${process.env.BACK_URL}${type}/${id}`);
		setData((prevData) => prevData.filter((data) => data.id !== id));
	} catch (error) {
		console.error(`Помилка при видаленні елемнта з id ${id}:`, error);
	}
}

export async function postData(type, formData, setShowAlert) {
	try {
		await axios.post(process.env.BACK_URL + type, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

export async function postDataJson(type, data, setShowAlert) {
	try {
		await axios.post(process.env.BACK_URL + type, data, {
			headers: { "Content-Type": "application/json" },
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

export async function changeData(type, id, data, setShowAlert) {
	try {
		await axios.put(process.env.BACK_URL + type + "/" + id, data, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

export async function changeJsonData(type, id, data, setShowAlert) {
    try {
        await axios.put(`${process.env.BACK_URL}${type}/${id}`, data, {
            headers: { "Content-Type": "application/json" },
        });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
        console.error("Помилка при відправці даних:", error);
        alert("Помилка при відправці даних.");
    }
}