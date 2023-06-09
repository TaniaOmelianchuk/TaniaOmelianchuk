import React, { useEffect } from "react";
import "./Map.scss";
import Marker from "../assets/images/Marker.png";

export const Map = () => {
  useEffect(() => {
    const initMap = () => {
      let seattle = { lat: 47.666417676610614, lng: -122.41249736723638 };
      let map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: seattle,
      });
      let marker = new window.google.maps.Marker({
        position: seattle,
        map: map,
        icon: { url: Marker },
      });

      fetch("./map-style.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load map style.");
          }
          return response.json();
        })
        .then((data) => {
          map.setOptions({ styles: data });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD4R0owbmdMw2yLBwkrDfCkIdXMt34m1Cg&callback=initMap`;
      script.defer = true;
      script.async = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="map">
      <h2 className="search__title mb-4">Our Main Office:</h2>
      <div id="map"></div>
    </section>
  );
};
