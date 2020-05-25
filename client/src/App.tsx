import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import MapView from './MapView';
import './App.css';
import TextField from './textField';

function App(): ReactElement {
  const { register, handleSubmit } = useForm();
  const [radius, setRadius] = useState<number>(10);

  const onChange = (data: any) => {
    console.log(data);
    setRadius(Number(data.radiusTextField));
  };

  const center = {
    lat: 38.904,
    lng: -77.016,
  };

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1,
  };

  return (
    <div className="App">
      <MapView
        pointsOfInterest={[
          { center: center, options: options, key: 1, radius: radius },
        ]}
      />
      <form onSubmit={handleSubmit(onChange)}>
        <TextField
          reference={register}
          fieldLabel={'Radius'}
          id={'radius'}
          name={'radiusTextField'}
        />
      </form>
    </div>
  );
}

export default App;
