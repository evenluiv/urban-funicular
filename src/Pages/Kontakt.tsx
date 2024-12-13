import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const MyGoogleMaps = lazy(() => import('./components/MyGoogleMaps/MyGoogleMaps'));

const Kontakt: React.FC = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY as string;
  const mapID = import.meta.env.VITE_GOOGLE_MAPS_ID as string;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Type-safe DOM elements
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const periodInput = document.getElementById('period') as HTMLInputElement;
    const contentInput = document.getElementById('content') as HTMLTextAreaElement;

    // Collect values
    const name: string = nameInput.value.trim();
    const email: string = emailInput.value.trim();
    const period: string = periodInput.value.trim();
    const content: string = contentInput.value.trim();

    // Validation
    if (!name || !email || !period || !content) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Display confirmation
    alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nPeriod of Stay: ${period}\nContent: ${content}`);

    // Clear the form
    const form = document.getElementById('stayRequestForm') as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="flex flex-col mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 bg-pink-100">
      <h1 className="flex 
        items-center 
        justify-center 
        text-center 
        laptop:text-left 
        laptop:justify-start 
        text-4xl 
        tablet:text-5xl 
        desktop:text-5xl 
        font-semibold
        z-10">
        KONTAKT
      </h1>
      <div className="flex flex-col justify-evenly laptop:grid laptop:grid-cols-2 pt-4 gap-8 z-10">
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-xl">Koertehotell</h1>
          <p>1, Kose — Ardu <br />
          75112, Harju maakond, Kose vald, Sõmeru <br />
          +372 5070 6082 <br />
          koertehotell@koertehotell.ee
          </p>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <MyGoogleMaps apiKey={apiKey} mapId={mapID} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">Kirjuta Meile</h1>
          <form id="stayRequestForm" className="flex flex-col h-full gap-3" onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" id="nimi" placeholder="Nimi..." className="rounded-full px-3 h-10 laptop:w-1/2 shadow-lg" />
            </div>
            <div className="form-group">
              <input type="text" id="eMail" placeholder="E-mail..." className="rounded-full px-3 h-10 laptop:w-1/2 shadow-lg" />
            </div>
            <div className="form-group flex flex-col laptop:flex-row laptop:items-center gap-4">
                <label htmlFor="periodStart">Alguskuupäev:</label>
                <input type="date" name="begin" id="periodStart" className="rounded-full px-3 h-10 laptop:w-1/3 shadow-lg" required></input>
                <label htmlFor="periodEnd ">Lõppkuupäev:</label>
                <input type="date" name="begin" id="periodEnd" className="rounded-full px-3 h-10 laptop:w-1/3 shadow-lg" required></input>
            </div>
            <div className="form-group h-60 laptop:h-full">
              <textarea id="sisu" placeholder="Kirja sisu..." className="rounded-md px-3 pt-3 h-60 w-full laptop:h-full shadow-lg"/>
            </div>
            <div className="form-group">
              <button type='submit' className="h-10 w-full rounded-full border-black border-solid border-2 bg-blue-100 shadow-lg">Saada</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
