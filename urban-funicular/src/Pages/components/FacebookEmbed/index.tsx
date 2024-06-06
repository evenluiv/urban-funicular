import React, { useEffect } from 'react';

interface FacebookEmbedProps {
  href: string;
}

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ href }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/et_EE/sdk.js#xfbml=1&version=v10.0';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fb-container overflow-hidden rounded-md h-[125px] tablet:h-full flex">
      <div
        className="fb-page"
        data-href={href}
        data-tabs="timeline"
        data-width="500"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        data-lazy="true"
      ></div>
    </div>
  );
};

export default FacebookEmbed;