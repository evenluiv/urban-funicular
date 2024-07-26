import { NavLink } from "react-router-dom";
import dogCircle from "../../../src/assets/doggo-circle-cropped.png";
import dogs2 from "../../../src/assets/image2.jpeg";
import sunIcon from "../../../src/assets/sun-icon.png";
import moonIcon from "../../../src/assets/moon-icon.png";
import weekIcon from "../../../src/assets/week-icon.png";
import PriceCard from "../components/PriceCard";
import React from "react";

export const dayInfo ={
    image: sunIcon,
    title: 'Päevahoid',
    price: '15€/12h',
    listItems: [
        'Hoiuaeg: 09-21',
        'Söötmine',
        'Jalutamine',
        'Mängimine'
    ]
};

export const nightInfo ={
    image: moonIcon,
    title: 'Ööpäevahoid',
    price: '40€/24h',
    listItems: [
        'Hoiuaeg: 24 tundi',
        'Majutus hotellitoas',
        'Söötmine',
        'Jalutamine',
        'Mängimine'
    ]
};

export const weekInfo ={
    image: weekIcon,
    title: 'Nädalahoid',
    price: '40€/24h',
    listItems: [
        'Hoiuaeg: 7 ööpäeva',
        'Majutus hotellitoas',
        'Söötmine',
        'Jalutamine',
        'Mängimine'
    ]
};

const Kodu: React.FC = () => {
    const flexBetween = "flex items-center justify-between";
    
    return (
        <>
        {/* Hero Section */}
            <div className={`grid mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 tablet:grid-cols-2`}>
                <div className="flex flex-col place-content-end gap-4 pb-4 z-10">
                    <h1 className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold">PORKUNI</h1>
                    <h1 className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold">KOERTEHOTELL</h1>
                    <p className="text-lg font-semibold">Lorem ipsum do lor sit amet, consectetur adipiscing elit. Curabitur id nunc fringilla erat semper suscipit eget in lacus. </p>
                    <div className={`flex justify-start flex-wrap gap-2 text-lg`}>
                        <div className={`${flexBetween} bg-blue-100 py-1 px-5 rounded-md`}>
                            <button>
                                <NavLink to="/kontakt" className={`${flexBetween} font-semibold`}>KONTAKT</NavLink>
                            </button>
                        </div>
                        <div className={`${flexBetween} py-1 px-5 border-2 border-blue-100 rounded-md`}>
                            <button>
                                <NavLink to="/hinnakiri" className={`${flexBetween} font-semibold`}>HINNAKIRI</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end z-10">
                    <img src={dogCircle} alt="smallDogCircle" className="w-full object-scale-down desktop:w-5/6 " />
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-pink-50 py-1">
                <div className="grid mx-auto mt-10 pb-6 laptop:w-8/12 w-10/12 gap-4 laptop:grid-cols-2 laptop:grid-rows-2">
                    <div className="flex flex-col place-content-end gap-6 z-10">
                        <h1 className="text-4xl tablet:text-5xl desktop:text-5xl font-semibold">Too oma koer puhkama</h1>
                        <p className="text-md tablet:text-lg tablet:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id nunc fringilla erat semper suscipit eget in lacus. Aliquam dapibus nibh lorem, in venenatis lorem condimentum vitae. Donec sit amet odio vitae nulla viverra accumsan. Aliquam tincidunt non felis a viverra. Cras ullamcorper nisl vestibulum tellus semper, sed molestie turpis cursus. In rutrum iaculis tellus ac tincidunt.</p>
                    </div>
                    <div className={`flex flex-wrap place-content-end gap-2 py-4 text-lg laptop:grid laptop:row-start-2 laptop:col-span-2 laptop:grid-cols-2 laptop:justify-items-center z-10`}>
                        <div className={`flex items-center justify-center tablet:max-h-10 tablet:w-48 bg-blue-100 py-1 px-5 rounded-md`}>
                            <button>
                                <NavLink to="/kontakt" className={`${flexBetween} font-semibold`}>KIRJUTA MEILE</NavLink>
                            </button>
                        </div>
                        <div className={`flex items-center justify-center tablet:max-h-10 tablet:w-48 bg-blue-100 py-1 px-5 rounded-md`}>
                            <button>
                                <NavLink to="/hinnakiri" className={`${flexBetween} font-semibold`}>LOE ROHKEM</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="grid content-end laptop:col-start-1 laptop:row-start-1 z-10">
                        <img src={dogs2} alt="Dogs" className="w-full rounded-md shadow-lg desktop:w-5/6" />
                    </div>
                </div>
            </div>

            {/* Price Section */}
            <div className="py-1">
                <div className="flex flex-col mx-auto my-10 pb-6 laptop:w-8/12 w-10/12 gap-20">
                    <h1 className="flex items-center justify-center text-center laptop:text-left laptop:justify-start text-4xl tablet:text-5xl desktop:text-5xl font-semibold z-10">Meie Teenused</h1>
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
                        <PriceCard
                            image={weekInfo.image}
                            title={weekInfo.title}
                            price={weekInfo.price}
                            listItems={weekInfo.listItems}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kodu