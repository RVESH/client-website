import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from
  "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from
  "leaflet/dist/images/marker-icon.png";
import markerShadow from
  "leaflet/dist/images/marker-shadow.png";

import "./SalonMap.scss";

const studioIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapFix({ locations }) {
  const map = useMap();

  const points = locations.map((location) => [
    Number(location.lat ?? location.latitude),
    Number(location.lng ?? location.longitude),
  ]);

  const fit = () => {
    if (points.length === 1) {
      map.setView(points[0], 13);
    }

    if (points.length > 1) {
      map.fitBounds(points, {
        padding: [35, 35],
        maxZoom: 12,
      });
    }

    map.invalidateSize();
  };

  setTimeout(fit, 0);

  return null;
}

export default function SalonMap({
  locations = [],
}) {
  const validLocations = locations.filter(
    (location) =>
      Number.isFinite(
        Number(location.lat ?? location.latitude)
      ) &&
      Number.isFinite(
        Number(location.lng ?? location.longitude)
      )
  );

  if (!validLocations.length) {
    return (
      <div className="salon-map salon-map--empty">
        <p>Studio locations will appear here.</p>
      </div>
    );
  }

  const first = validLocations[0];

  return (
    <div className="salon-map">
      <MapContainer
        center={[
          Number(first.lat ?? first.latitude),
          Number(first.lng ?? first.longitude),
        ]}
        zoom={13}
        scrollWheelZoom={false}
        className="salon-map__container"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapFix
          locations={validLocations}
        />

        {validLocations.map((location) => (
          <Marker
            key={location.id}
            position={[
              Number(
                location.lat ??
                location.latitude
              ),
              Number(
                location.lng ??
                location.longitude
              ),
            ]}
            icon={studioIcon}
          >
            <Popup>
              <strong>{location.name}</strong>
              <br />
              {location.addressLine1 ??
                location.address}
              {location.addressLine2 && (
                <>
                  <br />
                  {location.addressLine2}
                </>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}