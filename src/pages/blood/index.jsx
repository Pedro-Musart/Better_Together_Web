import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Blood() {
    const [bloodBanks, setBloodBanks] = useState([]);

    useEffect(() => {
        const fetchBloodBanks = async () => {
            try {
                const response = await axios.get('https://ondedoarsangue-f74b7.firebaseio.com/bancos_de_sangue/7.json');
                setBloodBanks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBloodBanks();
    }, []);

    return (
        <Layout>
            <div>
                <h1>Lista de Bancos de Sangue</h1>
                <ul>
                    {bloodBanks.map((bank) => (
                        <li key={bank.id}>{bank.name}</li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}