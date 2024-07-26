import { NavLink } from "react-router-dom";
import image0 from "../../src/assets/image0.jpeg";
import image5 from "../../src/assets/image5.jpeg";

const Koerad = [
    "🐾 pere kõige vanem Bosse, 10 - aastane kuldne retriiveri poiss",
    "🐾 3-aastane Lordy kuldne retriiveri poiss",
    "🐾 iiri hundikoer,  2-aastane koeratüdruk Zora",
    "🐾 iiri hundikoer, 7 - kuune poiss Lucky."
]

const Meist = () => {
    const textStyle = "font-semibold text-md/normal tablet:text-xl/normal";
    
    return (
    <>
        <div className={`grid mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 gap-4 laptop:grid-cols-2`}>
            <div className="flex flex-col place-content-end gap-4 z-10">
                <h1 className="flex 
                items-center 
                justify-center 
                text-center 
                laptop:text-left 
                laptop:justify-start 
                text-4xl 
                tablet:text-5xl 
                desktop:text-5xl 
                font-semibold">MEIST
                </h1>
                <p className={`${textStyle}`}>
                Olen Elis ning avasin koertehotelli Porkunis Lääne-Virumaal, mis on avar ja kaetud puude ning põõsastega. 
                Siin on koertel mõnus joosta, lustida ja sõbraliku kaaslasega mängida. 
                Võimalik on jalutada kaPorkuni järve ääres ja metsas. Oma lemmikuid saab hotelli jätta nii päevahoidu kui ka mitmeks nädalaks. 
                Hotellis on (mitu?)aedikut ning osadesse saab mahutada ka ühe pere mitu koera. 
                Hotelli perenaisena annan endast parima, et teie koer(ad) saavad toreda vaheldusrikka puhkuse, sel ajal kui peavad pereliikmetes eemal olema.
                </p>
            </div>
            <div className="flex justify-end align-bottom laptop:items-end z-10">
                <img src={image0} alt="image0" className="w-full object-scale-down desktop:w-5/6 rounded-md" />
            </div>
        </div>
        <div className={`grid mx-auto pb-6 laptop:w-8/12 w-10/12 gap-4 laptop:grid-cols-2`}>
            <div className="flex justify-start laptop:items-end z-10">
                <img src={image5} alt="image5" className="w-full object-scale-down desktop:w-5/6 rounded-md" />
            </div>
            <div className="flex flex-col place-content-end gap-4 z-10">
                <p className={`${textStyle}`}>
                    Koertehotelli mõte sai alguse iseenda vajadustest, kuna mul on neli koera, kes on harjunud vabalt suurel alal jooksma. 
                    Seega soovin pakkuda ka teistele koertele sellist võimalust, kes on minu hoole alla usaldatud.  
                </p>
                <p className={`${textStyle}`}>
                    Saage tuttavaks minu nelja rõõmuallikaga:
                </p>
                <ul className="flex flex-col gap-2 text-lg">
                    {Koerad.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="flex justify-center laptop:justify-end">
                    <div className={`flex w-auto justify-center bg-blue-100 py-1 px-5 rounded-md`}>
                        <button>
                            <NavLink to="/kontakt" className={`font-semibold`}>KIRJUTA MEILE</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )
}

export default Meist;