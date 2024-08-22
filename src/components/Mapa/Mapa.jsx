import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Sobrescribe las rutas de los íconos
L.Icon.Default.mergeOptions({
    iconUrl: iconUrl,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: shadowUrl,
});

export const Mapa = () => {
    const locations = [
        { id: 1, position: [13.4063, -89.0089], popup: "Las Isletas" },
        { id: 2, position: [13.34870, -88.95251], popup: "San Luis La Herradura" },
        { id: 3, position: [13.31632, -88.93802], popup: "Costa del Sol" },
        { id: 4, position: [13.3511, -89.02284], popup: "San Marcelino" },
        { id: 5, position: [13.49760, -89.02758], popup: "El Rosario" },
        { id: 6, position: [13.47092, -88.99832], popup: "Laguna de Nahualapa" },
        { id: 7, position: [13.48509, -88.99184], popup: "Ruta Autopista a Zacatecoluca" },
        { id: 8, position: [13.48356, -89.05085], popup: "Miraflores" }
    ];

    const posicion = [13.4888, -89.0438];
    return (
        <MapContainer
            center={posicion}
            zoom={11}
            scrollWheelZoom={false}
            style={{ height: "600px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map(location => (
                <Marker key={location.id} position={location.position}>
                    <Popup>
                        {location.popup}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
