import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
const loadGoogleMapsScript = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (typeof window.google === "object" && typeof window.google.maps === "object") {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.head.appendChild(script);
  });
};
const containerStyle = {
  width: "100%",
  // Set width to 100% to make it responsive
  height: "400px"
  // Fixed height
};
const center = {
  lat: 59.45856957805664,
  lng: 24.8616672746847
};
const MyGoogleMaps = ({ apiKey, mapId }) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadGoogleMapsScript(apiKey).then(() => setMapLoaded(true)).catch((error2) => {
            console.error("Error loading Google Maps script:", error2);
            setError("Error loading Google Maps script.");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, [apiKey]);
  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      const initializeMap = async () => {
        try {
          const { Map } = await google.maps.importLibrary("maps");
          const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
          if (mapRef.current) {
            const map = new Map(mapRef.current, {
              center,
              zoom: 16,
              mapId
              // Set the Map ID here
            });
            new AdvancedMarkerElement({
              position: center,
              map,
              title: "Porkuni KoerteHotell"
            });
          }
        } catch (err) {
          console.error("Error initializing Google Map:", err);
          setError("Error initializing Google Map.");
        }
      };
      initializeMap();
    }
  }, [mapLoaded, mapId]);
  return /* @__PURE__ */ jsx("div", { children: error ? /* @__PURE__ */ jsxs("div", { children: [
    "Error: ",
    error
  ] }) : /* @__PURE__ */ jsx("div", { ref: mapRef, className: "map-container", style: containerStyle }) });
};
export {
  MyGoogleMaps as default
};
