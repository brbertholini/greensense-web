import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corrige o bug dos ícones não aparecerem
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// 🔥 Pontos fixos simulando lixeiras
const lixeiras: {
    id: string;
    name: string;
    coords: [number, number]; // 🔥 Isso é uma tupla, não um array solto
  }[] = [
    { id: 'L1', name: 'Lixeira - Praça Central', coords: [-23.55052, -46.633308] },
    { id: 'L2', name: 'Lixeira - Rua das Flores', coords: [-23.552, -46.630] },
    { id: 'L3', name: 'Lixeira - Av. Paulista', coords: [-23.563987, -46.654321] },
    { id: 'L4', name: 'Lixeira - Parque Verde', coords: [-23.545, -46.635] },
  ];
  

export default function Map() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[-23.55052, -46.633308]}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        {/* 🔥 Mapa base */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 🔥 Marcadores de lixeiras */}
        {lixeiras.map((lixeira) => (
          <Marker key={lixeira.id} position={lixeira.coords}>
            <Popup>
              {lixeira.name}
              <br />
              ID: {lixeira.id}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
