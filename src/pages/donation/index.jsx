import axios from 'axios';
import { useState, useEffect } from "react";
import Layout from "../../components/layout";

export default function Donation() {
    const [foodsBank, setFoodsBank] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('https://www.givefood.org.uk/api/2/foodbanks/');
                setFoodsBank(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFoods();
    }, []);

    return (
        <Layout>
            <article className="flex flex-col justify-evenly items-center pb-5">
                <h1 className="text-3xl font-semibold text-black pb-2">Lista de Banco de Alimentos</h1>
                <ul className="list-disc list-inside w-1/2 h-[40vh] overflow-y-auto">
                    {foodsBank.map((bank, index) => (
                        <li key={index} className="text-lg">{bank.name}</li>
                    ))}
                </ul>
            </article>
        </Layout>
    )
}