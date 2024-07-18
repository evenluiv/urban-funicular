import { dayInfo, nightInfo } from "./Kodu";
import PriceCard from "./components/PriceCard";

const Tingimused = [
    "kiibistatud",
    "täiesti terve (võtame vastu ainult neid koeri, kes ei ole teistele nakkusohtlikud)",
    "vaktsineeritud marutaudi ja koerakatku vastu",
    "vahetult enne hotelli toomist on tehtud ussi-, kirbu- ja puugitõrje",
    "vähemalt 6 kuune"
]

const Hinnakiri = () => {
    return (
        <>
            <div className="flex flex-col mx-auto mb-20 pb-8 pt-24 laptop:w-8/12 w-10/12 gap-4">
                <h1 className="flex 
                items-center 
                justify-center 
                text-center 
                laptop:text-left 
                laptop:justify-start 
                text-4xl 
                tablet:text-5xl 
                desktop:text-5xl 
                font-semibold">MEIE TEENUSED
                </h1>
                <div className="flex flex-col items-center gap-4 pb-10 z-10">
                    <h2 className="text-2xl">
                        Hotelli Reeglid:
                    </h2>
                    <h3 className="text-xl">
                        Enne koera hotelli toomist veenduge, et Teie koer on:
                    </h3>
                    <ul className="flex flex-col list-disc gap-2 pl-8 text-lg">
                        {Tingimused.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-12 laptop:flex-row laptop:gap-4">
                    <PriceCard
                        image={dayInfo.image}
                        title={dayInfo.title}
                        price={dayInfo.price}
                        listItems={dayInfo.listItems}
                    />
                    <PriceCard 
                        image={nightInfo.image}
                        title={nightInfo.title}
                        price={nightInfo.price}
                        listItems={nightInfo.listItems}
                    />
                </div>
            </div>
        </>
    )
}

export default Hinnakiri;