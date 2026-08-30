import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./ClinicMap.scss";

const icon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function MapView({ locations }) {
  const map = useMap();

  if (locations.length === 1) {
    map.setView(
      [
        locations[0].latitude,
        locations[0].longitude,
      ],
      14
    );
  }

  return null;
}

export default function ClinicMap({
  locations = [],
}) {
  if (!locations.length) {
    return (
      <div className="clinic-map clinic-map--empty">
        <div>
          <strong>Clinic locations coming soon.</strong>
          <span>
            The map will appear here when a clinic
            location is added.
          </span>
        </div>
      </div>
    );
  }

  const center = [
    locations[0].latitude,
    locations[0].longitude,
  ];

  return (
    <div className="clinic-map">
      <MapContainer
        center={center}
        zoom={locations.length > 1 ? 11 : 14}
        scrollWheelZoom={false}
        className="clinic-map__canvas"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapView locations={locations} />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[
              location.latitude,
              location.longitude,
            ]}
            icon={icon}
          >
            <Popup>
              <strong>
                {location.name}
              </strong>
              <br />
              {location.address}
              <br />
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}