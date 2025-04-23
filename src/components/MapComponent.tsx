import Map, {Marker} from 'react-map-gl/mapbox';
import SideBar from "./SideBar.tsx";
import {useState, useEffect} from "react";

import 'mapbox-gl/dist/mapbox-gl.css';

const ACCESS_TOKEN = 'pk.eyJ1Ijoic2Fsc2FnZXIyIiwiYSI6ImNsbHRhNjNpMTE3eXgzanA4bnEybjZuMTEifQ.QuapIW4TyMQBDClvM6pCjQ';

export default function MapComponent() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [camTitle, setCamTitle] = useState("");
  const [camSrc, setCamSrc] = useState("");
  const [camId, setCamId] = useState<number>();
  const [markers, setMarkers] = useState([]);

  function handleMarkerClick(cameraId: number, cameraTitle: string, cameraSrc: string){
    if(cameraId !== camId){
    setShowSidebar(true);
    setCamId(cameraId);
    setCamTitle(cameraTitle);
    setCamSrc(cameraSrc);
    }
    else{
      setShowSidebar(false)
      setCamId(undefined)
      setCamTitle("");
      setCamSrc("");
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/cameras")
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      setMarkers(resData.cameras);
    });
  },[]);

  return (
    <>
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
        latitude={marker.lat}
        onClick={() => handleMarkerClick(marker.id, marker.camName, marker.srcUrl)}>
          <div className={`w-[20px] h-[20px] rounded-full border-solid border-white border-[1.5px] cursor-pointer ${camId === marker.id ? "bg-pink-400" : "bg-orange-400" }`}></div>
        </Marker>
      ))}
    </Map>
    {showSidebar && <SideBar title={camTitle} url={camSrc}/>}
    </>
  );
}

