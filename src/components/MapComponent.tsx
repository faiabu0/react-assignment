import Map, {Marker} from 'react-map-gl/mapbox';
import SideBar from "./SideBar.tsx";
import {useState} from "react";

import 'mapbox-gl/dist/mapbox-gl.css';

const ACCESS_TOKEN = 'pk.eyJ1Ijoic2Fsc2FnZXIyIiwiYSI6ImNsbHRhNjNpMTE3eXgzanA4bnEybjZuMTEifQ.QuapIW4TyMQBDClvM6pCjQ';

export default function MapComponent() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [camTitle, setCamTitle] = useState("");
  const [camSrc, setCamSrc] = useState("");
  const [camId, setCamId] = useState<number>();

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

  const markers = [
    { id: 1, lng: 46.7053, lat: 24.6400, camName: "Test 1", srcUrl:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"},
    { id: 2, lng: 46.7103, lat: 24.6100, camName: "Test 2", srcUrl:"https://test-streams.mux.dev/x36xhzz/url_6/193039199_mp4_h264_aac_hq_7.m3u8"},
    { id: 3, lng: 46.7353, lat: 24.6200, camName: "Test 3", srcUrl:"https://test-streams.mux.dev/test_001/stream.m3u8"},
    { id: 4, lng: 46.7333, lat: 24.6550, camName: "Test 4", srcUrl:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8"},
    { id: 5, lng: 46.7200, lat: 24.6320, camName: "Test 5", srcUrl:"https://test-streams.mux.dev/issue666/playlists/cisq0gim60007xzvi505emlxx.m3u8"},
    { id: 6, lng: 46.7260, lat: 24.6420, camName: "Test 6", srcUrl:"https://test-streams.mux.dev/bbbAES/playlists/sample_aes/index.m3u8"},
    { id: 7, lng: 46.7000, lat: 24.6600, camName: "Test 7", srcUrl:"https://test-streams.mux.dev/pts_shift/master.m3u8"},
    { id: 8, lng: 46.7180, lat: 24.6200, camName: "Test 8", srcUrl:"https://test-streams.mux.dev/tos_ismc/main.m3u8"},
  ];

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

