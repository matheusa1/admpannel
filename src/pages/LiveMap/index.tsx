import Map from "../../components/Map"

const LiveMap = () => {
  return (
    <Map
      center={{
        lat: -20,
        lng: -50,
      }}
      zoom={13}
      style="h-full rounded-xl"
    />
  )
}

export default LiveMap
