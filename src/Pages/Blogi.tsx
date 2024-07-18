import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const FacebookPageEmbed = lazy(() => import('./components/FacebookEmbed'));
const InstagramEmbed = lazy(() => import('./components/InstagramEmbed'));

const Blogi: React.FC = () => {
  return (
    <div className="mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 bg-pink-100">
      <h1 className="flex 
        items-center 
        justify-center 
        text-center 
        desktop:text-left 
        desktop:justify-start 
        text-4xl 
        tablet:text-5xl 
        desktop:text-5xl 
        font-semibold
        z-10">
        BLOGI
      </h1>
      <div className="grid grid-cols-1 gap-6 pt-4">
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
            <div className="flex justify-center">
            <FacebookPageEmbed href="https://www.facebook.com/facebook" />
            </div>
            </Suspense>
            
            <Suspense fallback={<div>Loading...</div>}>
            <div className="flex justify-center z-10">
              <InstagramEmbed url="https://www.instagram.com/instagram/" />
            </div>
            </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Blogi;
