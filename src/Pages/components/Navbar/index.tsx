import { Link, NavLink } from 'react-router-dom';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';
import React from 'react';

const Navbar = () => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggeled, setIsMenuToggeled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 800px)");

  return (
    <nav>
        <div
        className={`${flexBetween} fixed top-0 z-40 shadow-lg bg-pink-100 w-full py-5`}
      >
        <div className={`${flexBetween} mx-auto w-8/12`}>
            <div className={`${flexBetween} w-full`}>
                {/* LEFT SIDE */}
                <Link to="/" className='font-extrabold tracking-wide text-lg'>
                    KOERTEHOTELL
                </Link>
                <div className={`${flexBetween}`}>

                </div>
                {/* RIGHT SIDE */}
                {isAboveMediumScreens ? (
                    <div className={`flex justify-end gap-3 w-full`}>
                        <div className={`${flexBetween} font-semibold text-sm`}>
                            <ul className={`${flexBetween} gap-3`}>
                                <li>
                                    <NavLink to="/meist">MEIST</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/hinnakiri">HINNAKIRI</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/galerii">GALERII</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogi">BLOGI</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={`${flexBetween} bg-blue-100 py-1 px-5 rounded-2xl`}>
                            <button>
                                <NavLink to="/kontakt" className={`${flexBetween} font-semibold`}>KONTAKT</NavLink>
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                    className="rounded-full bg-blue-100 p-2"
                    onClick={() => setIsMenuToggeled(!isMenuToggeled)}
                    >
                        <Bars3Icon className="h-6 w-6 text-black" />
                    </button>
                )}
            </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuToggeled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-100 drop-shadow-xl'>
            {/* CLOSE ICON */}
            <div className='flex justify-end p-12'>
                <button onClick={() => setIsMenuToggeled(!isMenuToggeled)}>
                    <XMarkIcon className='h-6 w-6 text-black' />
                </button>
            </div>

            {/* MENU ITEMS */}
            <div className={`flex font-semibold text-2xl`}>
                <ul className={`flex flex-col gap-4 pl-8`}>
                    <li>
                        <NavLink to="/meist">MEIST</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hinnakiri">HINNAKIRI</NavLink>
                    </li>
                    <li>
                        <NavLink to="/galerii">GALERII</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogi">BLOGI</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kontakt">KONTAKT</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar