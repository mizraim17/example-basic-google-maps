import React from 'react';

import './App.css';
import Map from './Components/Map';

function App(props) {
  return (
    <div className="App">
      <Map
        // https://www.google.com/maps/search/?api=1&query=Roma+Norte"
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBXapuB-ypLj14cZDUHw-4VEXDGXxWAc9g&query=Roma+Norte'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: '400px' }} />}
        mapElement={<div style={{ height: `100%` }} />}


      />
    </div>
  );
}

export default App;
