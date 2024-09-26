 
import {AdvancedMarker, APIProvider, Pin, Map  } from '@vis.gl/react-google-maps';

import './App.css'


const  MAP_ID= "ChIJiwMeb3Gn0YURSbeWFBBcMRM"

function App() {
   

  return (
    <APIProvider apiKey={ import.meta.env.VITE_GOOGLE_MAPS_API}>
      <h1>Mapa</h1>

   
     <Map zoom={15} center={{lat: 20.079323858175385,  lng: -98.70490929845258}} mapId={MAP_ID} style={{width: '100vw', height: '100vh'}}>
        <AdvancedMarker position={{lat: 20.54599, lng: -98.03233}}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
    </Map>
  </APIProvider>
  )
}

export default App
