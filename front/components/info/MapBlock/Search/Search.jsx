import { useContext, useRef, useState } from 'react';
import "./Search.css"
import Image from "next/image";
import { useLang } from '$component/Context/LangContext';

const SearchMarkers = ({ markers, handleZoom }) => {
	const [query, setQuery] = useState("");
	const [filteredMarkers, setFilteredMarkers] = useState([]);
	const [isFocused, setIsFocused] = useState(false);
	const listRef = useRef(null);

	const { lang } = useLang();

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = (e) => {
		if (listRef.current && listRef.current.contains(e.relatedTarget)) {
			return;
		}
		setIsFocused(false);
	};

	const handleInputChange = (e) => {
		const input = e.target.value;
		setQuery(input);
		setIsFocused(true);

		if (input.trim() === "") {
			setFilteredMarkers([]);
		} else {
			const results = markers.filter((marker) =>
				marker.title.toLowerCase().includes(input.toLowerCase())
			);
			setFilteredMarkers(results);
		}
	};

	function handleSearch(lat, lng) {
		setIsFocused(false)
		handleZoom(lat, lng)
	}

	return (
		<div className="search">
			<input
				onFocus={handleFocus}
				onBlur={handleBlur}
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder={lang == "ua" ? "Знайти відділення..." : "Find a branch..."}
				className="search__input"
			/>
			{filteredMarkers.length > 0 && isFocused && (
				<ul
					ref={listRef}
					className="search__list"
				>
					{filteredMarkers.map((marker) => (
						<li
							key={marker.id}
							className="search__item"
							onMouseDown={(e) => e.preventDefault()}
							onClick={() => handleSearch(marker.lat, marker.lng)}
						>
							<span>{marker.title}</span>
							<Image
								src="images/map/location.svg"
								width={28}
								height={28}
								alt="marker"
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchMarkers;