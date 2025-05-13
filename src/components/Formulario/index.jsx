import { useState } from "react";

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
            />
            <h2>Olá, {nome}</h2>
        </div>
    )
}