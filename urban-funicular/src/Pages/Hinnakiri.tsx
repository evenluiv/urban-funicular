import { dayInfo, nightInfo } from "./Kodu";
import PriceCard from "./components/PriceCard";

export default function Hinnakiri() {
    return (
        <>
            <div className="flex flex-col mx-auto my-10 pb-12 pt-24 w-8/12 gap-20">
                <h1 className="flex items-center justify-center text-center laptop:text-left laptop:justify-start text-4xl tablet:text-5xl desktop:text-5xl font-semibold">Meie Teenused</h1>
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