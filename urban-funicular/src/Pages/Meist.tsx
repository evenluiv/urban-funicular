import { NavLink } from "react-router-dom";
import image0 from "../../src/assets/image0.jpeg";
import image5 from "../../src/assets/image5.jpeg";

export default function Meist() {
    const textStyle = "font-semibold text-md/normal tablet:text-xl/normal";
    
    return (
    <>
        <div className={`grid mx-auto pb-6 pt-24 w-8/12 gap-4 laptop:grid-cols-2`}>
            <div className="flex flex-col place-content-end gap-4">
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
            <div className="flex justify-end align-bottom laptop:items-end">
                <img src={image0} alt="image0" className="w-full object-scale-down desktop:w-5/6 rounded-md" />
            </div>
        </div>
        <div className={`grid mx-auto pb-6 w-8/12 gap-4 laptop:grid-cols-2`}>
            <div className="flex justify-start laptop:items-end">
                <img src={image5} alt="image5" className="w-full object-scale-down desktop:w-5/6 rounded-md" />
            </div>
            <div className="flex flex-col place-content-end gap-4">
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