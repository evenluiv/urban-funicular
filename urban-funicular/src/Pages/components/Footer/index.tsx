import { NavLink } from "react-router-dom";

const Footer = () => {
    
    return (
        <footer className="bg-blue-50 pt-8 pb-12">
            <div className="justify-between mx-auto w-8/12 tablet:flex">
                <div className="flex flex-col gap-1 mt-16 basis-1/2 tablet:mt-0">
                    <h1 className="text-2xl">Koertehotell</h1>
                    <p>1, Kose — Ardu</p>
                    <p>75112, Harju maakond, Kose vald, Sõmeru</p>
                    <p>+372 5070 6082</p>
                    <p>koertehotell@koertehotell.ee</p>
                    <p>© Koertehotell All Rights Reserved</p>
                </div>
                <div className="flex gap-6 mt-16 basis-1/8 phone:mt-0">
                    <div>
                        <h4 className="font-bold">
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
                    <div>
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