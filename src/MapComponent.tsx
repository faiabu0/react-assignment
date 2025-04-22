import Map, {Marker} from 'react-map-gl/mapbox';

import 'mapbox-gl/dist/mapbox-gl.css';

const ACCESS_TOKEN = 'pk.eyJ1Ijoic2Fsc2FnZXIyIiwiYSI6ImNsbHRhNjNpMTE3eXgzanA4bnEybjZuMTEifQ.QuapIW4TyMQBDClvM6pCjQ';

export default function MapComponent() {

  const markers = [
    { id: 1, lng: 46.7053, lat: 24.6400},
    { id: 2, lng: 46.7103, lat: 24.6100},
    { id: 3, lng: 46.7353, lat: 24.6200},
    { id: 4, lng: 46.7333, lat: 24.6550},
    { id: 5, lng: 46.7200, lat: 24.6320},
    { id: 6, lng: 46.7260, lat: 24.6420},
    { id: 7, lng: 46.7000, lat: 24.6600},
    { id: 8, lng: 46.7180, lat: 24.6200},
  ];

  return (
    <Map
    mapboxAccessToken={ACCESS_TOKEN}
    initialViewState={{
      longitude: 46.7053,
      latitude: 24.6400,
      zoom: 12
    }}
    scrollZoom={false}
    dragPan={false}
    dragRotate={false}
    doubleClickZoom={false}
    cursor='auto'
    style={{width: "100%", height: "100%"}}
    mapStyle="mapbox://styles/mapbox/dark-v11">

      {markers.map(marker => (
        <Marker key={marker.id}
        longitude={marker.lng}
        latitude={marker.lat}>
          <div className='w-[20px] h-[20px] rounded-full border-solid border-white border-[1.5px] bg-orange-400'></div>
        </Marker>
      ))}
    </Map>
  );
}

