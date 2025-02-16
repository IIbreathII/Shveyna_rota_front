import "./MapBlock.css"
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import SearchMarkers from "$component/en/MapBlockEn/Search/Search";
import { useLang } from "$component/Context/LangContext";
import Link from "next/link";
import { getData, getEnData } from "api";

const MapBlockEn = () => {
	const [selectedPoint, setSelectedPoint] = useState(null);
	const [markers, setMarkers] = useState([]);

	const { lang } = useLang();

	useEffect(() => {
		getEnData("markers", setMarkers)
	}, [])

	const customIcon = L.icon({
		iconUrl: 'images/map/location.svg',
		iconSize: [48, 48],
		iconAnchor: [24, 48],
		popupAnchor: [0, -48],
	});

	const ZoomToPoint = ({ lat, lng }) => {
		const map = useMap();
		map.flyTo([lat, lng], 6);
		return null;
	};

	const handleZoom = (lat, lng) => {
		setSelectedPoint({ lat, lng });
	};

	return (
		<div className="map">
			<div className="map__container">
				<h2 className="map__title _main-title">{lang == "ua" ? "Знайти нас на мапі" : "Find us on the map"}</h2>
				<SearchMarkers markers={markers.length > 0 ? markers : []} handleZoom={handleZoom} />
				<div className="map__body">
					<MapContainer
						center={[50.27, 30.31]}
						zoom={5}
						maxZoom={6}
						style={{ height: '100%', width: '100%', borderRadius: "5px" }}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>

						{markers.map(marker =>
							<Marker
								key={marker.id}
								position={[marker.lat, marker.lng]}
								eventHandlers={{
									click: () => setSelectedPoint({ lat: marker.lat, lng: marker.lng, })
								}}
								icon={customIcon}
							>
								<Popup>
									<h1 className="marker__title">{marker.title_en}</h1>
									<div className="marker__number">Connect with us:<br /><Link href={marker.link ? marker.link : "#"}>{marker.link ? marker.link : "No link"}</Link></div>
								</Popup>
							</Marker>
						)}

						{selectedPoint && <ZoomToPoint lat={selectedPoint.lat} lng={selectedPoint.lng} />}
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default MapBlockEn;