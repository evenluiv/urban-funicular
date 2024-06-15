import React, { useEffect, useRef, useState } from 'react';
import loadGoogleMapsScript from './loadGoogleMapsScript';

const containerStyle: React.CSSProperties = {
  width: '100%', // Set width to 100% to make it responsive
  height: '400px', // Fixed height
};

const center = {
  lat: 59.45856957805664,
  lng: 24.8616672746847,
};

interface GoogleMapProps {
  apiKey: string;
  mapId: string;
}

const MyGoogleMaps: React.FC<GoogleMapProps> = ({ apiKey, mapId }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadGoogleMapsScript(apiKey)
            .then(() => setMapLoaded(true))
            .catch((error) => {
              console.error('Error loading Google Maps script:', error);
              setError('Error loading Google Maps script.');
            });
          observer.disconnect(); // Disconnect observer once the map is loaded
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
          const { Map } = (await google.maps.importLibrary('maps')) as typeof google.maps;
          const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as typeof google.maps.marker;

          if (mapRef.current) {
            const map = new Map(mapRef.current, {
              center,
              zoom: 16,
              mapId: mapId, // Set the Map ID here
            });

            new AdvancedMarkerElement({
              position: center,
              map,
              title: 'Porkuni KoerteHotell',
            });
          }
        } catch (err) {
          console.error('Error initializing Google Map:', err);
          setError('Error initializing Google Map.');
        }
      };

      initializeMap();
    }
  }, [mapLoaded, mapId]);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div ref={mapRef} className="map-container" style={containerStyle}></div>
      )}
    </div>
  );
};

export default MyGoogleMaps;