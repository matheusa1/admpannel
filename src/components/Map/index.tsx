import { useState } from "react"
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"

interface MapProps {
  center: {
    lat: number
    lng: number
  }
  style?: string
  zoom: number
}

function LocationMarker() {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e: any) {
      setPosition(e.latlng)
      console.log(e)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const Map = ({ center, style, zoom }: MapProps) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={style}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}

export default Map
