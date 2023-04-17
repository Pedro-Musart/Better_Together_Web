import Layout from "../../components/layout"
import { MedalMilitary, Buildings, Handshake, ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react'
import { Destaque, DestaqueDois, DestaqueTres, Apple, Google, Meta, Oracle, Ambev, Ibm, Microsoft, User, UserOne, UserTwo, UserThree, UserFour, UserFive, UserSix } from "../../assets"

export default function Home() {
    return (
        <Layout>
            <article>
                <section>
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center text-center md:text-start px-5 lg:px-10">
                        <div>
                            <p className="text-3xl lg:text-6xl xl:text-8xl font-bold uppercase">
                                <span className="text-red">Una-se</span> para um <br /> <span className="text-green">mundo</span> melhor
                            </p>
                            <p className="text-black md:text-xl pt-7 lg:pt-3">Aqui nós transformamos as boas atitudes em recompensas para você e para todos!</p>

                            <figure className="flex justify-center md:justify-start gap-3 py-7 md:pt-12 lg:pt-10">
                                <img src={Apple} alt="" className="w-[150px] md:w-[195px]" />
                                <img src={Google} alt="" className="w-[150px] md:w-[195px]" />
                            </figure>
                        </div>

                        <figure>
                            <img src={Destaque} alt="" />
                        </figure>
                    </div>

                    <div className="mt-10 lg:-mt-20 px-5 lg:px-10">
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

                    <div className="flex flex-wrap-reverse items-center justify-evenly pt-10 px-5 lg:px-10">
                        <figure className="lg:flex-1">
                            <img src={DestaqueDois} alt="" className="xl:pl-20" />
                        </figure>

                        <div className="flex-1 text-lg">
                            <p className="text-4xl xl:text-5xl font-semibold pb-5 text-center lg:text-start">Cadastre sua empresa!</p>
                            <p className="py-5">
                                Com a nossa solução, sua corporação tem a oportunidade de criar um ambiente de trabalho
                                mais engajador e responsável socialmente. Ao incentivar os funcionários a realizar ações
                                positivas, como doação de sangue, alimentos e outras atividades, sua empresa se torna parte
                                da transformação social e promove valores que vão muito além do lucro.
                            </p>
                            <p>
                                Além disso, ao utilizar a plataforma, sua empresa pode reconhecer e recompensar
                                os funcionários por essas boas ações, incentivando ainda mais o engajamento e o senso
                                de comunidade entre os colaboradores. E, é claro, ao fazer parte da nossa rede de empresas
                                engajadas, sua empresa também ganha maior visibilidade e reconhecimento por suas práticas
                                socialmente responsáveis.
                            </p>
                        </div>
                    </div>

                    <div className="pt-10 px-5 lg:px-10">
                        <p className="text-4xl xl:text-5xl font-semibold">Empresas Parceiras</p>
                        <p className="py-5 text-lg">
                            Confira algumas das empresas que já adotaram a nossa plataforma para aumentar <br />
                            o engajamento dos funcionários e a responsabilidade social corporativa.
                        </p>

                        <div className="flex items-center">
                            <ArrowCircleLeft size={50} weight="fill" className="text-red mb-7" />
                            <figure className="w-full flex justify-evenly overflow-x-hidden">
                                <img src={Microsoft} alt="" className="w-[150px] lg:w-[200px] xl:w-[300px]" />
                                <img src={Ibm} alt="" className="w-[150px] lg:w-[200px] xl:w-[300px]" />
                                <img src={Ambev} alt="" className="w-[150px] lg:w-[200px] xl:w-[300px]" />
                                <img src={Oracle} alt="" className="w-[150px] lg:w-[200px] xl:w-[300px]" />
                                <img src={Meta} alt="" className="w-[150px] lg:w-[200px] xl:w-[300px]" />
                            </figure>
                            <ArrowCircleRight size={50} weight="fill" className="text-red mb-7" />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center pt-10 px-5 lg:px-10 bg-[#F2F2F2]">
                        <div className="flex-1 text-lg">
                            <p className="text-4xl xl:text-5xl font-semibold pb-5 text-center lg:text-start">Histórias Inspiradoras</p>
                            <p className="py-5">
                                Nossa plataforma tem o poder de transformar vidas e impactar positivamente a sociedade.
                            </p>
                            <p>
                                Aqui, compartilhamos histórias reais de usuários que utilizaram a Better Together para realizar boas ações e receber recompensas, incentivando ainda mais a participação e o engajamento de todos. Acompanhe esses relatos inspiradores e veja como pequenas ações podem fazer uma grande diferença no mundo. E se você também tiver uma história para contar, não deixe de nos enviar para que possamos compartilhar com toda a nossa comunidade!
                            </p>
                        </div>

                        <figure className="lg:flex-1">
                            <img src={DestaqueTres} alt="" className="xl:pl-32" />
                        </figure>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center py-10 px-5 lg:px-10 bg-[#F2F2F2]">
                        <div className="flex-1 hidden md:flex justify-center items-center lg:flex-col">
                            <figure className="self-end xl:pr-20">
                                <img src={UserOne} alt="" />
                            </figure>
                            <figure  className="self-start">
                                <img src={UserTwo} alt="" />
                            </figure>
                            <figure className="self-end xl:pr-10">
                                <img src={UserThree} alt="" />
                            </figure>
                        </div>

                        <div>
                            <p className="text-4xl xl:text-5xl font-semibold text-center">Relatos de Usuários</p>
                            <p className="py-5 text-center text-lg">Acompanhe esses relatos inspiradores e veja como pequenas ações podem <br /> fazer uma grande diferença no mundo</p>

                            <div className="hidden md:flex justify-center items-center relative ">
                                <figure className="relative -mr-14">
                                    <img src={User} alt=""/>
                                </figure>
                                <p className="bg-white shadow-lg rounded-md text-lg max-w-xl py-10 pr-10 pl-20">
                                    Eu sempre quis ajudar a comunidade de alguma forma, mas não sabia por onde começar. <br />
                                    Foi quando descobri a Better Together e me cadastrei na plataforma. Desde então, já participei de diversas ações, como doação de sangue e voluntariado em hospitais. <br />
                                    E o melhor de tudo é que, além de me sentir bem em ajudar, ainda ganho pontos que posso trocar por prêmios na minha empresa. Recomendo a todos!
                                </p>
                            </div>

                            <div className="flex flex-col md:hidden justify-center items-center relative ">
                                <figure className="pb-5">
                                    <img src={User} alt=""/>
                                </figure>

                                <p className="bg-white shadow-lg rounded-md text-lg max-w-xl p-5">
                                    Eu sempre quis ajudar a comunidade de alguma forma, mas não sabia por onde começar. <br />
                                    Foi quando descobri a Better Together e me cadastrei na plataforma. Desde então, já participei de diversas ações, como doação de sangue e voluntariado em hospitais. <br />
                                    E o melhor de tudo é que, além de me sentir bem em ajudar, ainda ganho pontos que posso trocar por prêmios na minha empresa. Recomendo a todos!
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 hidden md:flex justify-center items-center lg:flex-col">
                            <figure className="self-end">
                                <img src={UserFour} alt="" />
                            </figure>
                            <figure className="self-start xl:pl-10">
                                <img src={UserFive} alt="" />
                            </figure>
                            <figure className="self-end xl:pr-20">
                                <img src={UserSix} alt="" />
                            </figure>
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
    )
}