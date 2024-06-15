import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote 
      className="instagram-media bg-white border-0 rounded-md shadow-sm m-1 p-0 w-6/12" 
      data-instgrm-permalink={url} 
      data-instgrm-version="12"
    >
      <div style={{ padding: '16px' }}>
        <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full"></a>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;