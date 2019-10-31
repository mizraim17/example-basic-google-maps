import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 29.3945734, lng: -99.1742631 }}
    />
  );
}

export default withScriptjs(
  withGoogleMap(
    Map
  )
)