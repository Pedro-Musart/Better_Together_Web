import Layout from "../../components/layout"
import { Destaque, Apple, Google } from "../../assets"
import { MedalMilitary, Buildings, Handshake } from '@phosphor-icons/react'

export default function Home() {
    return (
        <Layout>
            <article>
                <section>
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center text-center md:text-start">
                        <div>
                            <p className="text-3xl lg:text-6xl xl:text-8xl font-bold uppercase">
                                <span className="text-red">Una-se</span> para um <br /> <span className="text-green">mundo</span> melhor
                            </p>
                            <p className="text-black md:text-xl pt-7 lg:pt-3">Aqui nós transformamos as boas atitudes em recompensas para você e para todos!</p>

                            <figure className="flex justify-center md:justify-start gap-3 py-7 md:pt-12 lg:pt-10">
                                <img src={Apple} alt="" className="w-[150px] md:w-[195px]" />
                                <img src={Google} alt=""  className="w-[150px] md:w-[195px]" />
                            </figure>
                        </div>

                        <figure>
                            <img src={Destaque} alt="" />
                        </figure>
                    </div>

                    <div className="mt-10 lg:-mt-20">
                        <p className="text-black text-3xl font-bold uppercase">Nosso serviço</p>

                        <div className="flex flex-wrap md:flex-nowrap gap-5 lg:gap-2 pt-5 lg:pt-7">
                            <div className="p-2 bg-white rounded-lg shadow-lg">
                                <MedalMilitary size={45} weight="fill" className="text-red" />
                                <p className="pb-2 font-medium tracking-tight text-black text-xl">Pontue e ganhe prêmios</p>
                                <p className="pb-2 text-gray text-lg">Mais do que pontos, uma chance de mudar o mundo e sair ganhando!</p>
                            </div>

                            <div className="p-2 bg-white rounded-lg shadow-lg">
                                <Buildings size={45} weight="fill" className="text-red" />
                                <p className="pb-2 font-medium tracking-tight text-black text-xl">Contribua para a sociedade</p>
                                <p className="pb-2 text-gray text-lg">Pequenas ações, grandes transformações. Juntos, podemos fazer a diferença na sociedade!</p>
                            </div>

                            <div className="p-2 bg-white rounded-lg shadow-lg">
                                <Handshake size={45} weight="fill" className="text-red" />
                                <p className="pb-2 font-medium tracking-tight text-black text-xl">Crie valor para a sua empresa</p>
                                <p className="pb-2 text-gray text-lg">Invista em responsabilidade social corporativa e faça sua empresa crescer de forma sustentável!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
    )
}