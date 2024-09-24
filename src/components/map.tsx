import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

interface MapProps {
  title: string;
  details: string[];
  position: {
    lat: number;
    lng: number;
  };
}

export default function Map({ position, title, details }: MapProps) {
  function UpdateMapView() {
    const map = useMap();

    useEffect(() => {
      const { lat, lng } = position;

      if (lat !== null && lng !== null) {
        map.flyTo([lat, lng]);
      }
    }, [map]);

    return null;
  }

  const PinPointIcon = new Icon({
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pinpoint.svg/800px-Pinpoint.svg.png",
    iconSize: [30, 34],
    iconAnchor: [20, 0],
  });

  return (
    <MapContainer
      center={
        position.lat !== null && position.lng !== null
          ? [position.lat, position.lng]
          : [0, 0]
      }
      dragging={true}
      zoom={5}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{ height: "450px", width: "100%" }}
      className="z-0 h-full w-full overflow-hidden rounded-primary"
    >
      <UpdateMapView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={{
          lat: position.lat,
          lng: position.lng,
        }}
        icon={PinPointIcon}
      >
        <Popup>
          <strong className="text-sm">{title}</strong>
          <ul className="mt-2">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
