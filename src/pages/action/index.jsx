import Layout from "../../components/layout"
import { Alimento, Sangue, Exercicio, Bicileta, Roupa, Meditar } from "../../assets"
import { Link } from "react-router-dom"
import { ArrowRight } from "@phosphor-icons/react"

export default function Action() {
    return (
        <Layout>
            <article className="pb-3">
                <section className="flex flex-wrap justify-evenly items-center gap-5">
                    <div className="max-w-sm bg-white border border-gray rounded-lg shadow">
                        <figure>
                            <img className="rounded-t-lg w-[384px] h-[250px]" src={Sangue} alt="" />
                        </figure>
                        <div className="p-5">
                            <p className="mb-2 text-2xl font-medium tracking-tight text-gray-900">Doação de sangue em São Paulo</p>

                            <Link to={'/blood-donation'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg">
                                Saber mais <ArrowRight className="inline ml-2" size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray rounded-lg shadow">
                        <figure>
                            <img className="rounded-t-lg w-[384px] h-[250px]" src={Alimento} alt="" />
                        </figure>
                        <div className="p-5">
                            <p className="mb-2 text-2xl font-medium tracking-tight text-gray-900">Doação de alimentos para todas as regiões do Brasil</p>

                            <Link to={''} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg">
                                Saber mais <ArrowRight className="inline ml-2" size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray rounded-lg shadow">
                        <figure>
                            <img className="rounded-t-lg w-[384px] h-[250px]" src={Roupa} alt="" />
                        </figure>
                        <div className="p-5">
                            <p className="mb-2 text-2xl font-medium tracking-tight text-gray-900">Doação de roupas para todas as estações do ano</p>

                            <Link to={''} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg">
                                Saber mais <ArrowRight className="inline ml-2" size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray rounded-lg shadow">
                        <figure>
                            <img className="rounded-t-lg w-[384px] h-[250px]" src={Exercicio} alt="" />
                        </figure>
                        <div className="p-5">
                            <p className="mb-2 text-2xl font-medium tracking-tight text-gray-900">Faça exercícios físicos regularmente </p>

                            <Link to={''} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg">
                                Saber mais <ArrowRight className="inline ml-2" size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray rounded-lg shadow">
                        <figure>
                            <img className="rounded-t-lg w-[384px] h-[250px]" src={Bicileta} alt="" />
                        </figure>
                        <div className="p-5">
                            <p className="mb-2 text-2xl font-medium tracking-tight text-gray-900">Aderir uso de bicicleta para locomoção até a empresa</p>

                            <Link to={''} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg">
                                Saber mais <ArrowRight className="inline ml-2" size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray rounded-lg shadow">
                        <figure>
                            <img className="rounded-t-lg w-[384px] h-[250px]" src={Meditar} alt="" />
                        </figure>
                        <div className="p-5">
                            <p className="mb-2 text-2xl font-medium tracking-tight text-gray-900">Meditação para o bem-estar emocional e físico.</p>

                            <Link to={''} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg">
                                Saber mais <ArrowRight className="inline ml-2" size={20} />
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
    )
}