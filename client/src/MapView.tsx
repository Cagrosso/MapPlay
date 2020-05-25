import React from 'react';
import { GoogleMap, useLoadScript, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '400px',
};

const center = {
  lat: 38.904,
  lng: -77.016,
};

export interface mapProps {
  pointsOfInterest: any[];
}

const MapView: React.FC<mapProps> = ({ pointsOfInterest }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
  });

  const poi = pointsOfInterest.map((circleProps) => {
    return (
      <Circle
        key={circleProps.key}
        options={circleProps.options}
        center={circleProps.center}
        radius={circleProps.radius}
      />
    );
  });

  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {poi}
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap() : <h1>Loading</h1>;
};

export default React.memo(MapView);
