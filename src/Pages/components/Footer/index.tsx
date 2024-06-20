import { NavLink } from "react-router-dom";

const Footer = () => {
    
    return (
        <footer className="bottom-0 bg-blue-50 pt-8 pb-12 w-full">
            <div className="justify-between mx-auto laptop:w-8/12 w-10/12 tablet:flex">
                <div className="flex flex-col gap-1 mt-16 basis-1/2 tablet:mt-0">
                    <h1 className="text-2xl z-10">Koertehotell</h1>
                    <p className="z-10">1, Kose — Ardu <br />
                    75112, Harju maakond, Kose vald, Sõmeru <br />
                    +372 5070 6082 <br />
                    koertehotell@koertehotell.ee
                    </p>
                </div>
                <div className="flex gap-6 mt-16 basis-1/8 phone:mt-0">
                    <div className="z-10">
                        <h4 className="font-bold z-10">
                            <NavLink to="/">Kodu</NavLink>
                        </h4>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <NavLink to="/blogi">Blogi</NavLink>
                            </li>
                            <li>
                                <NavLink to="/meist">Meist</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hinnakiri">Hinnakiri</NavLink>
                            </li>
                            <li>
                                <NavLink to="/galerii">Galerii</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="z-10">
                        <h4 className="font-bold">
                            <NavLink to="/kontakt">Kontakt</NavLink>
                        </h4>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <NavLink to="/kontakt">Facebook</NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontakt">Instagram</NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontakt">E-Mail</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer