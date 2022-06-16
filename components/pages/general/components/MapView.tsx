import { styled } from "@stitches/react";
import * as React from "react";
import Image from "next/image";
import ReactMapGL, { Marker } from "react-map-gl";

const MapView = (props) => {
  const MapWrapper = styled("div", {
    display: "flex",
    gridColumn: "2 / span 6",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: 62,
  });
  return (
    <MapWrapper>
      <ReactMapGL
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: props.longitude,
          latitude: props.latitude,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/trafficagency/cl0bk8itg000h14pjngwkk0nh"
      >
        <Marker
          longitude={props.longitude}
          latitude={props.latitude}
          anchor="bottom"
        >
          <Image
            src={"/assets/icon-union.svg"}
            alt={"map-icon"}
            width={40}
            height={52}
          />
        </Marker>
      </ReactMapGL>
    </MapWrapper>
  );
};
export default MapView;
