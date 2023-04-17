import { useState, useEffect } from "react";
import { List } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

export default function Header() {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setMenu(windowDimensions.width > 768 ? false : menu);
    }, [windowDimensions]);

    return (
        <header className="fixed w-full h-[100px] flex justify-end lg:justify-center items-center bg-white shadow-sm z-20">
            <figure className="absolute left-10"><img src={Logo} alt="" /></figure>
            <nav className="text-black font-medium">
            <div className="flex items-center pr-10 lg:hidden">
                        <button
                            onClick={() => setMenu(!menu)}
                            type="button"
                            className="inline-flex items-center text-sm text-black rounded-lg"
                        >
                            <List size={40} weight="bold" />
                        </button>
                    </div>

                <div onClick={() => setMenu(false)}
                        className={`lg:flex justify-center ${menu ? "visible absolute top-[99px] right-0 w-full shadow-md text-center" : "hidden"}`}>
                    <div className="bg-white flex lg:flex-row flex-col text-lg gap-2 lg:gap-5">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>Empresas</Link>
                        <Link to={'/'}>Pessoas</Link>
                        <Link to={'/'}>Sobre Nós</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}