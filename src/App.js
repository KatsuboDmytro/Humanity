import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';

import { Planet } from './component/canvas/Planet.jsx';
import { StarsComponent } from './component/canvas/Stars';
import { Header } from './component/lending/Header';
import { Desire } from './component/lending/Desire';
import { AccordionComponent } from './component/lending/Accordion';

import EarthDayMap from './assets/8k_earth_daymap.jpg'
import EarthNormalMap from './assets/8k_earth_normal_map.jpg'
import EarthSpecularyMap from './assets/8k_earth_specular_map.jpg'
import EarthCloudsMap from './assets/8k_earth_clouds.jpg'
import MarsDayMap from './assets/8k_mars.jpg'
import { AllRights } from './component/lending/AllRights.jsx';

const CanvasContainer = styled.div`
  width: 100%;
  height: 200%;
`;

function App() {
  return (
    <CanvasContainer>
      <Header />
      <Desire text={'Ми - прагнемо еволюцінувати'} />
      <Canvas>
        <Suspense fallback={null}>
          <StarsComponent />
          <Planet PlanetDayMap={EarthDayMap} PlanetNormalMap={EarthNormalMap} PlanetSpecularyMap={EarthSpecularyMap} PlanetCloudsMap={EarthCloudsMap} />
        </Suspense>
      </Canvas>
      <AccordionComponent />
      <Desire text={'У нашій перспективі - Марс'} subText={'Чекай нас!'} isSubText={true} />
      <Canvas>
        <Suspense fallback={null}>
          <StarsComponent />
          <Planet PlanetDayMap={MarsDayMap} PlanetNormalMap={EarthNormalMap} PlanetSpecularyMap={EarthSpecularyMap} PlanetCloudsMap={false} />
        </Suspense>
      </Canvas>
      <Header />
      <AllRights />
    </CanvasContainer>
  );
}

export default App;
