import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-voice-service/campaigns/2020/16909/16909_tall_gw_hero_wyze_band_3000x1200._CB409228392_.jpg"
        alt="home image"
      ></img>

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="B00FN3EISO"
          title="NRG ST-015MC-WT 350mm Classic Wood Grain White Steering Wheel 3-Spoke Center In Neochrome"
          price={129.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51e8grjZZ1L._AC_SL1279_.jpg"
        />
        <Product
          id="B01MXENM2I"
          title="NRG Innovations ST-036BSB-MC Black Sparkled Wood Grain Wheel (3' Deep, 350mm, 3 Solid spoke center in Neochrome)"
          price={170.52}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/511hMfK4hWL._AC_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="B07VBQ9KTM"
          title="NRG Innovations SK-580BC-MC-2 M10 X 1.5 Carbon Fiber Adjustable Manual Shifter Shift Knob"
          price={37.49}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61NS1qW-2nL._AC_SL1200_.jpg"
        />
        <Product
          id="B071NN1W7W"
          title="NRG Innovations LN-LS700RD-21 20pcs M12x1.5 Locking Lug Nuts + Wheel Lock Key"
          price={74.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71OkH0HIPxL._AC_SL1200_.jpg"
        />
        <Product
          id="B00DORR50Y"
          title="NRG Reclining FRP Bucket Seat - Black with Red Trim - Part # RSC-400BK"
          price={359.99}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/31JsqYAFWXL._AC_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="B07ZSGR4CH"
          title="AOC AGON AG493UCX 49' Curved Immersive Gaming Monitor, Dual QHD 5120x1440 @ 120Hz, VA Panel, 1ms 120Hz Adaptive-Sync, 121% sRGB, Height Adjustable, 4-Yr Zero Dead Pixels Guarantee,Black/Silver"
          price={999.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71IXyLtFzpL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
