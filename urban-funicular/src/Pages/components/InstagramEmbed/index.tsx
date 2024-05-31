import React, { useEffect } from 'react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/instagram/"
      data-instgrm-version="12"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '600px',
        minWidth: '326px',
        padding: 0,
        width: '99.375%',
        height: 'auto'
      }}
    >
      <div className="p-4">
        <a
          id="main_link"
          href="https://www.instagram.com/instagram/"
          className="block text-center no-underline"
          target="_blank"
          rel="noopener noreferrer"
          style={{ lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }}
        >
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-10 w-10 mr-3"></div>
            <div className="flex flex-col justify-center">
              <div className="bg-gray-200 rounded h-3.5 mb-1.5 w-24"></div>
              <div className="bg-gray-200 rounded h-3.5 w-16"></div>
            </div>
          </div>
          <div style={{ padding: '19% 0' }}></div>
          <div className="block h-12 w-12 mx-auto mb-3">
            <svg width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g transform="translate(-511 -20)" fill="#000">
                  <path d="M556.869 30.41c-2.055 0-3.721 1.666-3.721 3.721s1.666 3.721 3.721 3.721 3.721-1.666 3.721-3.721-1.666-3.721-3.721-3.721M541 60.657c-5.886 0-10.658-4.771-10.658-10.658 0-5.886 4.771-10.658 10.658-10.658 5.887 0 10.658 4.771 10.658 10.658 0 5.886-4.771 10.658-10.658 10.658M541 33.886c-8.9 0-16.114 7.214-16.114 16.114 0 8.9 7.214 16.114 16.114 16.114 8.899 0 16.114-7.214 16.114-16.114 0-8.9-7.215-16.114-16.114-16.114M565.378 62.101c-.134 2.921-.622 4.506-1.032 5.563-.543 1.398-1.192 2.395-2.24 3.444-1.048 1.049-2.046 1.697-3.444 2.241-1.055.41-2.642.896-5.563 1.032-3.159.144-4.106.176-12.104.176s-8.945-.032-12.104-.176c-2.921-.136-4.506-.622-5.563-1.032-1.398-.544-2.395-1.192-3.444-2.241-1.049-1.049-1.697-2.046-2.241-3.444-.41-1.057-.898-2.642-1.032-5.563-.144-3.159-.176-4.106-.176-12.104s.032-8.945.176-12.104c.136-2.921.622-4.506 1.032-5.563.544-1.398 1.192-2.395 2.241-3.444 1.049-1.049 2.046-1.697 3.444-2.241 1.057-.41 2.642-.896 5.563-1.032 3.159-.144 4.106-.176 12.104-.176s8.945.032 12.104.176c2.921.136 4.506.622 5.563 1.032 1.398.544 2.395 1.192 3.444 2.241 1.049 1.049 1.697 2.046 2.241 3.444.41 1.057.898 2.642 1.032 5.563.144 3.159.176 4.106.176 12.104s-.032 8.945-.176 12.104z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="text-blue-500 font-bold text-sm leading-5">
            View this post on Instagram
          </div>
          <div style={{ padding: '12.5% 0' }}></div>
          <div className="flex flex-row mb-3 items-center">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full h-3.5 w-3.5 translate-x-0 translate-y-1.75"></div>
              <div className="bg-gray-200 h-3.5 transform -rotate-45 translate-x-0.75 translate-y-0.25 w-3.5 flex-grow-0 mr-3 ml-0.5"></div>
              <div className="bg-gray-200 rounded-full h-3.5 w-3.5 translate-x-2.25 translate-y--4.5"></div>
            </div>
            <div className="ml-2">
              <div className="bg-gray-200 rounded-full h-5 w-5"></div>
              <div className="border-t-2 border-transparent border-l-6 border-solid border-f4f4f4 translate-x-4 translate-y--1 rotate-30"></div>
            </div>
            <div className="ml-auto flex items-center">
              <div className="border-t-8 border-solid border-f4f4f4 border-transparent transform translate-y-4"></div>
              <div className="bg-gray-200 h-3 w-4 translate-y-1"></div>
              <div className="border-t-8 border-l-8 border-solid border-f4f4f4 border-transparent transform translate-y-1 translate-x-2"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center mb-6">
            <div className="bg-gray-200 rounded h-3.5 mb-1.5 w-56"></div>
            <div className="bg-gray-200 rounded h-3.5 w-36"></div>
          </div>
        </a>
        <p className="text-gray-400 text-sm leading-4 text-center overflow-hidden text-ellipsis whitespace-nowrap my-2 py-2">
          <a
            href="https://www.instagram.com/instagram/"
            className="text-gray-400 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shared post
          </a> on <time className="text-sm leading-4">Time</time>
        </p>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;