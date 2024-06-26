import { NavLink } from "react-router-dom";
import image0 from "../../src/assets/image0.jpeg";
import image5 from "../../src/assets/image5.jpeg";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed aliquam, quam et consectetur lacinia, lacus arcu imperdiet nibh, et lobortis metus dolor et dui. 
                Praesent viverra nibh vitae ligula viverra, et molestie erat ultricies. 
                Aenean vel auctor ipsum. Nunc at lectus scelerisque, euismod turpis id, pretium erat. 
                Aliquam eget sodales nisl, in suscipit purus. Vivamus lacinia placerat velit. Ut viverra vitae felis non aliquam.
                Quisque imperdiet tempus lorem, ac dignissim orci fermentum cursus. Sed facilisis gravida felis sed condimentum. 
                Quisque sollicitudin arcu dui, in pellentesque quam consectetur ac. Etiam pretium sapien justo, non posuere mi lobortis ut.  
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed aliquam, quam et consectetur lacinia, lacus arcu imperdiet nibh, et lobortis metus dolor et dui. 
                Praesent viverra nibh vitae ligula viverra, et molestie erat ultricies. 
                Aenean vel auctor ipsum. Nunc at lectus scelerisque, euismod turpis id, pretium erat. 
                Aliquam eget sodales nisl, in suscipit purus. Vivamus lacinia placerat velit. Ut viverra vitae felis non aliquam.
                Quisque imperdiet tempus lorem, ac dignissim orci fermentum cursus. Sed facilisis gravida felis sed condimentum. 
                Quisque sollicitudin arcu dui, in pellentesque quam consectetur ac. Etiam pretium sapien justo, non posuere mi lobortis ut.  
                </p>
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