import { Social, Apple, Google, Logo, LogoWhite } from "../../assets";

export default function Header() {
    return (
        <footer className="h-full w-full bg-red text-white flex flex-col justify-center items-center">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-7 text-xl">
                    <p>Home</p>
                    <p>Empresas</p>
                    <figure>
                        <img src={LogoWhite} alt="" className="w-[100px] md:w-auto" />
                    </figure>
                    <p>Pessoas</p>
                    <p>Sobre Nós</p>
                </div>

                <hr className="my-4 md:my-12 border-white sm:mx-auto" />

                <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20">
                    <figure>
                        <img src={Apple} alt="" className="hidden md:flex" />
                    </figure>
                    <figure>
                        <img src={Social} alt="" />
                    </figure>
                    <figure>
                        <img src={Google} alt="" className="hidden md:flex w-[195px]" />
                    </figure>

                    <figure className="flex gap-14 md:hidden">
                        <img src={Apple} alt="" className="w-[100px]" />
                        <img src={Google} alt="" className="w-[100px]" />
                    </figure>
                </div>

                <div className="flex justify-center items-end gap-14 pt-5 md:pt-10">
                    <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023</p>
                    <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Privacy — Terms</p>
                </div>
            </div>
        </footer>
    )
}