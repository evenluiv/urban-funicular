import MyGoogleMaps from "./components/MyGoogleMaps/MyGoogleMaps";

const Kontakt = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY
    const mapID = import.meta.env.VITE_GOOGLE_MAPS_ID

    return (
        <div className="flex flex-col mx-auto pb-6 pt-24 w-8/12 bg-pink-100">
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
                    <MyGoogleMaps apiKey={apiKey} mapId={mapID} />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl">Kirjuta Meile</h1>
                    <form action="" className="flex flex-col h-full gap-3">
                        <input type="text" id="nimi" placeholder="Nimi..." className="rounded-full px-3 h-10 w-1/2 shadow-lg" />
                        <input type="text" id="eMail" placeholder="E-mail..." className="rounded-full px-3 h-10 w-1/2 shadow-lg" />
                        <textarea id="sisu" placeholder="Kirja sisu..." className="rounded-md px-3 pt-3 h-60 laptop:h-full shadow-lg"/>
                        <button className="h-10 rounded-full border-black border-solid border-2 bg-blue-100 shadow-lg">Saada</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kontakt;